import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType646,ISwaggerInlineType647,ISwaggerInlineType648,ISwaggerInlineType649,ISwaggerInlineType650,ISwaggerInlineType651,ISwaggerInlineType652,ISwaggerInlineType653,ISwaggerInlineType654,ISwaggerInlineType655,ISwaggerInlineType660,ISwaggerInlineType665,ISwaggerInlineType670,ISwaggerInlineType672,ISwaggerInlineType674,ISwaggerInlineType676,ISwaggerInlineType678,ISwaggerInlineType680,ISwaggerInlineType681,ISwaggerInlineType682,ISwaggerInlineType683,ISwaggerInlineType684 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class SettingsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Return email server settings
     * The **email server settings** used for Email Server
     * settings managing.
     * 
     */
    public getEmailServer(
        ):Promise<ISwaggerInlineType646>{
        return new Promise<ISwaggerInlineType646>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/settings/email_server`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType646);
                }
            });
        });
    }
    /**
     * Add email server settings
     * The **email server settings** used for Email Server
     * settings managing.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType648 } emailServer Object with the settings of email server
     */
    public addEmailServer(
         authorization:string ,
         emailServer:ISwaggerInlineType648 ):Promise<ISwaggerInlineType647>{
        return new Promise<ISwaggerInlineType647>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/settings/email_server`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType647);
                }
            });
        });
    }
    /**
     * Delete email server settings
     * The **email server settings** used for Email Server
     * settings managing.
     * 
     */
    public deleteEmailServer(
        ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/settings/email_server`)
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
     * Update email server settings
     * The **email server settings** used for Email Server
     * settings managing.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType650 } emailServer Object with the settings of email server
     */
    public updateEmailServer(
         authorization:string ,
         emailServer:ISwaggerInlineType650 ):Promise<ISwaggerInlineType649>{
        return new Promise<ISwaggerInlineType649>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/settings/email_server`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType649);
                }
            });
        });
    }
    /**
     * Return public configuration settings
     * The **Public Configuration** used for getting public system
     * settings.
     * 
     */
    public getPublicSettings(
        ):Promise<ISwaggerInlineType651>{
        return new Promise<ISwaggerInlineType651>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/settings/public_settings`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType651);
                }
            });
        });
    }
    /**
     * Returns sso settings.
     * The **sso settings** used for single sign on configuration.
     */
    public getSsoSettings(
        ):Promise<ISwaggerInlineType652>{
        return new Promise<ISwaggerInlineType652>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/settings/sso`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType652);
                }
            });
        });
    }
    /**
     * Set sso settings.
     * The **sso settings** used for single sign on configuration.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType654 } sso Object with the sso settings.
     */
    public setSsoSettings(
         authorization:string ,
         sso:ISwaggerInlineType654 ):Promise<ISwaggerInlineType653>{
        return new Promise<ISwaggerInlineType653>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/settings/sso`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType653);
                }
            });
        });
    }
    /**
     * Returns system configuration settings.
     * The **system settings** used for system settings
     * configuration.
     * 
     */
    public getSystemSettings(
        ):Promise<ISwaggerInlineType655>{
        return new Promise<ISwaggerInlineType655>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/settings/system`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType655);
                }
            });
        });
    }
    /**
     * Adds or updates system settings.
     * The **system settings** used for system settings
     * configuration.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType665 } emailServer Object with the system settings.
     */
    public setSystemSettings(
         authorization:string ,
         emailServer:ISwaggerInlineType665 ):Promise<ISwaggerInlineType660>{
        return new Promise<ISwaggerInlineType660>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/settings/system`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType660);
                }
            });
        });
    }
    /**
     * Returns globalization settings
     * Returns locale settings, including the set locale, and
     * whether autodetect is enabled.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public getGlobalization(
         authorization:string ):Promise<ISwaggerInlineType670>{
        return new Promise<ISwaggerInlineType670>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/settings/globalization`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType670);
                }
            });
        });
    }
    /**
     * Update globalization settings
     * You can update the locale or select whether the
     * localization selection is automatically detected or not.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType674 } globalization Object with the globalization settings.
     */
    public update(
         authorization:string ,
         globalization:ISwaggerInlineType674 ):Promise<ISwaggerInlineType672>{
        return new Promise<ISwaggerInlineType672>((resolve, reject) => {
            superAgentRequest
            .put(this.baseUrl + `/settings/globalization`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType672);
                }
            });
        });
    }
    /**
     * Add globalization settings
     * You can change the locale or select whether the
     * localization selection is automatically detected or not.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType678 } globalization Object with the globalization settings.
     */
    public add(
         authorization:string ,
         globalization:ISwaggerInlineType678 ):Promise<ISwaggerInlineType676>{
        return new Promise<ISwaggerInlineType676>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/settings/globalization`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType676);
                }
            });
        });
    }
    /**
     * Delete globalization settings
     * Deletes globalization settings in your server.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public removeGlobalization(
         authorization:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/settings/globalization`)
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
     * Returns pulse settings.
     * The **pulse settings** used for store pulse page
     * configuration.
     */
    public getPulseSettings(
        ):Promise<ISwaggerInlineType680>{
        return new Promise<ISwaggerInlineType680>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/settings/pulse`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType680);
                }
            });
        });
    }
    /**
     * Set pulse settings.
     * The **pulse settings** used for store pulse page
     * configuration.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType682 } pulse Object with the pulse settings.
     */
    public setPulseSettings(
         authorization:string ,
         pulse:ISwaggerInlineType682 ):Promise<ISwaggerInlineType681>{
        return new Promise<ISwaggerInlineType681>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/settings/pulse`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType681);
                }
            });
        });
    }
    /**
     * Delete pulse settings.
     * The **pulse settings** used for store pulse page
     * configuration.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public removePulseSettings(
         authorization:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/settings/pulse`)
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
     * Patch pulse settings.
     * The **pulse settings** used for store pulse page
     * configuration.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType684 } pulse Object with the pulse settings.
     */
    public patch(
         authorization:string ,
         pulse:ISwaggerInlineType684 ):Promise<ISwaggerInlineType683>{
        return new Promise<ISwaggerInlineType683>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/settings/pulse`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType683);
                }
            });
        });
    }
}



