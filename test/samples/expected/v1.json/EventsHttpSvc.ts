import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType559,ISwaggerInlineType562,ISwaggerInlineType565,ISwaggerInlineType568 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class EventsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get an array of user's events
     * The **events** endpoint receives event properties that are
     * filtered by (date from, date to, has seen, is hidden) and
     * returns an array of events that according to the defined
     * filters for a user.
     * <br/><br/>The expandable field for the event object is
     * `alert`.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<string> } alertIds Array of alert ids to filter by, separated by a comma (`,`)
     *        and without spaces
     * @param { Date } dateFrom The date/time from which the events begin. (ISO format)
     * @param { boolean } seen Event state filter. `true` indicates the event has been
     *        seen by the user, `false` indicates the event has not been
     *        seen.
     * @param { boolean } hide Event state filter. `true` indicates the event was hidden
     *        from the user, `false` indicates the event displayed to the
     *        user.
     * @param { boolean } interest Event state filter. `true` indicates the user is intrested
     *        in the event as a notification, `false` indicates the user
     *        is not intrested in the event as a notification.
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
    public getEvents(
         authorization:string ,
         alertIds:Array<string> ,
         dateFrom:Date ,
         seen:boolean ,
         hide:boolean ,
         interest:boolean ,
         fields:string ,
         sort:string ,
         skip:number ,
         limit:number ,
         expand:string ):Promise<Array<ISwaggerInlineType559>>{
        const params = {
            "alertIds":alertIds,
            "dateFrom":dateFrom,
            "seen":seen,
            "hide":hide,
            "interest":interest,
            "fields":fields,
            "sort":sort,
            "skip":skip,
            "limit":limit,
            "expand":expand
        };
        return new Promise<Array<ISwaggerInlineType559>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/events`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType559>);
                }
            });
        });
    }
    /**
     * Update bulk of events
     * The **update bulk of events** endpoint performs a partial
     * update on the events according to the query, updating the
     * fields in the event object defined in the body.
     * The updatable fields are `seen` and `hide`.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType562 } updateQuery query - fetching
     */
    public updateUserEventBulk(
         authorization:string ,
         updateQuery:ISwaggerInlineType562 ):Promise<number>{
        return new Promise<number>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/events`)
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
     * Update an event
     * The **update event** endpoint performs a partial update on
     * the event of the defined ID, updating the fields in the
     * event object defined in the body.
     * The updatable fields are `seen` and `hide`.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the event to be updated
     * @param { ISwaggerInlineType568 } event The partial event object whose field will be updated
     */
    public updateUserEvent(
         authorization:string ,
         id:string ,
         event:ISwaggerInlineType568 ):Promise<ISwaggerInlineType565>{
        return new Promise<ISwaggerInlineType565>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/events/${encodeURIComponent(id)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType565);
                }
            });
        });
    }
    /**
     * Get a number of a user's events
     * The **events count** endpoint returns the amount of events
     * for a user filtered according by parameters such as
     * date/time, has seen, and is hidden.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Date } dateFrom The date/time from which the event count begins. (ISO
     *        format)
     * @param { boolean } seen Event state filter. `true` indicates the event has been
     *        seen by the user, `false` indicates the event has not been
     *        seen.
     * @param { boolean } hide Event state filter. `true` indicates the event was hidden
     *        from the user, `false` indicates the event displayed to the
     *        user.
     * @param { boolean } interest Event state filter. `true` indicates the user is intrested
     *        in the event as a notification, `false` indicates the user
     *        is not intrested in the event as a notification.
     */
    public getEventsCount(
         authorization:string ,
         dateFrom:Date ,
         seen:boolean ,
         hide:boolean ,
         interest:boolean ):Promise<number>{
        const params = {
            "dateFrom":dateFrom,
            "seen":seen,
            "hide":hide,
            "interest":interest
        };
        return new Promise<number>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/events/count`)
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
}



