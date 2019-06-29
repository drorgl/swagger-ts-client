"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeNameInfo_1 = require("./typeNameInfo");
class Type {
    constructor() {
        this.properties = [];
    }
    static fromSwaggerTypeName(swaggerTypeName) {
        let type = new Type();
        type.typeNameInfo = typeNameInfo_1.TypeNameInfo.fromSwaggerTypeName(swaggerTypeName);
        return type;
    }
    static fromSwaggerSchema(swaggerTypeName, swaggerType, typeManager) {
        let type = new Type();
        type.schema = swaggerType;
        type.typeNameInfo = typeNameInfo_1.TypeNameInfo.getTypeNameInfoFromSchema(swaggerType, typeManager);
        type.swaggerTypeName = swaggerTypeName;
        return type;
    }
    // constructor(public swaggerTypeName: string){
    //     this.typeNameInfo = TypeNameInfo.fromSwaggerTypeName(swaggerTypeName);
    // }
    get typeName() {
        return this.swaggerTypeName || this.typeNameInfo.typeName;
    }
    get fullTypeName() {
        return this.typeNameInfo.fullTypeName;
    }
    get isGeneric() {
        return this.typeNameInfo.isGeneric;
    }
    get partialTypeName() {
        return this.typeNameInfo.partialTypeName;
    }
    addProperty(propertyName, propertyType, schema) {
        if (this.isGeneric) {
            propertyType = this.typeNameInfo.replaceWithGenericType(propertyType);
        }
        this.properties.push({ propertyName, typeName: propertyType.fullTypeName, schema });
    }
}
exports.Type = Type;
