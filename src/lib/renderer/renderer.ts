import * as fs from "fs";
import * as handlebars from "handlebars";
import * as wordwrap from "wordwrap";
import {ISettings} from "../settings";
import { readFile } from "../utils/fsUtil";
import {changeCaseHelper, filterListHelper, joinListHelper, someHelper} from "./helpers";

handlebars.registerHelper("joinList", joinListHelper);
handlebars.registerHelper("filterList", filterListHelper);
handlebars.registerHelper("some", someHelper);
handlebars.registerHelper("changeCase", changeCaseHelper);
handlebars.registerHelper("wrap", (indent, val) => {
    if (!val){
        return "";
    }
    let wrapped = wordwrap(60)(val);
    return wrapped.replace(/\n/g, "\n" + indent);
});
handlebars.registerHelper({
    eq:  (v1, v2) => {
        return v1 === v2;
    },
    ne: (v1, v2) => {
        return v1 !== v2;
    },
    lt: (v1, v2) => {
        return v1 < v2;
    },
    gt: (v1, v2) => {
        return v1 > v2;
    },
    lte: (v1, v2) => {
        return v1 <= v2;
    },
    gte: (v1, v2) => {
        return v1 >= v2;
    },
    // tslint:disable-next-line:object-literal-shorthand
    and: function() {
        return Array.prototype.slice.call(arguments).every(Boolean);
    },
    // tslint:disable-next-line:object-literal-shorthand
    or: function() {
        return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
    },
});

export function registerHandleBarsHelpers(settings: ISettings){
    if (settings.templateHelpers){
        handlebars.registerHelper(settings.templateHelpers);
    }
}

export interface IRenderer{
    render(stream: fs.WriteStream, obj: any);
}

export abstract class AbstractRenderer<T> implements IRenderer {
    protected templatePath: string;
    private template: string;
    private compliedTemplate: HandlebarsTemplateDelegate<any>;
    constructor(options: {
        template?: string,
        templatePath?: string},
                renderHelpers?: Array<(arg: any[]) => string>){
            if (!options || !(options.template || options.templatePath )){
                throw new Error("Template or Template path is needed");
            }

            if (options.template){
                this.template = options.template;
            } else{
                this.templatePath = options.templatePath;
            }

    }

    public async render(stream: fs.WriteStream, obj: T) {
        if (!this.compliedTemplate){
             await this.compileTemplate();
        }
        try{
            const compiled = this.compliedTemplate(this.getRenderContext(obj));
            stream.write(compiled);
        }catch (e) {
            throw new Error(`Error rendering ${stream.path} : obj "${obj} \n ${e}`);
        }

    }

    protected abstract getRenderContext(obj: T): {};

    private async loadTemplate(): Promise<string>{
        return readFile(this.templatePath, "utf8") as Promise<string>;
    }

    private async compileTemplate(): Promise<HandlebarsTemplateDelegate<any>>{
        if (!this.template){
            try{
                this.template = await this.loadTemplate();
            }
            catch (error)
            {
                throw error;
            }

        }

        return new Promise<HandlebarsTemplateDelegate<any>>((resolve) => {
            this.compliedTemplate = handlebars.compile(this.template, {noEscape: true});
            resolve(this.compliedTemplate);
        });

    }
}
