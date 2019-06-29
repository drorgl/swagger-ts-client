import * as Swagger from "swagger-schema-official";
import { ISwaggerInfo, ITypeInfo } from "../operation/operationsBuilder";
import {settings} from "../settings";
import {IType} from "../type/typeBuilder";
import {AbstractRenderer} from "./renderer";

interface ISwaggerDefinition{
    [definitionsName: string]: Swagger.Schema;
}

export class TypesDefinitionRender extends AbstractRenderer<ITypeInfo & ISwaggerInfo>{
    constructor(){
        super({templatePath: settings.type.templateFile});
    }
    public getTypeAliases(): Array<{alias: string, typeDefinition: string}>{
       return Object.keys(settings.type.typeAliases).map((alias) => {
            return {
                alias,
                typeDefinition: settings.type.typeAliases[alias] as string,
            };
        });
    }
    protected getRenderContext(typeInfo: ITypeInfo & ISwaggerInfo): {} {
        const declaredTypes = {
            typeAliases: this.getTypeAliases(),
            generatedTypes: settings.type.generatedTypes,
            membersOptional: settings.type.membersOptional ? "?" : "",
            types: typeInfo.types,
            tag: settings.type.templateTag,
            info: typeInfo.info,
        };
        return declaredTypes;
    }

}
