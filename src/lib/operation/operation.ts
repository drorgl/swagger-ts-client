import * as Swagger from "swagger-schema-official";
import * as url from "url";
import { typeNameParser } from "../parsers/parsers";
import { changeCaseHelper } from "../renderer/helpers";
import {HttpVerb, settings} from "../settings";
import {TypeBuilder} from "../type/typeBuilder";
import { TypeNameInfo } from "../type/typeNameInfo";
import {IOperation, IOperationParam} from "./operationsBuilder";

const nonLiteralRegEx = /[^_$a-zA-Z0-9\xA0-\uFFFF]/g;
export class Operation implements IOperation {
    public operationParams: IOperationParam[];
    public responsesType: string;
    public operationName: string;
    public groupName: string;
    public importedTypes: string[] = [];
    private anonymousParamNameCount = 1;

    constructor(
        public httpVerb: string ,
        public operationUrl: string,
        private swOpr: Swagger.Operation,
        private extraOprParameters: Swagger.Parameter[] ,
        private generalParameters: {[parameterName: string]: Swagger.BodyParameter|Swagger.QueryParameter},
        private typeManager: TypeBuilder ) {
        this.operationUrl = url.parse(this.operationUrl).path;
        this.operationName = settings.operations.operationsNameTransformFn(this.operationUrl, httpVerb as HttpVerb, swOpr);
        this.groupName = settings.operations.operationsGroupNameTransformFn(this.operationUrl, httpVerb as HttpVerb, swOpr);
        this.build();
    }
    public build(){
        this.responsesType = this.getResponse();
        if (this.swOpr.parameters && this.swOpr.parameters.length){
            this.operationParams = this.swOpr.parameters.map((p) => this.buildParam(p));
        }

        if (this.extraOprParameters && this.extraOprParameters.length){
            let extraParams = this.extraOprParameters.map((p) => this.buildParam(p));
            if (this.operationParams){
                this.operationParams = this.operationParams.concat(extraParams);
            }else{
                this.operationParams = extraParams;
            }
        }

    }
    public getResponse(): string{
        if (this.swOpr.responses && this.swOpr.responses["200"] && this.swOpr.responses["200"].schema){
            const retType = this.typeManager.getTypeNameInfo(this.swOpr.responses["200"].schema);

            if (!TypeNameInfo.isJsPrimitive(retType.fullTypeName)){
                this.addImportedType(retType);
            }
            return retType.fullTypeName;
        }
        else{
            return "void";
        }
    }
    public buildParam(param: Swagger.Parameter): IOperationParam {
        let swParam: Swagger.Parameter;

        if ((param as Swagger.Path).$ref){
            let refTypeName = TypeNameInfo.getTypeRef(param as any);
            let refParam = this.generalParameters[refTypeName];

            swParam = refParam;
            param = refParam;
        }
        const paramType = this.typeManager.getTypeNameInfoParameter(param);

        this.addImportedType(paramType);

        let paramName = param.name;

        //change also the swagger parameter name
        if (!swParam){
            swParam = (this.swOpr.parameters) ? this.swOpr.parameters.find((v) => v.name == param.name) : null;
        }

        //if there is no operation parameter, try to use the extra parameters (from parent)
        if (!swParam){
            swParam = (this.extraOprParameters) ? this.extraOprParameters.find((v) => v.name == param.name) : null;
        }

        if (swParam){
            swParam.name = changeCaseHelper(param.name, "camel");
        }

        return {
            paramName,
            paramDisplayName: changeCaseHelper(swParam.name, "camel"),
            paramType: paramType.fullTypeName,
            inBody: param.in === "body",
            inPath: param.in === "path",
            inQuery: param.in === "query",
            inHeader: param.in == "header",
            schema: swParam,
        } as IOperationParam;
    }

    private addImportedType(typename: TypeNameInfo){
        this.importedTypes = this.importedTypes.concat(typename.getComposingTypeNames(true));
    }
}
