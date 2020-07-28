import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType281,ISwaggerInlineType283,ISwaggerInlineType285,InonsenseUser,IadUser,ISwaggerInlineType287,ISwaggerInlineType289,ISwaggerInlineType290,ISwaggerInlineType292,ISwaggerInlineType294,ISwaggerInlineType296,ISwaggerInlineType298,ISwaggerInlineType300,ISwaggerInlineType301,ISwaggerInlineType303 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class UsersHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get users
     * The **get users** endpoint returns a list of users with
     * their details.
     * <br/>Results can be filtered by parameters such as username
     * and email.
     * <br/><br/>The expandable fields for the user object are
     * `groups`, `adgroups` and `role`.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } userName Username to filter by
     * @param { string } email Email to filter by
     * @param { string } firstName First name to filter by
     * @param { string } lastName Last name to filter by
     * @param { string } roleId Role ID to filter by
     * @param { string } groupId Group ID to filter by
     * @param { boolean } active User state to filter by - `true` for active users, `false`
     *        for inactive users
     * @param { string } origin User origin to filter by - `ad` for active directory or
     *        `nonsense`
     * @param { Array<string> } ids Array of user IDs to get, separated by a comma (`,`) and
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
    public getUsers(
         authorization:string ,
         userName:string ,
         email:string ,
         firstName:string ,
         lastName:string ,
         roleId:string ,
         groupId:string ,
         active:boolean ,
         origin:string ,
         ids:Array<string> ,
         fields:string ,
         sort:string ,
         skip:number ,
         limit:number ,
         expand:string ):Promise<Array<ISwaggerInlineType281>>{
        const params = {
            "userName":userName,
            "email":email,
            "firstName":firstName,
            "lastName":lastName,
            "roleId":roleId,
            "groupId":groupId,
            "active":active,
            "origin":origin,
            "ids":ids,
            "fields":fields,
            "sort":sort,
            "skip":skip,
            "limit":limit,
            "expand":expand
        };
        return new Promise<Array<ISwaggerInlineType281>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/users`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType281>);
                }
            });
        });
    }
    /**
     * Add a new user
     * The *add user* endpoint receives a new user object and
     * creates that user in nonsense, returning the created
     * object.
     * <br/>If a user with the same username or email exists, it
     * will return an error.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType283 } user Basic user object (in `JSON` notation) to be added
     */
    public addUser(
         authorization:string ,
         user:ISwaggerInlineType283 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/users`)
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
     * Add a new Active Directory user
     * The **add Active Directory user** endpoint receives an
     * Active Directory user object, retrieves the user's details
     * from Active Directory and adds it to the application.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType285 } adUser Active Directory user object to be added
     */
    public addAdUser(
         authorization:string ,
         adUser:ISwaggerInlineType285 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/users/ad`)
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
     * Add several users at once
     * The **bulk add** endpoint allows adding multiple users at
     * once, by receiving an array of user objects whose structure
     * is alike to the single **add user** endpoint.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<InonsenseUser> } users A collection of basic user objects (in `JSON` notation) to
     *        be added
     */
    public addUsers(
         authorization:string ,
         users:Array<InonsenseUser> ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/users/bulk`)
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
     * Delete users
     * The *delete users* endpoint receives users' ids and deletes
     * these users in nonsense.
     * <br/>If a user with the specified id is not exists, it will
     * return an error.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<string> } ids Array of user IDs to get, separated by a comma (`,`) and
     *        without spaces
     */
    public deleteUsers(
         authorization:string ,
         ids:Array<string> ):Promise<void>{
        const params = {
            "ids":ids
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/users/bulk`)
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
     * Bulk add Active Directory users
     * The **bulk add Active Directory user** endpoint receives an
     * array of Active Directory user objects, retrieves the
     * user's details from Active Directory and adds it to the
     * application.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<IadUser> } adUsers Array of Active Directory user objects to be added
     */
    public addAdUsers(
         authorization:string ,
         adUsers:Array<IadUser> ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/users/ad/bulk`)
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
     * Update user's preferences, for example, localeId or language
     * The **update user preferences** endpoint changes
     * preferences (localeId, language, etc) for the current user.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType289 } newUserPreferences Fields for update in the user preferences
     */
    public updateUserPreferences(
         authorization:string ,
         newUserPreferences:ISwaggerInlineType289 ):Promise<ISwaggerInlineType287>{
        return new Promise<ISwaggerInlineType287>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/users/preferences`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType287);
                }
            });
        });
    }
    /**
     * Update user's ui settings, for example, show welcome
     * notification
     * The **update user ui settings** endpoint saves ui settings
     * chosen by the user itself.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { any } newUserUiSettings Fields for update in the user ui settings
     */
    public updateUserUiSettings(
         authorization:string ,
         newUserUiSettings:any ):Promise<ISwaggerInlineType290>{
        return new Promise<ISwaggerInlineType290>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/users/uiSettings`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType290);
                }
            });
        });
    }
    /**
     * Reset user's ui settings
     * The *delete user's ui settings* endpoint receives a user id
     * and reset that user's ui settings.
     * <br/>If a user with the specified id is not exists, it will
     * return an error.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the user to reset it's ui settings
     */
    public resetUiSettings(
         authorization:string ,
         id:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/users/${encodeURIComponent(id)}/uiSettings`)
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
     * Get a specific user
     * The **get user by ID** endpoint retrieves a specific user
     * object corresponding to the provided ID.<br/><br/>The
     * expandable fields for the user object are `groups`,
     * `adgroups` and `role`.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the user to get
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } expand List of fields that should be expanded (substitures their
     *        IDs with actual objects). May be nested using the
     *        `resource.subResource` format
     */
    public getUser(
         authorization:string ,
         id:string ,
         fields:string ,
         expand:string ):Promise<ISwaggerInlineType292>{
        const params = {
            "fields":fields,
            "expand":expand
        };
        return new Promise<ISwaggerInlineType292>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/users/${encodeURIComponent(id)}`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType292);
                }
            });
        });
    }
    /**
     * Delete a user
     * The *delete user* endpoint receives a user id and deletes
     * that user in nonsense, returning the deleted object.
     * <br/>If a user with the specified id is not exists, it will
     * return an error.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the user to delete
     */
    public deleteUser(
         authorization:string ,
         id:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/users/${encodeURIComponent(id)}`)
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
     * Update a user
     * The *update user* endpoint receives a user id and what
     * fields to update, returning the updated object.
     * <br/>If a user with the specified id is not exists, it will
     * return an error.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the user to update
     * @param { ISwaggerInlineType296 } user Partial user object (in `JSON` notation) containing the
     *        fields to update
     */
    public updateUser(
         authorization:string ,
         id:string ,
         user:ISwaggerInlineType296 ):Promise<ISwaggerInlineType294>{
        return new Promise<ISwaggerInlineType294>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/users/${encodeURIComponent(id)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType294);
                }
            });
        });
    }
    /**
     * Register a mobile device and token for a user
     * Register a mobile device and token for a user
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the user to register the device for
     * @param { ISwaggerInlineType300 } device Device object (in `JSON` notation) containing the ids
     */
    public registerDevice(
         authorization:string ,
         id:string ,
         device:ISwaggerInlineType300 ):Promise<ISwaggerInlineType298>{
        return new Promise<ISwaggerInlineType298>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/users/${encodeURIComponent(id)}/registerDevice`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType298);
                }
            });
        });
    }
    /**
     * Unregister a mobile device from a user
     * Unregister a mobile device from a user
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the user to unregister the device for
     * @param { ISwaggerInlineType303 } device Device object (in `JSON` notation) containing the ids
     */
    public unregisterDevice(
         authorization:string ,
         id:string ,
         device:ISwaggerInlineType303 ):Promise<ISwaggerInlineType301>{
        return new Promise<ISwaggerInlineType301>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/users/${encodeURIComponent(id)}/unregisterDevice`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType301);
                }
            });
        });
    }
}



