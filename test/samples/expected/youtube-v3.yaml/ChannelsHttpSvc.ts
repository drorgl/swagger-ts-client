import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IChannelListResponse,IChannel } from "./types";

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


export class ChannelsHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Returns a collection of zero or more channel resources that
     * match the request criteria.
     * @param { string } categoryId The categoryId parameter specifies a YouTube guide
     *        category, thereby requesting YouTube channels associated
     *        with that category.
     * @param { string } forUsername The forUsername parameter specifies a YouTube username,
     *        thereby requesting the channel associated with that
     *        username.
     * @param { string } hl The hl parameter should be used for filter out the
     *        properties that are not in the given language. Used for the
     *        brandingSettings part.
     * @param { string } id The id parameter specifies a comma-separated list of the
     *        YouTube channel ID(s) for the resource(s) that are being
     *        retrieved. In a channel resource, the id property specifies
     *        the channel's YouTube channel ID.
     * @param { boolean } managedByMe Note: This parameter is intended exclusively for YouTube
     *        content partners.
     *        
     *        Set this parameter's value to true to instruct the API to
     *        only return channels managed by the content owner that the
     *        onBehalfOfContentOwner parameter specifies. The user must
     *        be authenticated as a CMS account linked to the specified
     *        content owner and onBehalfOfContentOwner must be provided.
     * @param { number } maxResults The maxResults parameter specifies the maximum number of
     *        items that should be returned in the result set.
     * @param { boolean } mine Set this parameter's value to true to instruct the API to
     *        only return channels owned by the authenticated user.
     * @param { boolean } mySubscribers Use the subscriptions.list method and its mySubscribers
     *        parameter to retrieve a list of subscribers to the
     *        authenticated user's channel.
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
     * @param { string } pageToken The pageToken parameter identifies a specific page in the
     *        result set that should be returned. In an API response, the
     *        nextPageToken and prevPageToken properties identify other
     *        pages that could be retrieved.
     * @param { string } part The part parameter specifies a comma-separated list of one
     *        or more channel resource properties that the API response
     *        will include.
     *        
     *        If the parameter identifies a property that contains child
     *        properties, the child properties will be included in the
     *        response. For example, in a channel resource, the
     *        contentDetails property contains other properties, such as
     *        the uploads properties. As such, if you set
     *        part=contentDetails, the API response will also contain all
     *        of those nested properties.
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
    public youtube_channels_list(
         categoryId:string ,
         forUsername:string ,
         hl:string ,
         id:string ,
         managedByMe:boolean ,
         maxResults:number ,
         mine:boolean ,
         mySubscribers:boolean ,
         onBehalfOfContentOwner:string ,
         pageToken:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IChannelListResponse>{
        const params = {
            "categoryId":categoryId,
            "forUsername":forUsername,
            "hl":hl,
            "id":id,
            "managedByMe":managedByMe,
            "maxResults":maxResults,
            "mine":mine,
            "mySubscribers":mySubscribers,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
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
        return new Promise<IChannelListResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/channels`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IChannelListResponse);
                }
            });
        });
    }
    /**
     * Updates a channel's metadata. Note that this method
     * currently only supports updates to the channel resource's
     * brandingSettings and invideoPromotion objects and their
     * child properties.
     * @param { IChannel } body 
     * @param { string } onBehalfOfContentOwner The onBehalfOfContentOwner parameter indicates that the
     *        authenticated user is acting on behalf of the content owner
     *        specified in the parameter value. This parameter is
     *        intended for YouTube content partners that own and manage
     *        many different YouTube channels. It allows content owners
     *        to authenticate once and get access to all their video and
     *        channel data, without having to provide authentication
     *        credentials for each individual channel. The actual CMS
     *        account that the user authenticates with needs to be linked
     *        to the specified YouTube content owner.
     * @param { string } part The part parameter serves two purposes in this operation.
     *        It identifies the properties that the write operation will
     *        set as well as the properties that the API response will
     *        include.
     *        
     *        The API currently only allows the parameter value to be set
     *        to either brandingSettings or invideoPromotion. (You cannot
     *        update both of those parts with a single request.)
     *        
     *        Note that this method overrides the existing values for all
     *        of the mutable properties that are contained in any parts
     *        that the parameter value specifies.
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
    public youtube_channels_update(
         body:IChannel ,
         onBehalfOfContentOwner:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IChannel>{
        const params = {
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "part":part,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<IChannel>((resolve, reject) => {
            superAgentRequest
            .put(this.baseUrl + `/channels`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IChannel);
                }
            });
        });
    }
}



