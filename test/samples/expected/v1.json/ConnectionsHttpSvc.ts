import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType779,ISwaggerInlineType780,ISwaggerInlineType781,ISwaggerInlineType782,ISwaggerInlineType784,ISwaggerInlineType785,ISwaggerInlineType787,ISwaggerInlineType789,ISwaggerInlineType792,ISwaggerInlineType794,ISwaggerInlineType797,ISwaggerInlineType799,ISwaggerInlineType800 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class ConnectionsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Returns a connection by its ID
     * The **get connection by ID** endpoint returns a connection
     * object by ID.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the live connection. You can retrieve this ID
     *        through the get /connection endpoint.
     */
    public getConnection(
         authorization:string ,
         id:string ):Promise<ISwaggerInlineType779>{
        return new Promise<ISwaggerInlineType779>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/connection/${encodeURIComponent(id)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType779);
                }
            });
        });
    }
    /**
     * Removes a connection
     * The **delete connection** endpoint removes a connection by
     * ID.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the live connection. You can retrieve this ID
     *        through the get /connection endpoint.
     */
    public removeConnection(
         authorization:string ,
         id:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/connection/${encodeURIComponent(id)}`)
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
     * Updates a connection
     * The **update connection** endpoint updates a connection
     * with new data.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the live connection. You can retrieve this ID
     *        through the get /connection endpoint.
     * @param { any } connection Connection object
     */
    public updateConnection(
         authorization:string ,
         id:string ,
         connection:any ):Promise<ISwaggerInlineType780>{
        return new Promise<ISwaggerInlineType780>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/connection/${encodeURIComponent(id)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType780);
                }
            });
        });
    }
    /**
     * Returns a list of connections
     * The **get connection** endpoint returns a list of
     * configured connections.
     * 
     * @param { string } sort Field by which the results should be sorted. Ascending by
     *        default, descending if prefixed by `-`
     * @param { number } skip Number of results to skip from the start of the data set.
     *        skip is to be used with the `limit` parameter for paging
     * @param { number } limit How many results should be returned. limit is to be used
     *        with the `skip` parameter for paging
     */
    public listConnections(
         sort:string ,
         skip:number ,
         limit:number ):Promise<Array<ISwaggerInlineType781>>{
        const params = {
            "sort":sort,
            "skip":skip,
            "limit":limit
        };
        return new Promise<Array<ISwaggerInlineType781>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/connection`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType781>);
                }
            });
        });
    }
    /**
     * creates a new connection
     * The **create connection** endpoint creates a new connection
     * object.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { any } connection The new connection object.
     */
    public createConnection(
         authorization:string ,
         connection:any ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/connection`)
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
     * Returns recently used connection objects
     * The **list connections** endpoint returns list of recently
     * used connections.
     * 
     * @param { boolean } exposeDuplicates Flag that tells if duplicates parameter should be returned
     *        in response
     */
    public getRecentlyUsedConnections(
         exposeDuplicates:boolean ):Promise<Array<ISwaggerInlineType782>>{
        const params = {
            "exposeDuplicates":exposeDuplicates
        };
        return new Promise<Array<ISwaggerInlineType782>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/connection/recent`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType782>);
                }
            });
        });
    }
    /**
     * Returns an object with status = OK after a successful
     * connection
     * Opens a connection through a specified connector to the
     * datasource.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the live connection. You can retrieve this ID
     *        through the get /connection endpoint.
     * @param { ISwaggerInlineType785 } connectionParameters The connection parameters for a specific datasource with or
     *        without the password
     */
    public testConnectionWithoutPassword(
         authorization:string ,
         id:string ,
         connectionParameters:ISwaggerInlineType785 ):Promise<ISwaggerInlineType784>{
        return new Promise<ISwaggerInlineType784>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/connection/${encodeURIComponent(id)}/test_connection`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType784);
                }
            });
        });
    }
    /**
     * Returns list of databases
     * The **list databases** endpoint returns a list of available
     * databases in the connected instance.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the live connection. You can retrieve this ID
     *        through the get /connection endpoint.
     * @param { ISwaggerInlineType787 } connectionParameters The connection parameters for a specific datasource with or
     *        without the password
     */
    public listDatabasesWithoutPassword(
         authorization:string ,
         id:string ,
         connectionParameters:ISwaggerInlineType787 ):Promise<Array<string>>{
        return new Promise<Array<string>>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/connection/${encodeURIComponent(id)}/list_databases`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<string>);
                }
            });
        });
    }
    /**
     * Returns a list of tables in a database
     * The **list table schemas** endpoint returns a list of
     * available tables in a specified database. Table schemas do
     * not include column details.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the live connection. You can retrieve this ID
     *        through the get /connection endpoint.
     * @param { ISwaggerInlineType792 } connectionParameters The connection parameters for a specific datasource with or
     *        without the password
     */
    public listTableSchemasWithoutPassword(
         authorization:string ,
         id:string ,
         connectionParameters:ISwaggerInlineType792 ):Promise<Array<ISwaggerInlineType789>>{
        return new Promise<Array<ISwaggerInlineType789>>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/connection/${encodeURIComponent(id)}/list_table_schemas`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType789>);
                }
            });
        });
    }
    /**
     * Returns a list of tables in a database
     * The **get table schema details** endpoint returns a
     * detailed schema of the table with columns.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the live connection. You can retrieve this ID
     *        through the get /connection endpoint.
     * @param { ISwaggerInlineType797 } connectionParameters The connection parameters for a specific datasource with or
     *        without the password
     */
    public getTableSchemaDetails(
         authorization:string ,
         id:string ,
         connectionParameters:ISwaggerInlineType797 ):Promise<ISwaggerInlineType794>{
        return new Promise<ISwaggerInlineType794>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/connection/${encodeURIComponent(id)}/table_schema_details`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType794);
                }
            });
        });
    }
    /**
     * Returns a list of tables in a database
     * The **get table preview** endpoint returns a preview of the
     * data in specified table.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the live connection. You can retrieve this ID
     *        through the get /connection endpoint.
     * @param { ISwaggerInlineType800 } connectionParameters The connection parameters for a specific datasource with or
     *        without the password
     */
    public getTablePreview(
         authorization:string ,
         id:string ,
         connectionParameters:ISwaggerInlineType800 ):Promise<Array<ISwaggerInlineType799>>{
        return new Promise<Array<ISwaggerInlineType799>>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/connection/${encodeURIComponent(id)}/table_preview`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType799>);
                }
            });
        });
    }
}



