"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const operationsBuilder_1 = require("./operation/operationsBuilder");
const operationsGroupRenderer_1 = require("./renderer/operationsGroupRenderer");
const typesDefinitionRender_1 = require("./renderer/typesDefinitionRender");
const settings_1 = require("./settings");
const swaggerProvider_1 = require("./swaggerProvider/swaggerProvider");
const typeBuilder_1 = require("./type/typeBuilder");
const fsUtil_1 = require("./utils/fsUtil");
class TsFromSwagger {
    constructor(configFile = null, override = {}) {
        logger_1.logger.info(`Starting...`);
        settings_1.loadSettings(configFile, override);
    }
    generateCode() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createOutDirs();
            yield this.render();
        });
    }
    getSwagger() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield swaggerProvider_1.getProvider().provide(settings_1.settings, logger_1.logger);
        });
    }
    getBasePath(swagger) {
        let base = swagger.basePath;
        const host = swagger.host;
        const schemes = swagger.schemes;
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
            }
            else {
                base = "http://" + base;
            }
        }
        return base;
    }
    adjustSwaggerPaths(swagger) {
        const newPaths = {};
        const checkPathParam = (name, paths) => {
            for (const k of Object.keys(paths)) {
                const params = (paths[k].parameters) ? paths[k].parameters : paths.parameters;
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
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            const swagger = yield this.getSwagger();
            this.adjustSwaggerPaths(swagger);
            let basePath = this.getBasePath(swagger);
            let info = swagger.info;
            const typeManager = new typeBuilder_1.TypeBuilder(swagger.definitions);
            yield this.renderOperationGroups(basePath, info, swagger.paths, typeManager);
            yield this.renderTypes(info, typeManager);
        });
    }
    createOutDirs() {
        return __awaiter(this, void 0, void 0, function* () {
            yield fsUtil_1.createIfNotExists(settings_1.settings.type.outPutPath);
            yield fsUtil_1.createIfNotExists(settings_1.settings.operations.outPutPath);
        });
    }
    renderTypes(info, typeManager) {
        return __awaiter(this, void 0, void 0, function* () {
            const stream = fsUtil_1.createWriteStream(settings_1.settings.type.outPutPath), renderer = new typesDefinitionRender_1.TypesDefinitionRender();
            logger_1.logger.info(`Writing Types to ${settings_1.settings.type.outPutPath}`);
            yield renderer.render(stream, Object.assign({}, { types: typeManager.getAllTypes() }, { info }));
            stream.end();
        });
    }
    renderOperationGroups(basePath, info, paths, typeManager) {
        return __awaiter(this, void 0, void 0, function* () {
            const renderer = new operationsGroupRenderer_1.OperationsGroupRender(), opsBuilder = new operationsBuilder_1.OperationsBuilder(paths, typeManager);
            opsBuilder.getAllGroups().forEach((g) => __awaiter(this, void 0, void 0, function* () {
                const opsName = settings_1.settings.operations.outFileNameTransformFn(g.operationsGroupName);
                const stream = fsUtil_1.createWriteStream(settings_1.settings.operations.outPutPath, opsName);
                logger_1.logger.info(`Writing Operation ${opsName}  to ${settings_1.settings.operations.outPutPath}`);
                yield renderer.render(stream, Object.assign({}, g, { basePath, info }));
                stream.end();
            }));
        });
    }
}
exports.TsFromSwagger = TsFromSwagger;
