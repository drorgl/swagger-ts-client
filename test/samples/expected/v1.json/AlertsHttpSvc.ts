import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType569,ISwaggerInlineType582,ISwaggerInlineType595,ISwaggerInlineType608,ISwaggerInlineType621,ISwaggerInlineType630,ISwaggerInlineType631,ISwaggerInlineType644 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class AlertsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get alerts
     * The **get alert** endpoint provides access to a specified
     * user's alert in their stored format as `JSON` objects.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<string> } ids Array of alert IDs to get separated by a comma (`,`) and
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
    public getAlerts(
         authorization:string ,
         ids:Array<string> ,
         fields:string ,
         sort:string ,
         skip:number ,
         limit:number ,
         expand:string ):Promise<ISwaggerInlineType569>{
        const params = {
            "ids":ids,
            "fields":fields,
            "sort":sort,
            "skip":skip,
            "limit":limit,
            "expand":expand
        };
        return new Promise<ISwaggerInlineType569>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/alerts`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType569);
                }
            });
        });
    }
    /**
     * Add a new alert
     * The **add alert** endpoint receives an alert object and
     * adds it to the system's alerts.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType582 } alert Basic alert object to be added.
     */
    public addAlert(
         authorization:string ,
         alert:ISwaggerInlineType582 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/alerts`)
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
     * Get a specific alert
     * The **get alert by ID** endpoint returns a specific alert
     * object by ID.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the alert to get
     */
    public getAlertById(
         authorization:string ,
         id:string ):Promise<ISwaggerInlineType595>{
        return new Promise<ISwaggerInlineType595>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/alerts/${encodeURIComponent(id)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType595);
                }
            });
        });
    }
    /**
     * Delete an alert
     * The **delete alert** endpoint deletes an alert and all of
     * it's related events.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the alert to be deleted
     */
    public deleteAlert(
         authorization:string ,
         id:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/alerts/${encodeURIComponent(id)}`)
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
     * Update an alert
     * The **update alert** endpoint performs a partial update on
     * the alert of the defined ID, updating the fields in the
     * alert object defined in the body. The updatable fields are
     * `name`, `enabled`, `message`, `parties`, `action`,
     * `context`.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the alert to be updated
     * @param { ISwaggerInlineType621 } alert The partial alert object whose field will be updated
     */
    public updateUserAlert(
         authorization:string ,
         id:string ,
         alert:ISwaggerInlineType621 ):Promise<ISwaggerInlineType608>{
        return new Promise<ISwaggerInlineType608>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/alerts/${encodeURIComponent(id)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType608);
                }
            });
        });
    }
    /**
     * Get the amount of alerts for a user
     * The **alerts count** endpoint returns the amount of alerts
     * for a user if the user is the owner of the alerts.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public getAlertsCount(
         authorization:string ):Promise<ISwaggerInlineType630>{
        return new Promise<ISwaggerInlineType630>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/alerts/count`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType630);
                }
            });
        });
    }
    /**
     * Update alert's disabled users
     * The **update receive notification** endpoint removes or
     * adds a specific user to be notified when the alert is being
     * executed.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the alert to be updated
     * @param { ISwaggerInlineType644 } setReceiveNotification The user and parameter Whether to disable or enable the user
     */
    public updateReceiveNotification(
         authorization:string ,
         id:string ,
         setReceiveNotification:ISwaggerInlineType644 ):Promise<ISwaggerInlineType631>{
        return new Promise<ISwaggerInlineType631>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/alerts/${encodeURIComponent(id)}/setReceiveNotification`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType631);
                }
            });
        });
    }
}



