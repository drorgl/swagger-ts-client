import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ILiveStreamListResponse,ILiveStream } from "./types";

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


export class LiveStreamsHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Returns a list of video streams that match the API request
     * parameters.
     * @param { string } id The id parameter specifies a comma-separated list of
     *        YouTube stream IDs that identify the streams being
     *        retrieved. In a liveStream resource, the id property
     *        specifies the stream's ID.
     * @param { number } maxResults The maxResults parameter specifies the maximum number of
     *        items that should be returned in the result set.
     * @param { boolean } mine The mine parameter can be used to instruct the API to only
     *        return streams owned by the authenticated user. Set the
     *        parameter value to true to only retrieve your own streams.
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
     * @param { string } pageToken The pageToken parameter identifies a specific page in the
     *        result set that should be returned. In an API response, the
     *        nextPageToken and prevPageToken properties identify other
     *        pages that could be retrieved.
     * @param { string } part The part parameter specifies a comma-separated list of one
     *        or more liveStream resource properties that the API
     *        response will include. The part names that you can include
     *        in the parameter value are id, snippet, cdn, and status.
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
    public youtube_liveStreams_list(
         id:string ,
         maxResults:number ,
         mine:boolean ,
         onBehalfOfContentOwner:string ,
         onBehalfOfContentOwnerChannel:string ,
         pageToken:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ILiveStreamListResponse>{
        const params = {
            "id":id,
            "maxResults":maxResults,
            "mine":mine,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "onBehalfOfContentOwnerChannel":onBehalfOfContentOwnerChannel,
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
        return new Promise<ILiveStreamListResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/liveStreams`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ILiveStreamListResponse);
                }
            });
        });
    }
    /**
     * Updates a video stream. If the properties that you want to
     * change cannot be updated, then you need to create a new
     * stream with the proper settings.
     * @param { ILiveStream } body 
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
     * @param { string } part The part parameter serves two purposes in this operation.
     *        It identifies the properties that the write operation will
     *        set as well as the properties that the API response will
     *        include.
     *        
     *        The part properties that you can include in the parameter
     *        value are id, snippet, cdn, and status.
     *        
     *        Note that this method will override the existing values for
     *        all of the mutable properties that are contained in any
     *        parts that the parameter value specifies. If the request
     *        body does not specify a value for a mutable property, the
     *        existing value for that property will be removed.
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
    public youtube_liveStreams_update(
         body:ILiveStream ,
         onBehalfOfContentOwner:string ,
         onBehalfOfContentOwnerChannel:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ILiveStream>{
        const params = {
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "onBehalfOfContentOwnerChannel":onBehalfOfContentOwnerChannel,
            "part":part,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<ILiveStream>((resolve, reject) => {
            superAgentRequest
            .put(this.baseUrl + `/liveStreams`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ILiveStream);
                }
            });
        });
    }
    /**
     * Creates a video stream. The stream enables you to send your
     * video to YouTube, which can then broadcast the video to
     * your audience.
     * @param { ILiveStream } body 
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
     * @param { string } part The part parameter serves two purposes in this operation.
     *        It identifies the properties that the write operation will
     *        set as well as the properties that the API response will
     *        include.
     *        
     *        The part properties that you can include in the parameter
     *        value are id, snippet, cdn, and status.
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
    public youtube_liveStreams_insert(
         body:ILiveStream ,
         onBehalfOfContentOwner:string ,
         onBehalfOfContentOwnerChannel:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ILiveStream>{
        const params = {
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "onBehalfOfContentOwnerChannel":onBehalfOfContentOwnerChannel,
            "part":part,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<ILiveStream>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/liveStreams`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ILiveStream);
                }
            });
        });
    }
    /**
     * Deletes a video stream.
     * @param { string } id The id parameter specifies the YouTube live stream ID for
     *        the resource that is being deleted.
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
    public youtube_liveStreams_delete(
         id:string ,
         onBehalfOfContentOwner:string ,
         onBehalfOfContentOwnerChannel:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<void>{
        const params = {
            "id":id,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "onBehalfOfContentOwnerChannel":onBehalfOfContentOwnerChannel,
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
            .delete(this.baseUrl + `/liveStreams`)
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



