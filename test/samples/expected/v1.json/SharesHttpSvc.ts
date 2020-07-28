import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType528,ISwaggerInlineType529 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class SharesHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get a dashboard's shares
     * The **get shares** endpoint returns a dashboard's share
     * configurations.<br/><br/>The expandable fields for the
     * shares object are `group` and `user`.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } dashboardId The ID of the dashboard who's shares to get.
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } expand List of fields that should be expanded (substitures their
     *        IDs with actual objects). May be nested using the
     *        `resource.subResource` format
     */
    public getDashboardsShares(
         authorization:string ,
         dashboardId:string ,
         fields:string ,
         expand:string ):Promise<Array<ISwaggerInlineType528>>{
        const params = {
            "fields":fields,
            "expand":expand
        };
        return new Promise<Array<ISwaggerInlineType528>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dashboards/${encodeURIComponent(dashboardId)}/shares`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType528>);
                }
            });
        });
    }
    /**
     * Get a dashboard's specific share configuration
     * The **get share by id** endpoint returns the details of a
     * specific share of the dashboard.<br/><br/>The expandable
     * fields for the shares object are `group` and `user`.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } dashboardId The ID of the dashboard to get.
     * @param { string } id The ID of the share to get.
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } expand List of fields that should be expanded (substitures their
     *        IDs with actual objects). May be nested using the
     *        `resource.subResource` format
     */
    public getDashboardsShare(
         authorization:string ,
         dashboardId:string ,
         id:string ,
         fields:string ,
         expand:string ):Promise<ISwaggerInlineType529>{
        const params = {
            "fields":fields,
            "expand":expand
        };
        return new Promise<ISwaggerInlineType529>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dashboards/${encodeURIComponent(dashboardId)}/shares/${encodeURIComponent(id)}`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType529);
                }
            });
        });
    }
}



