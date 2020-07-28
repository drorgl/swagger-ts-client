import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType304,ISwaggerInlineType305,ISwaggerInlineType306,InonsenseGroup,IadGroup,ISwaggerInlineType307 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class GroupsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get groups
     * The **get groups** endpoint returns a list of user groups
     * with their details.<br/>The results can be filtered by
     * different parameters such as group name or
     * origin.<br/><br/>The expandable fields for the group object
     * are `users` and `role`.
     * @param { string } name Group name to filter by
     * @param { string } mail Group email to filter by
     * @param { string } roleId Group role ID to filter by
     * @param { string } origin Group origin to filter by (`ad` or `nonsense`)
     * @param { Array<string> } ids Group IDs to filter by, separated by a comma (`,`) and
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
    public getGroups(
         name:string ,
         mail:string ,
         roleId:string ,
         origin:string ,
         ids:Array<string> ,
         fields:string ,
         sort:string ,
         skip:number ,
         limit:number ,
         expand:string ):Promise<Array<ISwaggerInlineType304>>{
        const params = {
            "name":name,
            "mail":mail,
            "roleId":roleId,
            "origin":origin,
            "ids":ids,
            "fields":fields,
            "sort":sort,
            "skip":skip,
            "limit":limit,
            "expand":expand
        };
        return new Promise<Array<ISwaggerInlineType304>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/groups`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType304>);
                }
            });
        });
    }
    /**
     * Add a new group
     * The *add group* endpoint receives a new group object and
     * creates that group in nonsense, returning the created
     * object.
     * <br/>If a group with the same name exists, it will return
     * an error.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType305 } group Basic group object (in `JSON` notation) to be added
     */
    public addGroup(
         authorization:string ,
         group:ISwaggerInlineType305 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/groups`)
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
     * Add a new Active Directory group
     * The **add Active Directory group** endpoint receives an
     * Active Directory groups object, retrieves the group's
     * details from Active Directory and adds it to the
     * application.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType306 } adGroup Active Directory group object to be added
     */
    public addAdGroup(
         authorization:string ,
         adGroup:ISwaggerInlineType306 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/groups/ad`)
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
     * Add several groups at once
     * The **bulk add** endpoint allows adding multiple groups at
     * once, by receiving an array of group objects whose
     * structure is alike to the single **add group** endpoint.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<InonsenseGroup> } groups A collection of basic group objects (in `JSON` notation) to
     *        be added
     */
    public addGroups(
         authorization:string ,
         groups:Array<InonsenseGroup> ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/groups/bulk`)
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
     * Bulk add Active Directory groups
     * The **bulk add Active Directory group** endpoint receives
     * an array of Active Directory group objects, retrieves the
     * group's details from Active Directory and adds it to the
     * application.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<IadGroup> } adGroups Array of Active Directory user objects to be added
     */
    public addAdGroups(
         authorization:string ,
         adGroups:Array<IadGroup> ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/groups/ad/bulk`)
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
     * Get a specific group
     * The **get  group by id** endpoint returns the details of
     * the user group corresponding to the `id`
     * parameter.<br/><br/>The expandable fields for the group
     * object are `users` and `role`.
     * @param { string } id The ID of the group to get.
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } expand List of fields that should be expanded (substitures their
     *        IDs with actual objects). May be nested using the
     *        `resource.subResource` format
     */
    public getGroup(
         id:string ,
         fields:string ,
         expand:string ):Promise<ISwaggerInlineType307>{
        const params = {
            "fields":fields,
            "expand":expand
        };
        return new Promise<ISwaggerInlineType307>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/groups/${encodeURIComponent(id)}`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType307);
                }
            });
        });
    }
    /**
     * Delete a specific group
     * The **delete group by id** endpoint removes the group
     * corresponding to the `id` parameter.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the group to remove.
     */
    public removeGroup(
         authorization:string ,
         id:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/groups/${encodeURIComponent(id)}`)
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



