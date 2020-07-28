import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType545,ISwaggerInlineType546,ISwaggerInlineType547,ISwaggerInlineType548,ISwaggerInlineType549,ISwaggerInlineType550,ISwaggerInlineType551,ISwaggerInlineType552,ISwaggerInlineType553 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class FoldersHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get folders
     * The **get folders** endpoint provides access to a specified
     * user's folders in their stored format as `JSON` objects.
     * <br/>The results can be filtered by the 'name' parameter.
     * <br/><br/>The expandable fields for the folder object are
     * `dashboards` and `owner`.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } name Name to filter by
     * @param { string } structure Structure type of the folders
     * @param { Array<string> } ids Array of folder IDs to get, separated by a comma (`,`) and
     *        without spaces
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } sort Field by which the results should be sorted. Ascending by
     *        default, descending if prefixed by `-`
     * @param { number } skip Number of results to skip from the start of the data set.
     *        skip is to be used with the `limit` parameter for paging
     * @param { number } limit How many results should be returned. limit is to be used
     *        with the `skip` parameter for paging
     * @param { string } expand List of fields that should be expanded (substitures their
     *        IDs with actual objects). May be nested using the
     *        `resource.subResource` format
     */
    public getFolders(
         authorization:string ,
         name:string ,
         structure:string ,
         ids:Array<string> ,
         fields:string ,
         sort:string ,
         skip:number ,
         limit:number ,
         expand:string ):Promise<Array<ISwaggerInlineType545>>{
        const params = {
            "name":name,
            "structure":structure,
            "ids":ids,
            "fields":fields,
            "sort":sort,
            "skip":skip,
            "limit":limit,
            "expand":expand
        };
        return new Promise<Array<ISwaggerInlineType545>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/folders`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType545>);
                }
            });
        });
    }
    /**
     * Add a new folder
     * The **add folder** endpoint reveives a folder object and
     * adds it to the user's folders.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType546 } folder Basic folder object to be added
     */
    public addFolder(
         authorization:string ,
         folder:ISwaggerInlineType546 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/folders`)
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
     * Get a specific folder
     * The **get folder by ID** endpoint returns a specific folder
     * object by ID. <br/>The expandable fields for the folder
     * object are `dashboards` and `owner`.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the folder to get
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } expand List of fields that should be expanded (substitures their
     *        IDs with actual objects). May be nested using the
     *        `resource.subResource` format
     */
    public getFolderById(
         authorization:string ,
         id:string ,
         fields:string ,
         expand:string ):Promise<ISwaggerInlineType547>{
        const params = {
            "fields":fields,
            "expand":expand
        };
        return new Promise<ISwaggerInlineType547>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/folders/${encodeURIComponent(id)}`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType547);
                }
            });
        });
    }
    /**
     * Delete a folder
     * The **delete folder** endpoint deletes the entire folder
     * subtree, including all dashboards and widgets.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the folder to delete
     */
    public deleteFolder(
         authorization:string ,
         id:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/folders/${encodeURIComponent(id)}`)
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
     * Update a folder
     * The **update folder** endpoint will perform a partial
     * update on the folder of the provided ID, updating the
     * fields in the folder object provided in the body.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the folder to update
     * @param { ISwaggerInlineType549 } folder The partial folder object who's fields will be updated
     */
    public updateFolder(
         authorization:string ,
         id:string ,
         folder:ISwaggerInlineType549 ):Promise<ISwaggerInlineType548>{
        return new Promise<ISwaggerInlineType548>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/folders/${encodeURIComponent(id)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType548);
                }
            });
        });
    }
    /**
     * Get a folder subtree
     * The **get folder subtree by ID** endpoint returns the
     * subtree for a specific folder.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the folder to get
     * @param { string } structure Structure type of the folders
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } expand List of fields that should be expanded (substitures their
     *        IDs with actual objects). May be nested using the
     *        `resource.subResource` format
     */
    public getFolderSubtreeById(
         authorization:string ,
         id:string ,
         structure:string ,
         fields:string ,
         expand:string ):Promise<ISwaggerInlineType550>{
        const params = {
            "structure":structure,
            "fields":fields,
            "expand":expand
        };
        return new Promise<ISwaggerInlineType550>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/folders/${encodeURIComponent(id)}/subtree`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType550);
                }
            });
        });
    }
    /**
     * Get folder ancestors
     * The **get folder ancestors by ID** endpoint returns the
     * ancestors of a specific folder.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the folder to get
     * @param { string } structure Structure type of the folders
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } expand List of fields that should be expanded (substitures their
     *        IDs with actual objects). May be nested using the
     *        `resource.subResource` format
     */
    public getFolderAncestorsById(
         authorization:string ,
         id:string ,
         structure:string ,
         fields:string ,
         expand:string ):Promise<ISwaggerInlineType551>{
        const params = {
            "structure":structure,
            "fields":fields,
            "expand":expand
        };
        return new Promise<ISwaggerInlineType551>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/folders/${encodeURIComponent(id)}/ancestors`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType551);
                }
            });
        });
    }
    /**
     * Get a user's folders and dashboards flat
     * The **getDashboardsList** endpoint provides access to a
     * specified user's folders and dashboards in their stored
     * format as `JSON` objects.
     * <br/><br/>This endpoint is used for mobile only
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public getDashboardsList(
         authorization:string ):Promise<Array<ISwaggerInlineType552>>{
        return new Promise<Array<ISwaggerInlineType552>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/folders/getDashboardList`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType552>);
                }
            });
        });
    }
    /**
     * Delete folders
     * The **delete folders** endpoint deletes the entire folders
     * subtree, including all dashboards and widgets.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<string> } folderIds The IDs of the folders to delete
     */
    public deleteFolders(
         authorization:string ,
         folderIds:Array<string> ):Promise<void>{
        const params = {
            "folderIds":folderIds
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/folders/bulk`)
            .query(params)
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
     * Get all data for navver
     * The **navver** endpoint provides access to a specified
     * user's folders and dashboards in their stored format as
     * `JSON` objects.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public getFoldersAndDashboardsForNavver(
         authorization:string ):Promise<Array<ISwaggerInlineType553>>{
        return new Promise<Array<ISwaggerInlineType553>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/navver`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType553>);
                }
            });
        });
    }
}



