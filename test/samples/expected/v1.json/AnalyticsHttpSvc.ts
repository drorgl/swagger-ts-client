import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType809 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class AnalyticsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get token for nonsense Analytics
     * Returns a token used to authenticate nonsense Analytics API
     * calls.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public getToken(
         authorization:string ):Promise<ISwaggerInlineType809>{
        return new Promise<ISwaggerInlineType809>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/analytics/token`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType809);
                }
            });
        });
    }
    /**
     * Revoke token for nonsense Analytics
     * Revoke the token used to authenticate your nonsense
     * Analytics API calls.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public revokeToken(
         authorization:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/analytics/token/revoke`)
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
    /**
     * Get the entire collection based on the received parameter
     * Returns a collection of nonsense entities as defined in the
     * collection parameter.  Entities include objects such as
     * ElastiCubes, widgets,users, groups, or dashboards.
     * @param { string } authorization nonsense Analytics token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API)
     * @param { string } collection Collection name to be returned
     */
    public getCollection(
         authorization:string ,
         collection:string ):Promise<string>{
        return new Promise<string>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/analytics/collection/${encodeURIComponent(collection)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as string);
                }
            });
        });
    }
}



