import * as Swagger from "swagger-schema-official";
import { logger } from "./logger";
import { OperationsBuilder } from "./operation/operationsBuilder";
import { OperationsGroupRender } from "./renderer/operationsGroupRenderer";
import { TypesDefinitionRender } from "./renderer/typesDefinitionRender";
import { ISettings, loadSettings, settings } from "./settings";
import { getProvider } from "./swaggerProvider/swaggerProvider";
import { TypeBuilder } from "./type/typeBuilder";
import { createIfNotExists, createWriteStream } from "./utils/fsUtil";
export class TsFromSwagger {
    constructor(configFile: string = null, override: ISettings = {}) {
        logger.info(`Starting...`);
        loadSettings(configFile, override);
    }
    public async generateCode() {
        await this.createOutDirs();
        await this.render();
    }
    private async getSwagger() {
        return await getProvider().provide(settings, logger);
    }

    private getBasePath(swagger: Swagger.Spec) {
        let base = swagger.basePath;
        const host: string = swagger.host;
        const schemes = swagger.schemes;

        if (swagger["x-ibm-endpoints"]) {
            let ibmEndpoints = swagger["x-ibm-endpoints"];
            if (ibmEndpoints[0] && ibmEndpoints[0].endpointUrl) {
                return ibmEndpoints[0].endpointUrl;
            }
        }

        if (base && base.endsWith("/")) {
            let notSlashIndex = base.length - base.split("").reverse().findIndex((v) => v != "/");
            base = base.substring(0, notSlashIndex);
        }

        if (host) {
            base = host + base;
        }

        if (schemes !== undefined && schemes.length > 0) {
            if (schemes.find(function (x) { return x.toLowerCase() == "https"; })) {
                base = "https://" + base;
            } else {
                base = "http://" + base;
            }
        }

        return base;
    }

    private adjustSwaggerPaths(swagger: Swagger.Spec) {

        const newPaths: { [pathName: string]: Swagger.Path } = {};

        const checkPathParam = (name: string, paths: Swagger.Path) => {
            for (const k of Object.keys(paths)) {
                const params = paths[k].parameters || paths.parameters;

                if (params) {
                    for (let i = 0; i < params.length; i++) {
                        const param = params[i];

                        if (param.in && param.in === "path" && name === param.name) {
                            if (param.type === "string") {
                                return "encodeURIComponent(" + name + ")";
                            }
                            else {
                                return name;
                            }
                        }
                    }
                }
            }

            //no parameter found, fallback to general parameters
            let fallbackParam = swagger.parameters[name] as Swagger.QueryParameter;
            if (fallbackParam) {
                if (fallbackParam.type === "string") {
                    return "encodeURIComponent(" + name + ")";
                }
                else {
                    return name;
                }
            }
        };

        Object.keys(swagger.paths).forEach((p) => {
            let fixedPath = p;
            if (p.indexOf("{") > -1) {
                fixedPath = fixedPath.replace(/(\{.*?\})/gm, (m) => {
                    m = m.substr(1, m.length - 2);
                    const val = checkPathParam(m, swagger.paths[p]);

                    if (val) {
                        return "${" + val + "}";
                    }
                    else {
                        throw Error(`Unknown path parameter "${m}" in "${p}"`);
                    }
                });
            }
            if (!fixedPath.startsWith("/")) {
                fixedPath = `/${fixedPath}`;
            }

            newPaths[fixedPath] = swagger.paths[p];
        });

        swagger.paths = newPaths;
    }
    private async render() {
        const swagger = await this.getSwagger();

        this.adjustSwaggerPaths(swagger);

        let basePath = this.getBasePath(swagger);
        let info = swagger.info;

        const typeManager = new TypeBuilder(swagger.definitions);

        await this.renderOperationGroups(basePath, info, swagger.paths, swagger.parameters, typeManager);
        await this.renderTypes(info, typeManager);
    }
    private async createOutDirs() {
        await createIfNotExists(settings.type.outPutPath);
        await createIfNotExists(settings.operations.outPutPath);
    }

    private async renderTypes(info: Swagger.Info, typeManager: TypeBuilder) {
        const stream = createWriteStream(settings.type.outPutPath),
            renderer = new TypesDefinitionRender();

        logger.info(`Writing Types to ${settings.type.outPutPath}`);
        await renderer.render(stream, Object.assign({}, { types: typeManager.getAllTypes() }, { info }));
        stream.end();
    }

    private async renderOperationGroups(
        basePath: string,
        info: Swagger.Info,
        paths: {
            [pathName: string]: Swagger.Path,
        },
        generalParameters: { [parameterName: string]: Swagger.BodyParameter | Swagger.QueryParameter },
        typeManager) {
        const renderer = new OperationsGroupRender(),
            opsBuilder = new OperationsBuilder(paths, generalParameters, typeManager);
        opsBuilder.getAllGroups().forEach(async (g) => {
            const opsName = settings.operations.outFileNameTransformFn(g.operationsGroupName);
            const stream = createWriteStream(settings.operations.outPutPath, opsName);
            logger.info(`Writing Operation ${opsName}  to ${settings.operations.outPutPath}`);

            await renderer.render(stream, Object.assign({}, g, { basePath, info }));
            stream.end();
        });
    }
}
