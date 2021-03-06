import * as Swagger from "swagger-schema-official";
import { ITypeNameParserAst, typeNameParser } from "../parsers/parsers";
import { settings } from "../settings";
import { TypeBuilder } from "./typeBuilder";

const typeRefRegEx = /#(?:\/[^\/]+)+\/([^\/]+)/;

type ReplacerFn = (substring: string, ...args: any[]) => string;

function replaceAll(str: string, searchStr, replacement: ReplacerFn | string) {
    const searchRegEx = new RegExp(searchStr.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), "g");
    return str.replace(searchRegEx, replacement as any);
}

function getTypeAliases(): { alias: string, typeDefinition: string }[] {
    if (settings.type.typeAliases) {
        return Object.keys(settings.type.typeAliases).map((alias) => {
            return {
                alias,
                typeDefinition: settings.type.typeAliases[alias] as string,
            };
        });
    }

}
export class TypeNameInfo {

    private static inlineSchemaCount = 1;

    private static genericTypeNames = "TUKABCDEFGHIJLMNOPQRSVWXYZ".split("");

    private static readonly primitiveSwaggerTypes: string[] = ["integer", "number", "string", "boolean"];
    private static readonly primitiveJsTypes: string[] = ["number", "string", "String", "boolean", "Date", "any", "void", "Array", "Map", "Set", "Stream"];

    private static readonly primitiveTypesMapping = {
        "integer+int32": "number",
        "integer+int64": "number",
        "number+double": "number",
        "number+float": "number",
        "number": "number",
        "integer": "number",
        "string": "string",
        "string+byte": "string",
        "string+binary": "Stream",
        "boolean": "boolean",
        "string+date": "Date",
        "string+date-time": "Date",
        "string+password": "string",
    };
    //private parsedResult:ITypeNameParserAst=null;
    public isInlineType: boolean = false;
    private genericTypeArgsMap: Map<ITypeNameParserAst, ITypeNameParserAst> = null;

    constructor(private parsedResult: ITypeNameParserAst) {
        this.substituteAliases();
        if (this.isGeneric) {
            this.genericTypeArgsMap = new Map(this.parsedResult.genericParams.map((ta, i) => [ta, typeNameParser.parse(TypeNameInfo.genericTypeNames[i])] as [ITypeNameParserAst, ITypeNameParserAst]));
        }
    }

    public static fromSwaggerTypeName(swaggerTypeName: string): TypeNameInfo {
        if (settings && settings.type && settings.type.generatedTypes == "interface") {
            let astTypename = typeNameParser.parse(swaggerTypeName);
            if ((astTypename.partialTypeName.indexOf("SwaggerInlineType") == -1) &&
                TypeNameInfo.primitiveJsTypes.findIndex((v) => v == astTypename.partialTypeName) == -1) {
                astTypename.partialTypeName = "I" + astTypename.partialTypeName;
            }
            return new TypeNameInfo(astTypename);
        } else {
            return new TypeNameInfo(typeNameParser.parse(swaggerTypeName));
        }
    }

    public static createInlineTypeName(): TypeNameInfo {
        let name = "";
        if (settings && settings.type && settings.type.generatedTypes == "interface") {
            name = `ISwaggerInlineType${this.inlineSchemaCount++}`;
        } else {
            name = `SwaggerInlineType${this.inlineSchemaCount++}`;
        }
        const ret = new TypeNameInfo(typeNameParser.parse(name));
        ret.isInlineType = true;
        return ret;
    }

    public static isSwaggerTypePrimitive(swaggerTypeName: string): boolean {
        return this.primitiveSwaggerTypes.includes(swaggerTypeName);
    }
    public static getPrimitiveType(schema: Swagger.Schema): string {
        let type = "";
        if (schema.format) {
            type = this.primitiveTypesMapping[`${schema.type}+${schema.format}`];
            if (!type) {
                type = this.primitiveTypesMapping[schema.type];
            }
        } else {
            type = this.primitiveTypesMapping[schema.type];
        }
        if (!type) {
            throw new Error(`unsupported schema {type: ${schema.type},format:${schema.format}}`);
        }
        return type;

    }
    public static isJsPrimitive(typename: string) {
        return this.primitiveJsTypes.includes(typename);
    }

    public static getTypeRef(schema: Swagger.Schema) {
        if (schema && schema.$ref && schema.$ref[0] === "#") {
            const match = schema.$ref.match(typeRefRegEx);
            if (match) {
                return match[1];
            }
        }
        return null;
    }

    public static getTypeNameInfoFromSchema(schema: Swagger.Schema, typeManager: TypeBuilder): TypeNameInfo {
        if (schema.$ref && schema.$ref[0] === "#") {
            const match = schema.$ref.match(typeRefRegEx);
            if (match) {
                return TypeNameInfo.fromSwaggerTypeName(match[1]);
            }
        } else if (this.isSwaggerTypePrimitive(schema.type)) {
            return TypeNameInfo.fromSwaggerTypeName(this.getPrimitiveType(schema));
        }
        else if (schema.type === "array" && schema.items) {

            const itemSchema = (schema.items instanceof Array) ? schema.items[0] : schema.items;
            return TypeNameInfo.fromSwaggerTypeName(`Array<${this.getTypeNameInfoFromSchema(itemSchema, typeManager).fullTypeName}>`);
        }
        else if (schema.type === "object" && schema.properties) {
            let newInlineTypeName = TypeNameInfo.createInlineTypeName();
            typeManager.addType(newInlineTypeName.typeName, schema);
            return newInlineTypeName;
        }
        return TypeNameInfo.fromSwaggerTypeName("any");

    }

    private static substitute(typeName: TypeNameInfo, searchTypeAst: ITypeNameParserAst, replacementAst: ITypeNameParserAst): TypeNameInfo {
        typeName.parsedResult.composingTypes.forEach((ct) => {
            if (ct.fullTypeName === searchTypeAst.fullTypeName) {
                ct.partialTypeName = replacementAst.partialTypeName;
                ct.genericParams = replacementAst.genericParams;
            }
        });
        return typeName;
    }

    private static substituteWithAlias(alias: string, typedef: string, typeName: ITypeNameParserAst) {

        const aliasAst = typeNameParser.parse(alias);
        if (aliasAst.partialTypeName === typeName.partialTypeName) {
            if (aliasAst.genericParams && aliasAst.genericParams.length) {
                const typeDefAst = typeNameParser.parse(typedef);
                aliasAst.genericParams.forEach((agp) => {

                });

            } else {
                typeName.partialTypeName = typedef;
            }
        }
    }

    get typeName(): string {
        if (this.isGeneric) {
            return `${this.parsedResult.partialTypeName}<${[...this.genericTypeArgsMap.values()].map((i) => i.fullTypeName).join()}>`;
        }
        else {
            return this.parsedResult.partialTypeName;
        }
    }

    get fullTypeName(): string {
        return this.parsedResult.fullTypeName;
    }
    get isGeneric(): boolean {
        return this.parsedResult.genericParams && this.parsedResult.genericParams.length > 0;
    }

    get partialTypeName() {
        return this.parsedResult.partialTypeName;
    }

    public replaceWithGenericType(propertyTypeName: TypeNameInfo): TypeNameInfo {
        for (const [typeArg, genericTypeName] of this.genericTypeArgsMap) {
            propertyTypeName = TypeNameInfo.substitute(propertyTypeName, typeArg, genericTypeName);
        }
        return propertyTypeName;
    }
    public getComposingTypeNames(filterPrimitive: boolean = false): string[] {
        if (filterPrimitive) {
            return this.parsedResult.composingTypes.filter((ct) => !TypeNameInfo.isJsPrimitive(ct.partialTypeName)).map((ct) => ct.partialTypeName);
        } else {
            return this.parsedResult.composingTypes.map((ct) => ct.partialTypeName);
        }
    }

    private substituteAliases() {
        if (settings.type.typeAliases) {
            getTypeAliases().forEach((alias) => {
                this.parsedResult.composingTypes.forEach((ct) => TypeNameInfo.substituteWithAlias(alias.alias, alias.typeDefinition, ct));
            });
        }

    }
}
