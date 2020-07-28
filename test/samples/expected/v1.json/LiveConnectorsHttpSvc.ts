import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType685,ISwaggerInlineType688,ISwaggerInlineType689,ISwaggerInlineType690,ISwaggerInlineType699,ISwaggerInlineType700,ISwaggerInlineType701,ISwaggerInlineType702,ISwaggerInlineType705,ISwaggerInlineType706,ISwaggerInlineType707,ISwaggerInlineType708,ISwaggerInlineType709 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class LiveConnectorsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

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
     * @param { string } provider The name of the live connector's provider
     * @param { ISwaggerInlineType688 } connectionParameters The connection parameters for a specific datasource
     */
    public listTableSchemas(
         authorization:string ,
         provider:string ,
         connectionParameters:ISwaggerInlineType688 ):Promise<Array<ISwaggerInlineType685>>{
        return new Promise<Array<ISwaggerInlineType685>>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/live_connectors/${encodeURIComponent(provider)}/list_table_schemas`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType685>);
                }
            });
        });
    }
    /**
     * Returns the list of available live connector services
     * The **get live connectors** endpoint returns a list of
     * connectors.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public listAvailableConnectors(
         authorization:string ):Promise<Array<ISwaggerInlineType689>>{
        return new Promise<Array<ISwaggerInlineType689>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/live_connectors`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType689>);
                }
            });
        });
    }
    /**
     * Returns object that describes the connection manifest
     * (parameters)
     * The **get live connector** endpoint returns connector
     * manifest that describes the parameters.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } provider The name of live connector provider.
     */
    public getConnectorManifest(
         authorization:string ,
         provider:string ):Promise<ISwaggerInlineType690>{
        return new Promise<ISwaggerInlineType690>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/live_connectors/${encodeURIComponent(provider)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType690);
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
     * @param { string } provider The name of the live connector's provider
     * @param { ISwaggerInlineType700 } connectionParameters The connection parameters for a specific datasource
     */
    public testConnection(
         authorization:string ,
         provider:string ,
         connectionParameters:ISwaggerInlineType700 ):Promise<ISwaggerInlineType699>{
        return new Promise<ISwaggerInlineType699>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/live_connectors/${encodeURIComponent(provider)}/test_connection`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType699);
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
     * @param { string } provider The name of the live connector's provider
     * @param { ISwaggerInlineType701 } connectionParameters The connection parameters for a specific datasource
     */
    public listDatabases(
         authorization:string ,
         provider:string ,
         connectionParameters:ISwaggerInlineType701 ):Promise<Array<string>>{
        return new Promise<Array<string>>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/live_connectors/${encodeURIComponent(provider)}/list_databases`)
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
     * Returns a table's schema
     * The **get table schema details** endpoint returns a
     * detailed schema of the table with columns.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } provider The name of the live connector's provider
     * @param { ISwaggerInlineType705 } connectionParameters The connection parameters for a specific datasource
     */
    public getTableSchemaDetails(
         authorization:string ,
         provider:string ,
         connectionParameters:ISwaggerInlineType705 ):Promise<ISwaggerInlineType702>{
        return new Promise<ISwaggerInlineType702>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/live_connectors/${encodeURIComponent(provider)}/table_schema_details`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType702);
                }
            });
        });
    }
    /**
     * Returns data preview
     * The **get table preview** endpoint returns a preview of the
     * data in specified table.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } provider The name of the live connector's provider
     * @param { ISwaggerInlineType707 } connectionParameters The connection parameters for a specific datasource
     */
    public getTablePreview(
         authorization:string ,
         provider:string ,
         connectionParameters:ISwaggerInlineType707 ):Promise<Array<ISwaggerInlineType706>>{
        return new Promise<Array<ISwaggerInlineType706>>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/live_connectors/${encodeURIComponent(provider)}/table_preview`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType706>);
                }
            });
        });
    }
    /**
     * Returns count of entries in table
     * The **get table count** endpoint returns the number of
     * entries in a specified table.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } provider The name of live connector provider.
     * @param { ISwaggerInlineType709 } connectionParameters The connection parameters for a specific datasource
     */
    public countTableEntries(
         authorization:string ,
         provider:string ,
         connectionParameters:ISwaggerInlineType709 ):Promise<ISwaggerInlineType708>{
        return new Promise<ISwaggerInlineType708>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/live_connectors/${encodeURIComponent(provider)}/count`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType708);
                }
            });
        });
    }
}



