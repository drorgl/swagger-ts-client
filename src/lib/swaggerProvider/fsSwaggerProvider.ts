import * as Swagger from "swagger-schema-official";
import { ILogger } from "../logger";
import { ISettings } from "../settings";
import { readFile } from "../utils/fsUtil";
import { parseResponse } from "./dataParser";
import { ISwaggerProvider } from "./swaggerProvider";

export class FsSwaggerProvider implements ISwaggerProvider {
    public async provide(settings: ISettings, logger: ILogger): Promise<Swagger.Spec> {
        if (settings.swaggerFile) {
            logger.info(`Reading swagger definitions from ${settings.swaggerFile}`);
            const data = await readFile(settings.swaggerFile, "utf8");
            try {
                return parseResponse(data, logger);
            } catch (e) {
                logger.error(e);
                throw e;
            }
        } else {
            throw new Error("Filename to fetch swagger definition is not provided");
        }
    }
}
