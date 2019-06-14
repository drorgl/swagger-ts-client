#!/usr/bin/env node

export { ISettings, TsFromSwagger, ISwaggerProvider, HttpSwaggerProvider } from "./lib";
import { getArgs } from "./cli";
import { logger, TsFromSwagger } from "./lib";

(async () => {
    try {
        const args = getArgs();
        const app = new TsFromSwagger(args.configFile, args.settings);
        await app.generateCode();
        console.log("done");
    } catch (e) {
        logger.error(e);
    }
})();
