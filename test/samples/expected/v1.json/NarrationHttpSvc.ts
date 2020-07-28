import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType816,ISwaggerInlineType817,ISwaggerInlineType818,ISwaggerInlineType824,ISwaggerInlineType825,ISwaggerInlineType826 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class NarrationHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Return token from provider
     * The **token** API used for getting a new token from
     * narration provider.
     * Using this token, you can access to narration provider
     * server.
     * 
     */
    public getTokenNarration(
        ):Promise<ISwaggerInlineType816>{
        return new Promise<ISwaggerInlineType816>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/narration/token`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType816);
                }
            });
        });
    }
    /**
     * Define narrated text from provider
     * The **narration** used for describe chart in natural
     * language from narration provider.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType818 } narrationParameters The narration object that defines how a widget is narrated
     */
    public generateWidgetNarration(
         authorization:string ,
         narrationParameters:ISwaggerInlineType818 ):Promise<ISwaggerInlineType817>{
        return new Promise<ISwaggerInlineType817>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/narration/widget`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType817);
                }
            });
        });
    }
    /**
     * Return current analytics configuration
     * The **analytics** used for getting a configuration for
     * narration analytics.
     * The story generation API supports declaring preferences
     * around which additional analytics are performed and they
     * rank in importance.
     * Without including any analytics configurations, we write a
     * story with default analytics.
     * Certain analytics that are performed by default may not be
     * interesting or useful to certain users.
     * This feature allows users to choose which analytics are
     * performed and the order the results will appear in the
     * narrative.
     * 
     */
    public getConfig(
        ):Promise<ISwaggerInlineType824>{
        return new Promise<ISwaggerInlineType824>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/narration/analytics`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType824);
                }
            });
        });
    }
    /**
     * set/modify custom narration analytics configuration
     * The **analytics** used for setting a configuration for
     * narration analytics.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType826 } narrationAnalyticsConfiguration The object that define narration analytics configuration
     */
    public postConfig(
         authorization:string ,
         narrationAnalyticsConfiguration:ISwaggerInlineType826 ):Promise<ISwaggerInlineType825>{
        return new Promise<ISwaggerInlineType825>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/narration/analytics`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType825);
                }
            });
        });
    }
}



