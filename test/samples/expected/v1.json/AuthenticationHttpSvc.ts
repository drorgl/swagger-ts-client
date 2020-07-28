import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType540,ISwaggerInlineType541,ISwaggerInlineType542,ISwaggerInlineType544 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class AuthenticationHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Redirect super user to nonsense home page
     * Redirect super user to nonsense home page.
     * @param { string } email Super user email
     */
    public startup(
         email:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/authentication/startup/${encodeURIComponent(email)}`)
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
     * tryLogin.
     * Simulates login with username and password
     * @param { string } username username or email.
     * @param { string } password user's password.
     * @param { string } localeId user's locale.
     */
    public tryLogin(
         username:string ,
         password:string ,
         localeId:string ):Promise<void>{
        const params = {
            "username":username,
            "password":password,
            "localeId":localeId
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/authentication/tryLogin`)
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
     * Authenticate and receive token
     * The **login** endpoint validates passed credentials and
     * returns an API token for subsequent requests to the API.
     * 
     * @param { string } xDeviceId The device id.
     * @param { string } username User's username or email
     * @param { string } password User's password in plain text
     * @param { string } localeId User's locale, as ISO language code (See
     *        [table](http://www.lingoes.net/en/translator/langcode.htm))
     */
    public login(
         xDeviceId:string ,
         username:string ,
         password:string ,
         localeId:string ):Promise<ISwaggerInlineType540>{
        const params = {
            "username":username,
            "password":password,
            "localeId":localeId
        };
        return new Promise<ISwaggerInlineType540>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/authentication/login`)
            .query(params)
            .set("x-device-id",xDeviceId)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType540);
                }
            });
        });
    }
    /**
     * get user token
     * The **remoteLogin** endpoint returns user token that saved
     * from other server
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server Server
     */
    public getRemoteLoginUserToken(
         authorization:string ,
         server:string ):Promise<void>{
        const params = {
            "server":server
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/authentication/remote_login`)
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
     * send token to sever
     * The **sendToken** endpoint send token to the server in
     * query.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } server Server
     */
    public sendTokenToRemoteServer(
         authorization:string ,
         server:string ):Promise<void>{
        const params = {
            "server":server
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/authentication/send_token`)
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
     * Save remote token to DB
     * The **saveToken** endpoint save token from remote server.
     * @param { ISwaggerInlineType541 } token Token
     */
    public saveRemoteLoginToken(
         token:ISwaggerInlineType541 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/authentication/save_token`)
            .send(token)
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
     * Log out and revoke token
     * The **logout** endpoint revokes the given user's token,
     * ensuring requests made with it will no longer work.<br/>A
     * new token may be generated using the **login** endpoint.
     * @param { string } xDeviceId The device id.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } targetDevice Specific Device ID who's token to revoke. If not provided,
     *        the user's API token will be revoked.
     */
    public logout(
         xDeviceId:string ,
         authorization:string ,
         targetDevice:string ):Promise<void>{
        const params = {
            "targetDevice":targetDevice
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/authentication/logout`)
            .query(params)
            .set("x-device-id",xDeviceId)
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
     * Log out and revoke all user's tokens
     * The **logout all** endpoint revokes all if a user's
     * existing tokens, both for the API and all devices.
     * @param { string } xDeviceId The device id.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public logoutAll(
         xDeviceId:string ,
         authorization:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/authentication/logout_all`)
            .set("x-device-id",xDeviceId)
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
     * Revoke all tokens for multiple users
     * The **admin logout** endpoint allows admin users to revoke
     * all tokens of multiple users.
     * @param { string } xDeviceId The device id.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<string> } users User IDs who's tokens to revoke, separated by a comma (`,`)
     *        and without spaces
     */
    public logoutUsers(
         xDeviceId:string ,
         authorization:string ,
         users:Array<string> ):Promise<void>{
        const params = {
            "users":users
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/authentication/admin/logout`)
            .query(params)
            .set("x-device-id",xDeviceId)
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
     * Revoke API tokens for multiple users
     * The **admin delete tokens** endpoint allows admin users to
     * revoke all API tokens of multiple users, leaving the device
     * tokens intact.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } tokenType Token type to revoke
     * @param { Array<string> } users User IDs who's tokens to revoke, separated by a comma (`,`)
     *        and without spaces
     */
    public revokeTokens(
         authorization:string ,
         tokenType:string ,
         users:Array<string> ):Promise<void>{
        const params = {
            "users":users
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/authentication/admin/tokens/${encodeURIComponent(tokenType)}`)
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
     * Receive token for SAML authentication
     * The **login_saml_callback** endpoint receives passed SAML
     * credentials and returns an API token for subsequent
     * requests to the API.
     * @param { string } relayState The original URL that the user requested
     * @param { string } samlResponse Response from SAML identity provider with decoded user data
     */
    public samlLoginCallback(
         relayState:string ,
         samlResponse:string ):Promise<void>{
        const params = {
            "RelayState":relayState,
            "SAMLResponse":samlResponse
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/authentication/login_saml_callback`)
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
     * Get a list of trusted servers
     * The **get all servers access** endpoint returns a list of
     * trusted servers that can copy dashboards to your server.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public getAllServersAccess(
         authorization:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/authentication/server_access`)
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
     * Add a trusted server
     * The **add server access** endpoint add trusted server.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType542 } serverAccess The server object (in `JSON` notation) to be added to the
     *        Trusted Server list.
     */
    public addServerAccess(
         authorization:string ,
         serverAccess:ISwaggerInlineType542 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/authentication/server_access`)
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
     * Remove a trusted server's access
     * The **delete servers access** endpoint removes a trusted
     * server from the Trusted Server Access list.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the trusted server.
     */
    public deleteServerAccess(
         authorization:string ,
         id:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/authentication/server_access/${encodeURIComponent(id)}`)
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
     * Edit a trusted server
     * The **patch servers access** endpoint edits a trusted
     * server by its ID. You can revtrive the ID throught the
     * **get servers access** endpoint.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID if the trusted server.
     * @param { ISwaggerInlineType544 } serverAccess The server object (in `JSON` notation) to be edited in the
     *        Trusted Server list.
     */
    public editServerAccess(
         authorization:string ,
         id:string ,
         serverAccess:ISwaggerInlineType544 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/authentication/server_access/${encodeURIComponent(id)}`)
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



