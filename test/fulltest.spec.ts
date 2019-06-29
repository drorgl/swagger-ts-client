export { ISettings, TsFromSwagger, ISwaggerProvider, HttpSwaggerProvider } from "../src/lib";
import { expect } from "chai";
import * as fs from "fs";
import * as path from "path";
import { isExportDeclaration } from "typescript";
import { getArgs } from "../src/cli";
import { logger, TsFromSwagger } from "../src/lib";
const samplesRoot = "test/samples/";

describe("sample generation", () => {
    let files = fs.readdirSync(samplesRoot);
    files = files.filter((v) => fs.statSync(path.join(samplesRoot, v)).isDirectory() == false);
    for (let file of files) {
        // if (file != "petstore.v2.yaml"){
        //     continue;
        // }
        it(`should generate ${file}`, (done) => {

            let fullFile = path.join(samplesRoot, file);

            const args = {
                settings: {
                    swaggerFile: fullFile,
                    type: {
                        outPutPath: path.join(samplesRoot, `out/${path.basename(file)}/types.ts`),
                    },
                    operations: {
                        outPutPath: path.join(samplesRoot, `out/${path.basename(file)}`),
                    },

                },
                configFile: null,
            };

            expect(async () => {
                const app = new TsFromSwagger(args.configFile, args.settings);
                await app.generateCode();
                done();
            }).to.not.throw();
        }).timeout(10000);
    }
});
