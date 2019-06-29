"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = require("url");
const helpers_1 = require("../renderer/helpers");
const settings_1 = require("../settings");
const typeNameInfo_1 = require("../type/typeNameInfo");
const nonLiteralRegEx = /[^_$a-zA-Z0-9\xA0-\uFFFF]/g;
class Operation {
    constructor(httpVerb, operationUrl, swOpr, extraOprParameters, typeManager) {
        this.httpVerb = httpVerb;
        this.operationUrl = operationUrl;
        this.swOpr = swOpr;
        this.extraOprParameters = extraOprParameters;
        this.typeManager = typeManager;
        this.importedTypes = [];
        this.anonymousParamNameCount = 1;
        this.operationUrl = url.parse(this.operationUrl).path;
        this.operationName = settings_1.settings.operations.operationsNameTransformFn(this.operationUrl, httpVerb, swOpr);
        this.groupName = settings_1.settings.operations.operationsGroupNameTransformFn(this.operationUrl, httpVerb, swOpr);
        this.build();
    }
    build() {
        this.responsesType = this.getResponse();
        if (this.swOpr.parameters && this.swOpr.parameters.length) {
            this.operationParams = this.swOpr.parameters.map((p) => this.buildParam(p));
        }
        if (this.extraOprParameters && this.extraOprParameters.length) {
            let extraParams = this.extraOprParameters.map((p) => this.buildParam(p));
            if (this.operationParams) {
                this.operationParams = this.operationParams.concat(extraParams);
            }
            else {
                this.operationParams = extraParams;
            }
        }
    }
    getResponse() {
        if (this.swOpr.responses && this.swOpr.responses["200"] && this.swOpr.responses["200"].schema) {
            const retType = this.typeManager.getTypeNameInfo(this.swOpr.responses["200"].schema);
            if (!typeNameInfo_1.TypeNameInfo.isJsPrimitive(retType.fullTypeName)) {
                this.addImportedType(retType);
            }
            return retType.fullTypeName;
        }
        else {
            return "void";
        }
    }
    buildParam(param) {
        const paramType = this.typeManager.getTypeNameInfoParameter(param);
        this.addImportedType(paramType);
        let paramName = param.name;
        //handle cases where $ref is the whole param
        if (!paramName) {
            let ref = param.$ref;
            if (ref) {
                paramName = ref.substr(ref.lastIndexOf("/") + 1);
            }
        }
        //handle case when there is no parameter name (not required for url param)
        if (!paramName) {
            paramName = `value${this.anonymousParamNameCount++}`;
        }
        //change also the swagger parameter name
        let swParam = (this.swOpr.parameters) ? this.swOpr.parameters.find((v) => v.name == param.name) : null;
        //if there is no operation parameter, try to use the extra parameters (from parent)
        if (!swParam) {
            swParam = (this.extraOprParameters) ? this.extraOprParameters.find((v) => v.name == param.name) : null;
        }
        if (swParam) {
            swParam.name = helpers_1.changeCaseHelper(param.name, "camel");
        }
        return {
            paramName,
            paramDisplayName: helpers_1.changeCaseHelper(swParam.name, "camel"),
            paramType: paramType.fullTypeName,
            inBody: param.in === "body",
            inPath: param.in === "path",
            inQuery: param.in === "query",
        };
    }
    addImportedType(typename) {
        this.importedTypes = this.importedTypes.concat(typename.getComposingTypeNames(true));
    }
}
exports.Operation = Operation;
