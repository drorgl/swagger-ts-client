import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType711,ISwaggerInlineType721,ISwaggerInlineType731,ISwaggerInlineType741,ISwaggerInlineType751,ISwaggerInlineType761,ISwaggerInlineType771,ISwaggerInlineType772,Ipermission,ISwaggerInlineType773,ISwaggerInlineType775,ISwaggerInlineType777 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class DatasetsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Returns a dataset by ID
     * The **get dataset** endpoint returns a dataset object by
     * ID.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dataset.
     */
    public getDataset(
         authorization:string ,
         id:string ):Promise<ISwaggerInlineType711>{
        return new Promise<ISwaggerInlineType711>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/datasets/${encodeURIComponent(id)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType711);
                }
            });
        });
    }
    /**
     * Removes a dataset
     * The **remove dataset** endpoint removes a dataset by ID.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dataset.
     */
    public removeDataset(
         authorization:string ,
         id:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/datasets/${encodeURIComponent(id)}`)
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
     * Updates a specific dataset
     * The **update dataset** endpoint updates a dataset with new
     * data.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dataset.
     * @param { ISwaggerInlineType721 } dataset The dataset object that defines a dataset
     */
    public updateDataset(
         authorization:string ,
         id:string ,
         dataset:ISwaggerInlineType721 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/datasets/${encodeURIComponent(id)}`)
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
     * Returns a dataset by its fullname
     * The **get dataset by fullname** endpoint returns a dataset
     * object by its fullname property.
     * <br/><br/>The expandable field for the dataset object is
     * `connection`. The expanded connection does not have
     * parameters property.
     * 
     * @param { string } fullname The dataset's fullname
     * @param { string } expand List of fields that should be expanded (substitures their
     *        IDs with actual objects). May be nested using the
     *        `resource.subResource` format
     */
    public getByFullName(
         fullname:string ,
         expand:string ):Promise<ISwaggerInlineType731>{
        const params = {
            "expand":expand
        };
        return new Promise<ISwaggerInlineType731>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/datasets/by_fullname/${encodeURIComponent(fullname)}`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType731);
                }
            });
        });
    }
    /**
     * Returns a modified dataset by ID
     * The **get dataset** endpoint returns a dataset object with
     * an applied schema transformations by ID.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dataset.
     */
    public getWithAppliedTransformations(
         authorization:string ,
         id:string ):Promise<ISwaggerInlineType741>{
        return new Promise<ISwaggerInlineType741>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/datasets/${encodeURIComponent(id)}/transformed`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType741);
                }
            });
        });
    }
    /**
     * Returns a list of datasets
     * The **get datasets** endpoint provides access to datasets
     * in their stored format as `JSON` objects.
     * <br/><br/>The expandable field for the data object is
     * `connection`.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } type Filters dataset by type
     */
    public getAllDatasets(
         authorization:string ,
         fields:string ,
         type:string ):Promise<Array<ISwaggerInlineType751>>{
        const params = {
            "fields":fields,
            "type":type
        };
        return new Promise<Array<ISwaggerInlineType751>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/datasets`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType751>);
                }
            });
        });
    }
    /**
     * Creates a new dataset
     * The **create dataset** endpoint creates a new dataset
     * object.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType761 } dataset The dataset object that defines a dataset
     */
    public createDataset(
         authorization:string ,
         dataset:ISwaggerInlineType761 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/datasets`)
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
     * Returns the dataset permissions by its ID
     * The **get dataset permissions** endpoint returns the
     * permissions for a dataset.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dataset.
     */
    public getPermissions(
         authorization:string ,
         id:string ):Promise<Array<ISwaggerInlineType771>>{
        return new Promise<Array<ISwaggerInlineType771>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/datasets/${encodeURIComponent(id)}/permissions`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType771>);
                }
            });
        });
    }
    /**
     * Updates a datasets's permissions
     * The **update dataset** endpoint updates the dataset with
     * the fetched permissions.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dataset.
     * @param { Array<Ipermission> } permissions The dataset's permissions
     */
    public setPermissions(
         authorization:string ,
         id:string ,
         permissions:Array<Ipermission> ):Promise<Array<ISwaggerInlineType772>>{
        return new Promise<Array<ISwaggerInlineType772>>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/datasets/${encodeURIComponent(id)}/permissions`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType772>);
                }
            });
        });
    }
    /**
     * Adding members to dataset shares array
     * The **adding members to Dataset Model** endpoint returns an
     * object of Dataset Models.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType773 } server - An object with dataset fullname, shares array info
     *        
     */
    public addDatasetShares(
         authorization:string ,
         server:ISwaggerInlineType773 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/datasets/addDatasetShares`)
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
     * Returns the data security rules set up for a dataset
     * The **get data security** endpoint returns the data
     * security rules set up for a dataset.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } fullname The dataset's fullname
     */
    public getDataContextForDataSet(
         authorization:string ,
         fullname:string ):Promise<Array<ISwaggerInlineType775>>{
        return new Promise<Array<ISwaggerInlineType775>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/datasets/${encodeURIComponent(fullname)}/datasecurity`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType775>);
                }
            });
        });
    }
    /**
     * Defines data security rules for a dataset
     * The **create data context** endpoint creates new data
     * context object
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } fullname The dataset's fullname
     * @param { ISwaggerInlineType777 } dataContext The data context object that defines a dataset's permissions
     */
    public addDataContextForDataSet(
         authorization:string ,
         fullname:string ,
         dataContext:ISwaggerInlineType777 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/datasets/${encodeURIComponent(fullname)}/datasecurity`)
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
     * Removes the data context column of a dataset
     * The **remove data context** endpoint removes the specified
     * data context column according to received parameters.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } fullname The dataset's fullname.
     * @param { string } table The table name for the relevant data context object
     * @param { string } column The column name for the relevant data context object
     */
    public removeDataContextColumn(
         authorization:string ,
         fullname:string ,
         table:string ,
         column:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/datasets/${encodeURIComponent(fullname)}/datasecurity/${encodeURIComponent(table)}/${encodeURIComponent(column)}`)
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
     * Removes a data context by ID
     * The **remove data context** endpoint removes the specified
     * data context by its ID.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } dataSecurityId The ID of the data context object to be removed
     */
    public removeDataContextById(
         authorization:string ,
         dataSecurityId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/datasets/datasecurity/${encodeURIComponent(dataSecurityId)}`)
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



