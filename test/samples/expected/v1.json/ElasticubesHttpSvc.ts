import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType217,ISwaggerInlineType218,ISwaggerInlineType219,ISwaggerInlineType220,ISwaggerInlineType221,ISwaggerInlineType223,ISwaggerInlineType224,ISwaggerInlineType226,ISwaggerInlineType228,ISwaggerInlineType230,ISwaggerInlineType231,ISwaggerInlineType233,ISwaggerInlineType235,ISwaggerInlineType236,ISwaggerInlineType238,ISwaggerInlineType240,ISwaggerInlineType242,ISwaggerInlineType243,ISwaggerInlineType245,ISwaggerInlineType247,ISwaggerInlineType248,ISwaggerInlineType250,ISwaggerInlineType252,ISwaggerInlineType254,ISwaggerInlineType255,ISwaggerInlineType257,ISwaggerInlineType259,ISwaggerInlineType260,ISwaggerInlineType262,ISwaggerInlineType263,ISwaggerInlineType265,ISwaggerInlineType266,ISwaggerInlineType268,ISwaggerInlineType270,ISwaggerInlineType271,ISwaggerInlineType272,ISwaggerInlineType273,ISwaggerInlineType276,ISwaggerInlineType279,ISwaggerInlineType836,IserverPermissions } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class ElasticubesHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get ElastiCube sets
     * The **get ElastiCube sets** endpoint returns a list of
     * ElastiCube sets.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public getSets(
         authorization:string ):Promise<Array<ISwaggerInlineType217>>{
        return new Promise<Array<ISwaggerInlineType217>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/elasticubes/sets`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType217>);
                }
            });
        });
    }
    /**
     * Add ElastiCube sets
     * The *add ElastiCube set* endpoint receives a new ElastiCube
     * set object and creates that set in nonsense, returning the
     * created object.
     * <br/>If a server full name does not exist, an error will be
     * returned.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType218 } set Basic ElastiCube set object (in `JSON` notation) to be added
     */
    public addSet(
         authorization:string ,
         set:ISwaggerInlineType218 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/elasticubes/sets`)
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
     * Get ElastiCube set
     * The **get ElastiCube set** endpoint returns an ElastiCube
     * set by title.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } title The title of the ElastiCube set to get
     */
    public getSet(
         authorization:string ,
         title:string ):Promise<ISwaggerInlineType219>{
        return new Promise<ISwaggerInlineType219>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/elasticubes/sets/${encodeURIComponent(title)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType219);
                }
            });
        });
    }
    /**
     * Delete ElastiCube set
     * The **delete ElastiCube set** endpoint deletes the
     * ElastiCube set by title.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } title The title of the ElastiCube set to delete
     */
    public deleteSet(
         authorization:string ,
         title:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/elasticubes/sets/${encodeURIComponent(title)}`)
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
     * Update ElastiCube set
     * The **update ElastiCube set** endpoint updates the
     * ElastiCube set by title and returns the updated object.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } title The title of the ElastiCube set to update
     * @param { ISwaggerInlineType220 } set Basic ElastiCube set object (in `JSON` notation) to be added
     */
    public updateSet(
         authorization:string ,
         title:string ,
         set:ISwaggerInlineType220 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/elasticubes/sets/${encodeURIComponent(title)}`)
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
     * Explains the jaql
     * The **explain Jaql** endpoint explains the jaql.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } elasticube The title of the ElastiCube set to delete
     * @param { boolean } rowcount Whether to include row count
     * @param { boolean } uniquecount Whether to include unique count
     * @param { any } jaql Jaql Object to be explained
     */
    public explainJaql(
         authorization:string ,
         elasticube:string ,
         rowcount:boolean ,
         uniquecount:boolean ,
         jaql:any ):Promise<any>{
        const params = {
            "rowcount":rowcount,
            "uniquecount":uniquecount
        };
        return new Promise<any>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/elasticubes/${encodeURIComponent(elasticube)}/jaql/explain`)
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
     * Get ElastiCube build revision
     * Get ElastiCube and Elasticubes sets build revision.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube to get
     * @param { string } title The title of the ElastiCube to get
     */
    public getRevision(
         authorization:string ,
         server:string ,
         title:string ):Promise<string>{
        return new Promise<string>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/revision`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as string);
                }
            });
        });
    }
    /**
     * Creates an SQL query
     * The **post sql manual query** endpoint creates an SQL query
     * on an ElastiCube.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube to get
     * @param { string } title The title of the ElastiCube to get
     * @param { ISwaggerInlineType223 } manualTableSqlQuery The manualTableSqlQuery object that defines the SQL query
     *        that creates a table and the name of the new table
     */
    public post_elasticubes_server_title_sql_manual_query(
         authorization:string ,
         server:string ,
         title:string ,
         manualTableSqlQuery:ISwaggerInlineType223 ):Promise<ISwaggerInlineType221>{
        return new Promise<ISwaggerInlineType221>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/sql_manual_query`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType221);
                }
            });
        });
    }
    /**
     * Get an SQL query
     * The **get sql manual query** endpoint returns an SQL query
     * for an ElastiCube table.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube to get
     * @param { string } title The title of the ElastiCube to get
     * @param { string } tableName The title of the table to get
     */
    public get_elasticubes_server_title_sql_manual_query_tableName(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ):Promise<ISwaggerInlineType224>{
        return new Promise<ISwaggerInlineType224>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/sql_manual_query/${encodeURIComponent(tableName)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType224);
                }
            });
        });
    }
    /**
     * Delete an SQL query
     * The **delete sql manual query** endpoint deletes the SQL
     * query of an ElastiCube table.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube where the SQL query is to be
     *        deleted
     * @param { string } title The title of the ElastiCube to get where the SQL query is
     *        to be deleted
     * @param { string } tableName The title of the table where the SQL query is to be deleted
     */
    public delete_elasticubes_server_title_sql_manual_query_tableName(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ):Promise<ISwaggerInlineType226>{
        return new Promise<ISwaggerInlineType226>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/sql_manual_query/${encodeURIComponent(tableName)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType226);
                }
            });
        });
    }
    /**
     * Update an SQL query
     * The **update sql manual query** endpoint updates the SQL
     * query of an ElastiCube table.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube where the SQL query is to be
     *        updated
     * @param { string } title The title of the ElastiCube where the SQL query is to be
     *        updated
     * @param { string } tableName The title of the table where the SQL query is to be updated
     * @param { ISwaggerInlineType230 } manualTableSqlQuery The new SQL query that replaces the existing query
     */
    public patch_elasticubes_server_title_sql_manual_query_tableName(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ,
         manualTableSqlQuery:ISwaggerInlineType230 ):Promise<ISwaggerInlineType228>{
        return new Promise<ISwaggerInlineType228>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/sql_manual_query/${encodeURIComponent(tableName)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType228);
                }
            });
        });
    }
    /**
     * Get an ElastiCube’s custom tables
     * The **get custom tables** endpoint returns a list of SQL
     * queries for custom tables and their table names.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube to get
     * @param { string } title The title of the ElastiCube to get
     */
    public get_elasticubes_server_title_custom_tables(
         authorization:string ,
         server:string ,
         title:string ):Promise<ISwaggerInlineType231>{
        return new Promise<ISwaggerInlineType231>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/custom_tables`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType231);
                }
            });
        });
    }
    /**
     * Creates a custom table
     * The **post custom tables** endpoint creates a custom table
     * on an ElastiCube through an SQL query.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube where the custom table is to
     *        be created
     * @param { string } title The title of the ElastiCube where the custom table is to be
     *        created
     * @param { ISwaggerInlineType235 } tableSqlQuery The tableSqlQuery object that defines the SQL query that
     *        creates a table and the name of the custom table
     */
    public post_elasticubes_server_title_custom_tables(
         authorization:string ,
         server:string ,
         title:string ,
         tableSqlQuery:ISwaggerInlineType235 ):Promise<ISwaggerInlineType233>{
        return new Promise<ISwaggerInlineType233>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/custom_tables`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType233);
                }
            });
        });
    }
    /**
     * Get an SQL query for a custom table
     * The **get custom table** endpoint returns an SQL query for
     * a custom table in an ElastiCube.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube to get
     * @param { string } title The title of the ElastiCube to get
     * @param { string } tableName The title of the table to get
     */
    public get_elasticubes_server_title_custom_tables_tableName(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ):Promise<ISwaggerInlineType236>{
        return new Promise<ISwaggerInlineType236>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/custom_tables/${encodeURIComponent(tableName)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType236);
                }
            });
        });
    }
    /**
     * Delete a custom table
     * The **delete custom table** endpoint deletes the SQL query
     * that defines a custom table, removing the table.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube where the custom table is to
     *        be deleted
     * @param { string } title The title of the ElastiCube where the custom table is to be
     *        deleted
     * @param { string } tableName The title of the table where the custom table is to be
     *        deleted
     */
    public delete_elasticubes_server_title_custom_tables_tableName(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ):Promise<ISwaggerInlineType238>{
        return new Promise<ISwaggerInlineType238>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/custom_tables/${encodeURIComponent(tableName)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType238);
                }
            });
        });
    }
    /**
     * Update an SQL query
     * The **patch custom table** endpoint updates a custom
     * table’s SQL query.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube where the custom table is to
     *        be updated
     * @param { string } title The title of the ElastiCube where the custom table is to be
     *        updated
     * @param { string } tableName The title of the table where the custom table is to be
     *        updated
     * @param { ISwaggerInlineType242 } sqlQuery The sqlQuery object that defines the SQL query of the
     *        custom table
     */
    public patch_elasticubes_server_title_custom_tables_tableName(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ,
         sqlQuery:ISwaggerInlineType242 ):Promise<ISwaggerInlineType240>{
        return new Promise<ISwaggerInlineType240>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/custom_tables/${encodeURIComponent(tableName)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType240);
                }
            });
        });
    }
    /**
     * Get a list of custom fields
     * The **get custom fields** endpoint returns a list of custom
     * fields and their SQL queries.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube to get
     * @param { string } title The title of the ElastiCube to get
     * @param { string } tableName The title of the table to get
     */
    public get_elasticubes_server_title_tableName_custom_fields(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ):Promise<ISwaggerInlineType243>{
        return new Promise<ISwaggerInlineType243>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/${encodeURIComponent(tableName)}/custom_fields`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType243);
                }
            });
        });
    }
    /**
     * Adds a custom field
     * The **post custom fields** endpoint adds a custom field to
     * a table.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube where the custom field is to
     *        be created
     * @param { string } title The title of the ElastiCube where the custom field is to be
     *        created
     * @param { string } tableName The title of the table where the custom field is to be
     *        created
     * @param { ISwaggerInlineType247 } fieldSqlQuery The fieldSqlQuery object that defines the SQL query and the
     *        name of the custom field
     */
    public post_elasticubes_server_title_tableName_custom_fields(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ,
         fieldSqlQuery:ISwaggerInlineType247 ):Promise<ISwaggerInlineType245>{
        return new Promise<ISwaggerInlineType245>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/${encodeURIComponent(tableName)}/custom_fields`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType245);
                }
            });
        });
    }
    /**
     * Get the SQL query of a custom field
     * The **get custom field** endpoint returns the SQL query of
     * a custom field.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube to get
     * @param { string } title The title of the ElastiCube to get
     * @param { string } tableName The title of the table to get
     * @param { string } fieldName The title of the table filed to get
     */
    public get_elasticubes_server_title_tableName_custom_fields_fieldName(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ,
         fieldName:string ):Promise<ISwaggerInlineType248>{
        return new Promise<ISwaggerInlineType248>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/${encodeURIComponent(tableName)}/custom_fields/${encodeURIComponent(fieldName)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType248);
                }
            });
        });
    }
    /**
     * Delete a custom field
     * The **delete custom field** endpoint deletes the SQL query
     * that creates a custom field removing the field from the
     * table.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube where the custom field is to
     *        be deleted
     * @param { string } title The title of the ElastiCube where the custom field is to be
     *        deleted
     * @param { string } tableName The title of the table where the custom field is to be
     *        deleted
     * @param { string } fieldName The title of the table filed to get
     */
    public delete_elasticubes_server_title_tableName_custom_fields_fieldName(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ,
         fieldName:string ):Promise<ISwaggerInlineType250>{
        return new Promise<ISwaggerInlineType250>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/${encodeURIComponent(tableName)}/custom_fields/${encodeURIComponent(fieldName)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType250);
                }
            });
        });
    }
    /**
     * Updates a custom field
     * The **patch custom field** endpoint updates the SQL query
     * of a custom field.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube where the custom field is to
     *        be updated
     * @param { string } title The title of the ElastiCube where the custom field is to be
     *        updated
     * @param { string } tableName The title of the table where the custom field is to be
     *        updated
     * @param { string } fieldName The title of the table filed where the custom field is to
     *        be updated
     * @param { ISwaggerInlineType254 } sqlQuery The sqlQuery object that defines the SQL query of a custom
     *        field
     */
    public patch_elasticubes_server_title_tableName_custom_fields_fieldName(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ,
         fieldName:string ,
         sqlQuery:ISwaggerInlineType254 ):Promise<ISwaggerInlineType252>{
        return new Promise<ISwaggerInlineType252>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/${encodeURIComponent(tableName)}/custom_fields/${encodeURIComponent(fieldName)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType252);
                }
            });
        });
    }
    /**
     * Get an ElastiCube table’s relation
     * The **get relations** endpoint returns an ElastiCube
     * table’s relations.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube to get
     * @param { string } title The title of the ElastiCube to get
     * @param { string } tableName The title of the table to get
     */
    public get_elasticubes_server_title_tableName_relations(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ):Promise<ISwaggerInlineType255>{
        return new Promise<ISwaggerInlineType255>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/${encodeURIComponent(tableName)}/relations`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType255);
                }
            });
        });
    }
    /**
     * Create a relation between two fields
     * The **post relations** endpoint creates a new relationship
     * between two fields in an ElastiCube table.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube where the relation is to be
     *        created
     * @param { string } title The title of the ElastiCube where the relation is to be
     *        created
     * @param { string } tableName The title of the table where the relation is to be created
     * @param { ISwaggerInlineType259 } fieldUpdateRelation The fieldUpdateRelation object that defines the relation
     *        between two fields in a table
     */
    public post_elasticubes_server_title_tableName_relations(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ,
         fieldUpdateRelation:ISwaggerInlineType259 ):Promise<ISwaggerInlineType257>{
        return new Promise<ISwaggerInlineType257>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/${encodeURIComponent(tableName)}/relations`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType257);
                }
            });
        });
    }
    /**
     * Deletes a relation
     * The **delete relations** endpoint deletes a relation
     * between two fields in an ElastiCube table.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube where the relation is to be
     *        deleted
     * @param { string } title The title of the ElastiCube where the relation is to be
     *        deleted
     * @param { string } tableName The title of the table where the relation is to be deleted
     * @param { ISwaggerInlineType262 } fieldRelation The fieldUpdateRelation object that defines which realtion
     *        delete in a table
     */
    public delete_elasticubes_server_title_tableName_relations(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ,
         fieldRelation:ISwaggerInlineType262 ):Promise<ISwaggerInlineType260>{
        return new Promise<ISwaggerInlineType260>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/${encodeURIComponent(tableName)}/relations`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType260);
                }
            });
        });
    }
    /**
     * Update a relation between two fields
     * The **patch relations** endpoint updates a relation between
     * two fields in an ElastiCube table.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube where the relation is to be
     *        updated
     * @param { string } title The title of the ElastiCube where the relation is to be
     *        updated
     * @param { string } tableName The title of the table where the relation is to be updated
     * @param { ISwaggerInlineType265 } fieldUpdateRelation The fieldUpdateRelation object that defines the relation
     *        between two fields in a table
     */
    public patch_elasticubes_server_title_tableName_relations(
         authorization:string ,
         server:string ,
         title:string ,
         tableName:string ,
         fieldUpdateRelation:ISwaggerInlineType265 ):Promise<ISwaggerInlineType263>{
        return new Promise<ISwaggerInlineType263>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/${encodeURIComponent(tableName)}/relations`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType263);
                }
            });
        });
    }
    /**
     * Get the settings of Elasticubes Server
     * The **get server settings** gets the settings of Elasticbes
     * server.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube to get
     */
    public get_elasticubes_servers_server_settings(
         authorization:string ,
         server:string ):Promise<ISwaggerInlineType266>{
        return new Promise<ISwaggerInlineType266>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/elasticubes/servers/${encodeURIComponent(server)}/settings`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType266);
                }
            });
        });
    }
    /**
     * Updates the settings of Elasticubes Server
     * The **post server settings** updated the settings of
     * Elasticbes server.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The ElastiCube server address
     * @param { boolean } restart boolean value for restarting the ElastiCubes or not
     * @param { ISwaggerInlineType270 } serverSettings The settings object to update
     */
    public post_elasticubes_servers_server_settings(
         authorization:string ,
         server:string ,
         restart:boolean ,
         serverSettings:ISwaggerInlineType270 ):Promise<ISwaggerInlineType268>{
        const params = {
            "restart":restart
        };
        return new Promise<ISwaggerInlineType268>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/elasticubes/servers/${encodeURIComponent(server)}/settings`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType268);
                }
            });
        });
    }
    /**
     * Tests connectivity to R server
     * The **test R server** tests connectivity to R server
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The ElastiCube server
     * @param { string } rserver The R server address
     */
    public get_elasticubes_servers_server_settings_rserver_test(
         authorization:string ,
         server:string ,
         rserver:string ):Promise<boolean>{
        const params = {
            "rserver":rserver
        };
        return new Promise<boolean>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/elasticubes/servers/${encodeURIComponent(server)}/settings/rserver/test`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as boolean);
                }
            });
        });
    }
    /**
     * Update ElastiCube
     * The *Update ElastiCube* endpoint updating ElastiCube
     * object.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The server of the ElastiCube
     * @param { string } title The title of the ElastiCube
     * @param { ISwaggerInlineType271 } updateObj The object that contain parameters to update or create
     */
    public updateCube(
         authorization:string ,
         server:string ,
         title:string ,
         updateObj:ISwaggerInlineType271 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/elasticubes/${encodeURIComponent(server)}/${encodeURIComponent(title)}/updateCube`)
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
     * Get ElastiCubes
     * The **get Elasticubes Model** endpoint returns an array of
     * ElastiCube Models.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public getElasticubes(
         authorization:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/elasticubes/getElasticubes`)
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
     * Get ElastiCube
     * The **get Elasticubes Model** endpoint returns an array of
     * ElastiCube Models.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<ISwaggerInlineType272> } cubes - An Array of ElastiCubes for which need to get a model
     *        
     */
    public getElasticubes(
         authorization:string ,
         cubes:Array<ISwaggerInlineType272> ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/elasticubes/getElasticubes`)
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
     * Check elasticubes permissions
     * Check elasticubes/dataset permission across users and
     * groups
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<ISwaggerInlineType276> } permissionsCube - An array of objects with users array, groups array and
     *        elasticube, server property or dataset
     *        
     */
    public permissionsCheck(
         authorization:string ,
         permissionsCube:Array<ISwaggerInlineType276> ):Promise<Array<ISwaggerInlineType273>>{
        return new Promise<Array<ISwaggerInlineType273>>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/elasticubes/permissionsCheck`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType273>);
                }
            });
        });
    }
    /**
     * Adding members to elasticubes shares array
     * The **adding members to Elasticubes Model** endpoint
     * returns an object of ElastiCube Models.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType279 } server - An object with elasticube id or title, server, shares
     *        array info
     *        
     */
    public addCubesShares(
         authorization:string ,
         server:ISwaggerInlineType279 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/elasticubes/cubeShares`)
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
     * updates Elasricube Server default permission
     * The **update ElastiCube server default permission **
     * endpoint returns a list of ElastiCube server permissions.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server The ElastiCube server
     * @param { Array<IserverPermissions> } permissions permissions array.
     */
    public updateDefaultPermission(
         authorization:string ,
         server:string ,
         permissions:Array<IserverPermissions> ):Promise<Array<ISwaggerInlineType836>>{
        return new Promise<Array<ISwaggerInlineType836>>((resolve, reject) => {
            superAgentRequest
            .put(this.baseUrl + `/elasticubes/server/${encodeURIComponent(server)}/permissions`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType836>);
                }
            });
        });
    }
}



