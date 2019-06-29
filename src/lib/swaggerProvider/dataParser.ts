import * as YAML from "js-yaml";
import * as Swagger from "swagger-schema-official";
import {ILogger} from "../logger";

export function parseResponse(data: string, logger: ILogger): Swagger.Spec{
    logger.info(`Received swagger definitions ...`);
    if (data.charAt(0) == "{"){
        logger.info("detected definition is json");
        return JSON.parse(data) as Swagger.Spec;
    }else{
        return YAML.safeLoad(data, {onWarning: (msg) => {logger.warn(msg.message); }}) as Swagger.Spec;
    }
}
