export { ISettings, TsFromSwagger, ISwaggerProvider, HttpSwaggerProvider } from "../src/lib";
import { expect } from "chai";
import * as fs from "fs";
import * as path from "path";
import { isExportDeclaration } from "typescript";
import { getArgs } from "../src/cli";
import { logger, TsFromSwagger } from "../src/lib";
const samplesRoot = "test/samples/";
import * as dircompare from "dir-compare";

describe("sample generation", () => {
    let files = fs.readdirSync(samplesRoot);
    files = files.filter((v) => fs.statSync(path.join(samplesRoot, v)).isDirectory() == false);
    for (let file of files) {
        // if (file != "swagger_external_vehicle_images_basic.yaml"){
        //     continue;
        // }
        it(`should generate ${file}`, async () => {

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

            const app = new TsFromSwagger(args.configFile, args.settings);
            await app.generateCode();

            let comparison = await dircompare.compare(path.join(samplesRoot, `out/${path.basename(file)}`), path.join(samplesRoot, `expected/${path.basename(file)}`), {
                compareContent: true
            });
            if (!comparison.same) {
                console.log(comparison.diffSet);
            }
            // tslint:disable-next-line:no-unused-expression
            expect(comparison.same).to.be.true;
        }).timeout(10000);
    }
});
