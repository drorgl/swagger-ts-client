import { Schema } from "swagger-schema-official";
import * as Swagger from "swagger-schema-official";
import {IProperty, IType, TypeBuilder} from "./typeBuilder";
import {TypeNameInfo} from "./typeNameInfo";
export class Type  implements IType{

    public ofType: string;
    public schema: Schema;
    public properties: IProperty[] = [];
    public typeNameInfo: TypeNameInfo;
    public swaggerTypeName: string;
    public static fromSwaggerTypeName(swaggerTypeName: string, schema: Swagger.Schema): Type{
        let type = new Type();
        type.typeNameInfo = TypeNameInfo.fromSwaggerTypeName(swaggerTypeName);
        type.schema = schema;
        return type;
    }
    public static fromSwaggerSchema(swaggerTypeName: string, swaggerType: Swagger.Schema, typeManager: TypeBuilder ): Type{
        let type = new Type();
        type.schema = swaggerType;
        type.typeNameInfo = TypeNameInfo.getTypeNameInfoFromSchema(swaggerType, typeManager);
        type.swaggerTypeName = swaggerTypeName;
        return type;
    }

    // constructor(public swaggerTypeName: string){
    //     this.typeNameInfo = TypeNameInfo.fromSwaggerTypeName(swaggerTypeName);
    // }

    get typeName(): string {
        return this.swaggerTypeName || this.typeNameInfo.typeName;
    }

    get fullTypeName(): string{
        return this.typeNameInfo.fullTypeName;
    }

    get isGeneric(): boolean{
        return this.typeNameInfo.isGeneric;
    }

    get isPrimitive(): boolean{
        return TypeNameInfo.isJsPrimitive(this.schema.type);
    }

    private get partialTypeName(): string {
        return this.typeNameInfo.partialTypeName;
    }

    public addProperty(propertyName: string, propertyType: TypeNameInfo, schema: Swagger.Schema){
        if (this.isGeneric){
            propertyType = this.typeNameInfo.replaceWithGenericType(propertyType);
        }
        this.properties.push({propertyName, typeName: propertyType.fullTypeName, schema});
    }
}
