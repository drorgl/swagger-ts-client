import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType837,ISwaggerInlineType840,ISwaggerInlineType841,ISwaggerInlineType842,ISwaggerInlineType843,ISwaggerInlineType844 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class SuggestionHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Return suggestions for an entity
     * Return **suggestions** for a data source or field.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType840 } suggestionsParameters The properties that define which object to return
     *        suggestions for. You can return suggestions for a data
     *        source or for a specific field within a data source.
     */
    public getSuggestions(
         authorization:string ,
         suggestionsParameters:ISwaggerInlineType840 ):Promise<ISwaggerInlineType837>{
        return new Promise<ISwaggerInlineType837>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/suggestions`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType837);
                }
            });
        });
    }
    /**
     * Return status of suggestions
     * The **suggestions status** used get actual status of
     * suggestions
     * 
     */
    public getStatus(
        ):Promise<ISwaggerInlineType841>{
        return new Promise<ISwaggerInlineType841>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/suggestions/status`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType841);
                }
            });
        });
    }
    /**
     * Refresh suggestions data and ranking
     * Refresh **suggestions** with actual data and ranking.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType843 } refreshProperties The properties that define which part of suggestions
     *        refresh.
     */
    public refreshSuggestions(
         authorization:string ,
         refreshProperties:ISwaggerInlineType843 ):Promise<ISwaggerInlineType842>{
        return new Promise<ISwaggerInlineType842>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/suggestions/refresh`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType842);
                }
            });
        });
    }
    /**
     * Refresh suggestions data and ranking by Datasource
     * Refresh **suggestions** with actual data and ranking.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType844 } datasource The properties that define which part of suggestions
     *        refresh.
     */
    public refreshSuggestionsByDatasource(
         authorization:string ,
         datasource:ISwaggerInlineType844 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/suggestions/refresh/datasource`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
}



