import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType645 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class FeaturesHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get an array of features configurations
     * The **features** endpoint return an array of all features
     * than can be turned on and off.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public getFeatures(
         authorization:string ):Promise<Array<any>>{
        return new Promise<Array<any>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/features`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<any>);
                }
            });
        });
    }
    /**
     * Turn a feature on or off
     * The **toggle** endpoint turns a specific feature on or off.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } key The key of the feature to be updated
     * @param { ISwaggerInlineType645 } toggleFeature Should the feature be turned on or off
     */
    public toggleFeature(
         authorization:string ,
         key:string ,
         toggleFeature:ISwaggerInlineType645 ):Promise<any>{
        return new Promise<any>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/features/${encodeURIComponent(key)}/toggle`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as any);
                }
            });
        });
    }
}



