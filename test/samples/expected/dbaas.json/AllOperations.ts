import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";

/*
    dbaas Unknown
    


    
*/


export class AllOperations {
    constructor(private baseUrl:string ){

    }

    /**
     * List versions
     * Lists information about all Database Service API versions.
     * 
     */
    public getVersions(
        ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/`)
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
     * Show version details
     * Shows details for the Database Service API v1.0.
     * 
     */
    public getVersionInfo(
        ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/v1.0`)
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
     * List database instances
     * Lists information, including status, for all database
     * instances.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     */
    public getInstance(
         accountId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/instances`)
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
     * Create database instance
     * Creates a database instance.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     */
    public createInstance(
         accountId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/instances`)
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
     * Show database instance details
     * Shows database instance details.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     * @param { string } instanceId The instance ID for the specified database instance.
     *        
     */
    public getInstanceById(
         accountId:string ,
         instanceId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/instances/${encodeURIComponent(instanceId)}`)
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
     * Delete database instance
     * Deletes a specified database instance, including any
     * associated data.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     * @param { string } instanceId The instance ID for the specified database instance.
     *        
     */
    public deleteInstance(
         accountId:string ,
         instanceId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/instances/${encodeURIComponent(instanceId)}`)
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
     * Restart instance
     * Restarts the database service on an instance.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     * @param { string } instanceId The instance ID for the specified database instance.
     *        
     */
    public restartInstance(
         accountId:string ,
         instanceId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/instances/${encodeURIComponent(instanceId)}/action`)
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
     * List instance databases
     * Lists databases for a specified instance.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     * @param { string } instanceId The instance ID for the specified database instance.
     *        
     */
    public getDatabases(
         accountId:string ,
         instanceId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/instances/${encodeURIComponent(instanceId)}/databases`)
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
     * Create database
     * Creates a database within a specified instance.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     * @param { string } instanceId The instance ID for the specified database instance.
     *        
     */
    public createDatabase(
         accountId:string ,
         instanceId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/instances/${encodeURIComponent(instanceId)}/databases`)
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
     * Delete database
     * Deletes a specified database.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     * @param { string } instanceId The instance ID for the specified database instance.
     *        
     * @param { string } databaseName The name for the specified database.
     *        
     */
    public deleteDatabase(
         accountId:string ,
         instanceId:string ,
         databaseName:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/instances/${encodeURIComponent(instanceId)}/databases/${encodeURIComponent(databaseName)}`)
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
     * List database instance users
     * Lists the users in a specified database instance.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     * @param { string } instanceId The instance ID for the specified database instance.
     *        
     */
    public getUsers(
         accountId:string ,
         instanceId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/instances/${encodeURIComponent(instanceId)}/users`)
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
     * Create user
     * Creates a user for a specified database instance.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     * @param { string } instanceId The instance ID for the specified database instance.
     *        
     */
    public createUser(
         accountId:string ,
         instanceId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/instances/${encodeURIComponent(instanceId)}/users`)
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
     * Delete user
     * Deletes a specified user for a specified database instance.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     * @param { string } instanceId The instance ID for the specified database instance.
     *        
     * @param { string } name The name for the specified user.
     *        
     */
    public deleteUser(
         accountId:string ,
         instanceId:string ,
         name:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/instances/${encodeURIComponent(instanceId)}/users/${encodeURIComponent(name)}`)
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
     * Show root-enabled status for database instance
     * Shows root-enabled status for a database instance.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     * @param { string } instanceId The instance ID for the specified database instance.
     *        
     */
    public isRootEnabled(
         accountId:string ,
         instanceId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/instances/${encodeURIComponent(instanceId)}/root`)
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
     * Enable root user
     * Enables the root user for a specified database instance and
     * returns the root password.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     * @param { string } instanceId The instance ID for the specified database instance.
     *        
     */
    public createRoot(
         accountId:string ,
         instanceId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/instances/${encodeURIComponent(instanceId)}/root`)
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
     * List flavors
     * Lists information for all available flavors.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     */
    public getFlavors(
         accountId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/flavors`)
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
     * Show flavor details
     * Shows flavor details.
     * 
     * @param { string } accountId The account ID of the owner of the specified instance.
     *        
     * @param { string } flavorId The flavor ID for the specified flavor.
     *        
     */
    public getFlavorById(
         accountId:string ,
         flavorId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/v1.0/${encodeURIComponent(accountId)}/flavors/${encodeURIComponent(flavorId)}`)
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



