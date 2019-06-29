"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../logger");
const type_1 = require("./type");
const typeNameInfo_1 = require("./typeNameInfo");
function isBodyParam(param) {
    return param.schema ? true : false;
}
class TypeBuilder {
    constructor(definition) {
        this.definition = definition;
        this.typeCache = new Map();
        this.inlineTypes = new Map();
        this.buildTypeCache();
    }
    getTypeName(swaggerTypeName) {
        return typeNameInfo_1.TypeNameInfo.fromSwaggerTypeName(swaggerTypeName).typeName;
    }
    getTypeNameInfo(schema) {
        return typeNameInfo_1.TypeNameInfo.getTypeNameInfoFromSchema(schema, this);
    }
    getTypeNameInfoParameter(param) {
        const schema = isBodyParam(param) ? param.schema : param;
        return this.getTypeNameInfo(schema);
    }
    getAllTypes() {
        return [...this.typeCache.values()];
    }
    addType(swaggerTypeName, swaggerType) {
        this.typeCache.set(swaggerTypeName, this.buildType(swaggerTypeName, swaggerType));
    }
    getTypeSchema(swaggerTypeName) {
        return this.definition[swaggerTypeName];
    }
    buildTypeCache() {
        logger_1.logger.info("Building Types..");
        if (!this.definition) {
            logger_1.logger.warn("no definitions found, attempting to skip");
            return;
        }
        Object.keys(this.definition).forEach((swaggerTypeName) => {
            const typename = this.getTypeName(swaggerTypeName);
            if (!this.typeCache.has(typename)) {
                const type = this.buildTypeFromDefinition(swaggerTypeName);
                this.typeCache.set(typename, type);
            }
        });
        this.inlineTypes.forEach((schema, swaggerTypeName) => {
            this.typeCache.set(swaggerTypeName, this.buildType(swaggerTypeName, schema));
        });
    }
    buildType(swaggerTypeName, swaggerType) {
        // let fullTypeName=this.splitGeneric(swaggerTypeName);
        if (swaggerType.type == "array") {
            const typeForName = type_1.Type.fromSwaggerTypeName(swaggerTypeName);
            return type_1.Type.fromSwaggerSchema(typeForName.typeName, swaggerType, this);
        }
        const type = type_1.Type.fromSwaggerTypeName(swaggerTypeName);
        type.schema = swaggerType;
        const properties = swaggerType.properties;
        for (const propertyName in properties) {
            if (properties.hasOwnProperty(propertyName)) {
                const prop = properties[propertyName];
                let typeName = typeNameInfo_1.TypeNameInfo.getTypeNameInfoFromSchema(prop, this);
                // if (typeName.isInlineType){
                //     typeName = TypeNameInfo.fromSwaggerTypeName(type.typeNameInfo.partialTypeName + changeCase.pascalCase(propertyName));
                //     this.inlineTypes.set(typeName.fullTypeName, prop);
                //  }
                type.addProperty(propertyName, typeName, properties[propertyName]);
            }
        }
        return type;
    }
    buildTypeFromDefinition(swaggerTypeName) {
        const swaggerType = this.definition[swaggerTypeName];
        return this.buildType(swaggerTypeName, swaggerType);
    }
}
exports.TypeBuilder = TypeBuilder;
