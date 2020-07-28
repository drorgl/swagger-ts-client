import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType345,ISwaggerInlineType443,ISwaggerInlineType463,ISwaggerInlineType524,ISwaggerInlineType543 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class AdminHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get all dashboards
     * The **get all dashboards** endpoint provides access to all
     * available dashboards in their stored format as `JSON`
     * objects.
     * <br/>Its results can be filtered by parameters such as
     * dashboard type, dashboard name, parent folder, or
     * datasource.
     * <br/><br/>The expandable fields for the dashboard object
     * are `widgets`, `parentFolder` and `owner`.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } dashboardType Dashboard instance type to filter by
     * @param { boolean } ownerInfo Dashboard owner information
     * @param { string } id Dashboard ID to filter by
     * @param { string } parentFolder Parent folder ID to filter by
     * @param { string } name Name to filter by
     * @param { string } datasourceTitle Datasource name to filter by
     * @param { string } datasourceAddress Datasource address to filter by
     * @param { string } ownershipType Dashboard ownership type to filter by, rewrites
     *        "dashboardType" filter
     * @param { string } search Search by dashboard title query string
     * @param { boolean } asObject Defines response type, as list of items (default) or object
     *        with properties
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
    public getAllDashboards(
         authorization:string ,
         dashboardType:string ,
         ownerInfo:boolean ,
         id:string ,
         parentFolder:string ,
         name:string ,
         datasourceTitle:string ,
         datasourceAddress:string ,
         ownershipType:string ,
         search:string ,
         asObject:boolean ,
         fields:string ,
         sort:string ,
         skip:number ,
         limit:number ,
         expand:string ):Promise<Array<ISwaggerInlineType345>>{
        const params = {
            "dashboardType":dashboardType,
            "ownerInfo":ownerInfo,
            "id":id,
            "parentFolder":parentFolder,
            "name":name,
            "datasourceTitle":datasourceTitle,
            "datasourceAddress":datasourceAddress,
            "ownershipType":ownershipType,
            "search":search,
            "asObject":asObject,
            "fields":fields,
            "sort":sort,
            "skip":skip,
            "limit":limit,
            "expand":expand
        };
        return new Promise<Array<ISwaggerInlineType345>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dashboards/admin`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType345>);
                }
            });
        });
    }
    /**
     * Change dashboard owner
     * The **change owner** endpoint updates the owner of any
     * dashboard according to the dashboard ID.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard to update
     * @param { ISwaggerInlineType463 } ownerData Object with the ID of new owner of a dashboard
     */
    public changeDashboardOwner(
         authorization:string ,
         id:string ,
         ownerData:ISwaggerInlineType463 ):Promise<ISwaggerInlineType443>{
        return new Promise<ISwaggerInlineType443>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards/${encodeURIComponent(id)}/admin/change_owner`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType443);
                }
            });
        });
    }
    /**
     * Replace Datasource
     * The **replace datasource** endpoint replaces the datasource
     * for any specified dashboard.
     * <br/>When dashboard ID is ommitted, the datasource will be
     * replaced for all dashboards associated with that
     * datasource.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server Datasource Server("Set" for ElastiCube sets) to update
     * @param { string } title Datasource Title to update
     * @param { string } dashboardId The ID of the dashboard to get
     * @param { ISwaggerInlineType524 } datasource The new datasource object
     */
    public replaceDataSource(
         authorization:string ,
         server:string ,
         title:string ,
         dashboardId:string ,
         datasource:ISwaggerInlineType524 ):Promise<number>{
        const params = {
            "dashboardId":dashboardId
        };
        return new Promise<number>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards/${encodeURIComponent(server)}/${encodeURIComponent(title)}/replace_datasource`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as number);
                }
            });
        });
    }
    /**
     * Returns an encrypted password from plaintext
     * The **encryptDatabasePassword** endpoint encrypts and
     * returns a password from plaintext.
     * @param { string } plaintext plaintext password
     */
    public encryptMongoPassword(
         plaintext:string ):Promise<void>{
        const params = {
            "plaintext":plaintext
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/app_database/encrypt_database_password`)
            .query(params)
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
     * Change a MongoDB user’s password
     * Change a user’s password for the MongoDB installed with
     * nonsense.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType543 } userObject The User object that defines the user whose password is to
     *        be changed and the new password.
     */
    public changeMongoUserPassword(
         authorization:string ,
         userObject:ISwaggerInlineType543 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/app_database/change_database_user_password`)
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



