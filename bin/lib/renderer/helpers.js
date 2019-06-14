"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const changeCase = require("change-case");
const os = require("os");
const parsers_1 = require("../parsers/parsers");
const compiledCache = new Map();
function compileFilterFn(predicate) {
    if (predicate) {
        if (compiledCache.has(predicate)) {
            return compiledCache.get(predicate);
        }
        else {
            const parseResult = parsers_1.lambdaParser.parse(predicate);
            if (parseResult && parseResult.arguments && parseResult.body) {
                const args = [...parseResult.arguments, `return (${parseResult.body})`];
                return new Function(...args);
            }
        }
        return null;
    }
}
function filterListHelper(...args) {
    let context = args.shift(), options = args.pop(), filter = args.shift(), take = args.shift() || -1;
    if (context && context instanceof Array && filter) {
        /* tslint:disable:triple-equals */
        if (take == -1) // using == because take can be string
         {
            take = context.length;
        }
        /* tslint:enable:triple-equals */
        if (filter) {
            const filterFn = compileFilterFn(filter);
            if (filterFn) {
                let ret = "";
                for (let i = 0; i < take; i++) {
                    if (filterFn(context[i], i, context)) {
                        ret = ret + options.fn(context[i]);
                    }
                }
                return ret;
            }
            else {
                throw new Error(`${filter} is not valid filter expression`);
            }
        }
        else {
            throw new Error("parameter 'filter' in  #filterList Helper is not optional");
        }
    }
    else {
        return "";
    }
}
exports.filterListHelper = filterListHelper;
function someHelper(...args) {
    const context = args.shift(), options = args.pop(), filter = args.shift();
    if (context && context instanceof Array && filter) {
        if (filter) {
            const filterFn = compileFilterFn(filter);
            if (filterFn) {
                if (context.some(filterFn)) {
                    return options.fn(context);
                }
                else {
                    return "";
                }
            }
            else {
                throw new Error(`${filter} is not valid filter expression`);
            }
        }
        else {
            throw new Error("parameter 'filter' in  #sum Helper is not optional");
        }
    }
    else {
        return "";
    }
}
exports.someHelper = someHelper;
function joinListHelper(...args) {
    const context = args.shift();
    const options = args.pop();
    if (context && context instanceof Array) {
        let [separator, filter] = [...args];
        separator = separator ? separator.replace(/\\n/g, os.EOL) : ",";
        let filteredArray = context;
        if (filter) {
            const filterFn = compileFilterFn(filter);
            if (filterFn) {
                filteredArray = context.filter(filterFn);
            }
            else {
                throw new Error(`${filterFn} is not valid filter expression`);
            }
        }
        return filteredArray.map((c) => options.fn(c)).join(separator);
    }
    else {
        return "";
    }
}
exports.joinListHelper = joinListHelper;
function changeCaseHelper(context, toCase, options) {
    if (context && typeof (context) === "string" && toCase && changeCase[toCase] && changeCase[toCase] instanceof Function) {
        return changeCase[toCase](context);
    }
    else {
        return "";
    }
}
exports.changeCaseHelper = changeCaseHelper;
