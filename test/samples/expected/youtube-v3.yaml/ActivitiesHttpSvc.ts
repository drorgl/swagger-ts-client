import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IActivityListResponse,IActivity } from "./types";

/*
    YouTube Data v3
    Supports core YouTube features, such as uploading videos,
    creating and managing playlists, searching for content, and
    much more.
    
    Contact:
    Google
    
    https://google.com

    License:
    Creative Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/

    Terms of Service:
    https://developers.google.com/terms/

    
*/


export class ActivitiesHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Returns a list of channel activity events that match the
     * request criteria. For example, you can retrieve events
     * associated with a particular channel, events associated
     * with the user's subscriptions and Google+ friends, or the
     * YouTube home page feed, which is customized for each user.
     * @param { string } channelId The channelId parameter specifies a unique YouTube channel
     *        ID. The API will then return a list of that channel's
     *        activities.
     * @param { boolean } home Set this parameter's value to true to retrieve the activity
     *        feed that displays on the YouTube home page for the
     *        currently authenticated user.
     * @param { number } maxResults The maxResults parameter specifies the maximum number of
     *        items that should be returned in the result set.
     * @param { boolean } mine Set this parameter's value to true to retrieve a feed of
     *        the authenticated user's activities.
     * @param { string } pageToken The pageToken parameter identifies a specific page in the
     *        result set that should be returned. In an API response, the
     *        nextPageToken and prevPageToken properties identify other
     *        pages that could be retrieved.
     * @param { string } part The part parameter specifies a comma-separated list of one
     *        or more activity resource properties that the API response
     *        will include.
     *        
     *        If the parameter identifies a property that contains child
     *        properties, the child properties will be included in the
     *        response. For example, in an activity resource, the snippet
     *        property contains other properties that identify the type
     *        of activity, a display title for the activity, and so
     *        forth. If you set part=snippet, the API response will also
     *        contain all of those nested properties.
     * @param { string } publishedAfter The publishedAfter parameter specifies the earliest date
     *        and time that an activity could have occurred for that
     *        activity to be included in the API response. If the
     *        parameter value specifies a day, but not a time, then any
     *        activities that occurred that day will be included in the
     *        result set. The value is specified in ISO 8601
     *        (YYYY-MM-DDThh:mm:ss.sZ) format.
     * @param { string } publishedBefore The publishedBefore parameter specifies the date and time
     *        before which an activity must have occurred for that
     *        activity to be included in the API response. If the
     *        parameter value specifies a day, but not a time, then any
     *        activities that occurred that day will be excluded from the
     *        result set. The value is specified in ISO 8601
     *        (YYYY-MM-DDThh:mm:ss.sZ) format.
     * @param { string } regionCode The regionCode parameter instructs the API to return
     *        results for the specified country. The parameter value is
     *        an ISO 3166-1 alpha-2 country code. YouTube uses this value
     *        when the authorized user's previous activity on YouTube
     *        does not provide enough information to generate the
     *        activity feed.
     * @param { string } alt Data format for the response.
     * @param { string } fields Selector specifying which fields to include in a partial
     *        response.
     * @param { string } key API key. Your API key identifies your project and provides
     *        you with API access, quota, and reports. Required unless
     *        you provide an OAuth 2.0 token.
     * @param { string } oauthToken OAuth 2.0 token for the current user.
     * @param { boolean } prettyPrint Returns response with indentations and line breaks.
     * @param { string } quotaUser An opaque string that represents a user for quota purposes.
     *        Must not exceed 40 characters.
     * @param { string } userIp Deprecated. Please use quotaUser instead.
     */
    public youtube_activities_list(
         channelId:string ,
         home:boolean ,
         maxResults:number ,
         mine:boolean ,
         pageToken:string ,
         part:string ,
         publishedAfter:string ,
         publishedBefore:string ,
         regionCode:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IActivityListResponse>{
        const params = {
            "channelId":channelId,
            "home":home,
            "maxResults":maxResults,
            "mine":mine,
            "pageToken":pageToken,
            "part":part,
            "publishedAfter":publishedAfter,
            "publishedBefore":publishedBefore,
            "regionCode":regionCode,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauth_token":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<IActivityListResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/activities`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IActivityListResponse);
                }
            });
        });
    }
    /**
     * Posts a bulletin for a specific channel. (The user
     * submitting the request must be authorized to act on the
     * channel's behalf.)
     * 
     * Note: Even though an activity resource can contain
     * information about actions like a user rating a video or
     * marking a video as a favorite, you need to use other API
     * methods to generate those activity resources. For example,
     * you would use the API's videos.rate() method to rate a
     * video and the playlistItems.insert() method to mark a video
     * as a favorite.
     * @param { IActivity } body 
     * @param { string } part The part parameter serves two purposes in this operation.
     *        It identifies the properties that the write operation will
     *        set as well as the properties that the API response will
     *        include.
     * @param { string } alt Data format for the response.
     * @param { string } fields Selector specifying which fields to include in a partial
     *        response.
     * @param { string } key API key. Your API key identifies your project and provides
     *        you with API access, quota, and reports. Required unless
     *        you provide an OAuth 2.0 token.
     * @param { string } oauthToken OAuth 2.0 token for the current user.
     * @param { boolean } prettyPrint Returns response with indentations and line breaks.
     * @param { string } quotaUser An opaque string that represents a user for quota purposes.
     *        Must not exceed 40 characters.
     * @param { string } userIp Deprecated. Please use quotaUser instead.
     */
    public youtube_activities_insert(
         body:IActivity ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IActivity>{
        const params = {
            "part":part,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<IActivity>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/activities`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IActivity);
                }
            });
        });
    }
}



