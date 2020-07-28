import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType815 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class CustomDataHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get all custom data
     * The get custom data endpoint returns a list of arrays that
     * contain the content of all your custom data added to the
     * nonsense MongoDB.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public getAllDocuments(
         authorization:string ):Promise<Array<any>>{
        return new Promise<Array<any>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/custom_data`)
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
     * Add a new custom data
     * The post custom data endpoints creates and stores a custom
     * data object in the nonsense MongoDB that you can leverage
     * when developing nonsense plug-ins.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { any } customDataObject Custom data object to be added.
     */
    public addDocument(
         authorization:string ,
         customDataObject:any ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/custom_data`)
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
     * Get documents based on query
     * The **get documents** endpoint returns all document that
     * match the query.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } query The query to the MongoDB Collection
     */
    public getDocuments(
         authorization:string ,
         query:string ):Promise<any>{
        const params = {
            "query":query
        };
        return new Promise<any>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/custom_data/query`)
            .query(params)
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
     * Delete all documents that match the query
     * The **delete document** endpoint deletes documents that
     * match the query.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { any } query Query to find and delete documents
     */
    public deleteDocuments(
         authorization:string ,
         query:any ):Promise<any>{
        return new Promise<any>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/custom_data/query`)
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
     * Update documents base on a query
     * The **update documents** endpoint updates (not rewrites)
     * all documents that match query.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType815 } queryAndData queryForSearch is a query object to find records that need
     *        to be updated. objectForUpdate is the replacement object
     */
    public updateDocuments(
         authorization:string ,
         queryAndData:ISwaggerInlineType815 ):Promise<any>{
        return new Promise<any>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/custom_data/query`)
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



