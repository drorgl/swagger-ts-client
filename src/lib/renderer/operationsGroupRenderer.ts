import * as path from "path";
import {IBasePath, IOperationsGroup, ISwaggerInfo} from "../operation/operationsBuilder";
import {settings} from "../settings";
import {AbstractRenderer} from "./renderer";

export class OperationsGroupRender extends AbstractRenderer<IOperationsGroup & IBasePath & ISwaggerInfo>{
    constructor(){
        super({templatePath: settings.operations.templateFile});
    }
    public getTypeAliases(): Array<{alias: string, typeDefinition: string}>{
       return Object.keys(settings.type.typeAliases).map((alias) => {
            return {
                alias,
                typeDefinition: settings.type.typeAliases[alias] as string,
            };
        });
    }
    protected getRenderContext(operationGroup: IOperationsGroup & IBasePath & ISwaggerInfo): {} {
        const types = operationGroup.importedTypes;

        return {
          imports : {
              types: types && types.length ? types : null,
              path: this.getExportPath(),
          } ,
          operationGroup,
          tag: settings.operations.templateTag,
          basePath: operationGroup.basePath,
          info: operationGroup.info,
        };
    }
    private getExportPath(){
        const relativePath = path.relative(settings.operations.outPutPath, settings.type.outPutPath);
        const parsed = path.parse(relativePath);
        const moduleName = parsed.name;
        const dir = (parsed.dir).replace(/\\/g, "/"); // not using path.sep because we need to use "/" regardless of OS

        return `${( dir[0] === "." ? "" : `./`)}${dir ? `${dir}/` : ""}${moduleName}`;
    }

}
