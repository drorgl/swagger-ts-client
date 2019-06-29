import * as changeCase from "change-case";
import * as Swagger from "swagger-schema-official";
import {logger} from "../logger";
import {Type} from "./type";
import {TypeNameInfo} from "./typeNameInfo";

function isBodyParam(param: Swagger.Parameter | Swagger.BodyParameter): param is Swagger.BodyParameter {
    return (param as Swagger.BodyParameter).schema ? true : false;
}

export interface IType{
    readonly typeName: string;
    readonly swaggerTypeName: string;
    readonly properties?: IProperty[];
    readonly schema: Swagger.Schema;
    readonly ofType: string;
}
export interface IProperty{
    propertyName: string;
    typeName: string;
    schema: Swagger.Schema;
}

export interface ISwaggerDefinition{
    [definitionsName: string]: Swagger.Schema;
}

export class TypeBuilder{
    private typeCache: Map<string, IType> = new Map();
    private inlineTypes: Map<string, Swagger.Schema> = new Map();
    constructor(private definition: ISwaggerDefinition){
      this.buildTypeCache();
    }

    public getTypeName(swaggerTypeName: string){
        return TypeNameInfo.fromSwaggerTypeName(swaggerTypeName).typeName;
    }

    public getTypeNameInfo(schema: Swagger.BaseSchema): TypeNameInfo{
        return TypeNameInfo.getTypeNameInfoFromSchema(schema, this);
    }
    public getTypeNameInfoParameter(param: Swagger.Parameter){
        const schema = isBodyParam(param) ? (param as Swagger.BodyParameter).schema : param;
        return this.getTypeNameInfo(schema);

    }

    public getAllTypes(): IType[] {
        return [...this.typeCache.values()];
    }

    public addType(swaggerTypeName: string, swaggerType: Swagger.Schema){
        this.typeCache.set(swaggerTypeName, this.buildType(swaggerTypeName, swaggerType));
    }
    private buildTypeCache(){
        logger.info("Building Types..");
        if (!this.definition){
            logger.warn("no definitions found, attempting to skip");
            return;
        }
        Object.keys(this.definition).forEach((swaggerTypeName) => {
            const typename = this.getTypeName(swaggerTypeName);
            if (!this.typeCache.has(typename)){
                const type = this.buildTypeFromDefinition(swaggerTypeName);
                this.typeCache.set(typename, type);
            }
        });

        this.inlineTypes.forEach((schema, swaggerTypeName) => {
            this.typeCache.set(swaggerTypeName, this.buildType(swaggerTypeName, schema));
        });

    }

    private  buildType(swaggerTypeName: string, swaggerType: Swagger.Schema): IType {
       // let fullTypeName=this.splitGeneric(swaggerTypeName);
       if (swaggerType.type == "array"){
           return Type.fromSwaggerSchema(swaggerTypeName, swaggerType, this);
       }

       const type = Type.fromSwaggerTypeName(swaggerTypeName);
       type.schema = swaggerType;
       const properties = swaggerType.properties;
       for (const propertyName in properties) {
            if (properties.hasOwnProperty(propertyName)) {
                const prop = properties[propertyName];
                let typeName = TypeNameInfo.getTypeNameInfoFromSchema(prop, this);
                // if (typeName.isInlineType){
                //     typeName = TypeNameInfo.fromSwaggerTypeName(type.typeNameInfo.partialTypeName + changeCase.pascalCase(propertyName));
                //     this.inlineTypes.set(typeName.fullTypeName, prop);
                //  }
                type.addProperty(propertyName, typeName, properties[propertyName]);
            }
        }

       return type;
    }
    private  buildTypeFromDefinition(swaggerTypeName: string): IType {

        const swaggerType = this.definition[swaggerTypeName];
        return this.buildType(swaggerTypeName, swaggerType);

    }

}
