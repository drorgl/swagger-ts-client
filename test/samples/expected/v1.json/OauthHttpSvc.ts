import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType710 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class OauthHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Returns tokens needed for oauth
     * The **authorize** endpoint returns tokens for specific
     * client code.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } service The name of service
     * @param { ISwaggerInlineType710 } body contains code and redirectUri parameters.
     */
    public authService(
         authorization:string ,
         service:string ,
         body:ISwaggerInlineType710 ):Promise<any>{
        return new Promise<any>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/oauth/${encodeURIComponent(service)}/auth`)
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
    /**
     * Returns basic redirect url for OAuth login endpoint
     * The **get login uri** endpoint returns uri for service
     * login without redirect_uri param. It should be generated at
     * client side.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } service The name of service
     */
    public getLoginUri(
         authorization:string ,
         service:string ):Promise<any>{
        return new Promise<any>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/oauth/${encodeURIComponent(service)}/login_uri`)
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



