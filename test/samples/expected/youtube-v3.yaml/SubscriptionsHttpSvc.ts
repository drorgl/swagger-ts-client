import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISubscriptionListResponse,ISubscription } from "./types";

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


export class SubscriptionsHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Returns subscription resources that match the API request
     * criteria.
     * @param { string } channelId The channelId parameter specifies a YouTube channel ID. The
     *        API will only return that channel's subscriptions.
     * @param { string } forChannelId The forChannelId parameter specifies a comma-separated list
     *        of channel IDs. The API response will then only contain
     *        subscriptions matching those channels.
     * @param { string } id The id parameter specifies a comma-separated list of the
     *        YouTube subscription ID(s) for the resource(s) that are
     *        being retrieved. In a subscription resource, the id
     *        property specifies the YouTube subscription ID.
     * @param { number } maxResults The maxResults parameter specifies the maximum number of
     *        items that should be returned in the result set.
     * @param { boolean } mine Set this parameter's value to true to retrieve a feed of
     *        the authenticated user's subscriptions.
     * @param { boolean } myRecentSubscribers Set this parameter's value to true to retrieve a feed of
     *        the subscribers of the authenticated user in reverse
     *        chronological order (newest first).
     * @param { boolean } mySubscribers Set this parameter's value to true to retrieve a feed of
     *        the subscribers of the authenticated user in no particular
     *        order.
     * @param { string } onBehalfOfContentOwner Note: This parameter is intended exclusively for YouTube
     *        content partners.
     *        
     *        The onBehalfOfContentOwner parameter indicates that the
     *        request's authorization credentials identify a YouTube CMS
     *        user who is acting on behalf of the content owner specified
     *        in the parameter value. This parameter is intended for
     *        YouTube content partners that own and manage many different
     *        YouTube channels. It allows content owners to authenticate
     *        once and get access to all their video and channel data,
     *        without having to provide authentication credentials for
     *        each individual channel. The CMS account that the user
     *        authenticates with must be linked to the specified YouTube
     *        content owner.
     * @param { string } onBehalfOfContentOwnerChannel This parameter can only be used in a properly authorized
     *        request. Note: This parameter is intended exclusively for
     *        YouTube content partners.
     *        
     *        The onBehalfOfContentOwnerChannel parameter specifies the
     *        YouTube channel ID of the channel to which a video is being
     *        added. This parameter is required when a request specifies
     *        a value for the onBehalfOfContentOwner parameter, and it
     *        can only be used in conjunction with that parameter. In
     *        addition, the request must be authorized using a CMS
     *        account that is linked to the content owner that the
     *        onBehalfOfContentOwner parameter specifies. Finally, the
     *        channel that the onBehalfOfContentOwnerChannel parameter
     *        value specifies must be linked to the content owner that
     *        the onBehalfOfContentOwner parameter specifies.
     *        
     *        This parameter is intended for YouTube content partners
     *        that own and manage many different YouTube channels. It
     *        allows content owners to authenticate once and perform
     *        actions on behalf of the channel specified in the parameter
     *        value, without having to provide authentication credentials
     *        for each separate channel.
     * @param { string } order The order parameter specifies the method that will be used
     *        to sort resources in the API response.
     * @param { string } pageToken The pageToken parameter identifies a specific page in the
     *        result set that should be returned. In an API response, the
     *        nextPageToken and prevPageToken properties identify other
     *        pages that could be retrieved.
     * @param { string } part The part parameter specifies a comma-separated list of one
     *        or more subscription resource properties that the API
     *        response will include.
     *        
     *        If the parameter identifies a property that contains child
     *        properties, the child properties will be included in the
     *        response. For example, in a subscription resource, the
     *        snippet property contains other properties, such as a
     *        display title for the subscription. If you set
     *        part=snippet, the API response will also contain all of
     *        those nested properties.
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
    public youtube_subscriptions_list(
         channelId:string ,
         forChannelId:string ,
         id:string ,
         maxResults:number ,
         mine:boolean ,
         myRecentSubscribers:boolean ,
         mySubscribers:boolean ,
         onBehalfOfContentOwner:string ,
         onBehalfOfContentOwnerChannel:string ,
         order:string ,
         pageToken:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ISubscriptionListResponse>{
        const params = {
            "channelId":channelId,
            "forChannelId":forChannelId,
            "id":id,
            "maxResults":maxResults,
            "mine":mine,
            "myRecentSubscribers":myRecentSubscribers,
            "mySubscribers":mySubscribers,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "onBehalfOfContentOwnerChannel":onBehalfOfContentOwnerChannel,
            "order":order,
            "pageToken":pageToken,
            "part":part,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<ISubscriptionListResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/subscriptions`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISubscriptionListResponse);
                }
            });
        });
    }
    /**
     * Adds a subscription for the authenticated user's channel.
     * @param { ISubscription } body 
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
    public youtube_subscriptions_insert(
         body:ISubscription ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ISubscription>{
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
        return new Promise<ISubscription>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/subscriptions`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISubscription);
                }
            });
        });
    }
    /**
     * Deletes a subscription.
     * @param { string } id The id parameter specifies the YouTube subscription ID for
     *        the resource that is being deleted. In a subscription
     *        resource, the id property specifies the YouTube
     *        subscription ID.
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
    public youtube_subscriptions_delete(
         id:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<void>{
        const params = {
            "id":id,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/subscriptions`)
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
}



