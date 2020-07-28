import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ILiveBroadcastListResponse,ILiveBroadcast } from "./types";

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


export class LiveBroadcastsHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Returns a list of YouTube broadcasts that match the API
     * request parameters.
     * @param { string } broadcastStatus The broadcastStatus parameter filters the API response to
     *        only include broadcasts with the specified status.
     * @param { string } broadcastType The broadcastType parameter filters the API response to
     *        only include broadcasts with the specified type. This is
     *        only compatible with the mine filter for now.
     * @param { string } id The id parameter specifies a comma-separated list of
     *        YouTube broadcast IDs that identify the broadcasts being
     *        retrieved. In a liveBroadcast resource, the id property
     *        specifies the broadcast's ID.
     * @param { number } maxResults The maxResults parameter specifies the maximum number of
     *        items that should be returned in the result set.
     * @param { boolean } mine The mine parameter can be used to instruct the API to only
     *        return broadcasts owned by the authenticated user. Set the
     *        parameter value to true to only retrieve your own
     *        broadcasts.
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
     *        or more liveBroadcast resource properties that the API
     *        response will include. The part names that you can include
     *        in the parameter value are id, snippet, contentDetails, and
     *        status.
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
    public youtube_liveBroadcasts_list(
         broadcastStatus:string ,
         broadcastType:string ,
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
         userIp:string ):Promise<ILiveBroadcastListResponse>{
        const params = {
            "broadcastStatus":broadcastStatus,
            "broadcastType":broadcastType,
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
        return new Promise<ILiveBroadcastListResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/liveBroadcasts`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ILiveBroadcastListResponse);
                }
            });
        });
    }
    /**
     * Updates a broadcast. For example, you could modify the
     * broadcast settings defined in the liveBroadcast resource's
     * contentDetails object.
     * @param { ILiveBroadcast } body 
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
     *        value are id, snippet, contentDetails, and status.
     *        
     *        Note that this method will override the existing values for
     *        all of the mutable properties that are contained in any
     *        parts that the parameter value specifies. For example, a
     *        broadcast's privacy status is defined in the status part.
     *        As such, if your request is updating a private or unlisted
     *        broadcast, and the request's part parameter value includes
     *        the status part, the broadcast's privacy setting will be
     *        updated to whatever value the request body specifies. If
     *        the request body does not specify a value, the existing
     *        privacy setting will be removed and the broadcast will
     *        revert to the default privacy setting.
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
    public youtube_liveBroadcasts_update(
         body:ILiveBroadcast ,
         onBehalfOfContentOwner:string ,
         onBehalfOfContentOwnerChannel:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ILiveBroadcast>{
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
        return new Promise<ILiveBroadcast>((resolve, reject) => {
            superAgentRequest
            .put(this.baseUrl + `/liveBroadcasts`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ILiveBroadcast);
                }
            });
        });
    }
    /**
     * Creates a broadcast.
     * @param { ILiveBroadcast } body 
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
     *        value are id, snippet, contentDetails, and status.
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
    public youtube_liveBroadcasts_insert(
         body:ILiveBroadcast ,
         onBehalfOfContentOwner:string ,
         onBehalfOfContentOwnerChannel:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ILiveBroadcast>{
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
        return new Promise<ILiveBroadcast>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/liveBroadcasts`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ILiveBroadcast);
                }
            });
        });
    }
    /**
     * Deletes a broadcast.
     * @param { string } id The id parameter specifies the YouTube live broadcast ID
     *        for the resource that is being deleted.
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
    public youtube_liveBroadcasts_delete(
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
            .delete(this.baseUrl + `/liveBroadcasts`)
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
     * Binds a YouTube broadcast to a stream or removes an
     * existing binding between a broadcast and a stream. A
     * broadcast can only be bound to one video stream, though a
     * video stream may be bound to more than one broadcast.
     * @param { string } id The id parameter specifies the unique ID of the broadcast
     *        that is being bound to a video stream.
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
     * @param { string } part The part parameter specifies a comma-separated list of one
     *        or more liveBroadcast resource properties that the API
     *        response will include. The part names that you can include
     *        in the parameter value are id, snippet, contentDetails, and
     *        status.
     * @param { string } streamId The streamId parameter specifies the unique ID of the video
     *        stream that is being bound to a broadcast. If this
     *        parameter is omitted, the API will remove any existing
     *        binding between the broadcast and a video stream.
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
    public youtube_liveBroadcasts_bind(
         id:string ,
         onBehalfOfContentOwner:string ,
         onBehalfOfContentOwnerChannel:string ,
         part:string ,
         streamId:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ILiveBroadcast>{
        const params = {
            "id":id,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "onBehalfOfContentOwnerChannel":onBehalfOfContentOwnerChannel,
            "part":part,
            "streamId":streamId,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<ILiveBroadcast>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/liveBroadcasts/bind`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ILiveBroadcast);
                }
            });
        });
    }
    /**
     * Controls the settings for a slate that can be displayed in
     * the broadcast stream.
     * @param { boolean } displaySlate The displaySlate parameter specifies whether the slate is
     *        being enabled or disabled.
     * @param { string } id The id parameter specifies the YouTube live broadcast ID
     *        that uniquely identifies the broadcast in which the slate
     *        is being updated.
     * @param { string } offsetTimeMs The offsetTimeMs parameter specifies a positive time offset
     *        when the specified slate change will occur. The value is
     *        measured in milliseconds from the beginning of the
     *        broadcast's monitor stream, which is the time that the
     *        testing phase for the broadcast began. Even though it is
     *        specified in milliseconds, the value is actually an
     *        approximation, and YouTube completes the requested action
     *        as closely as possible to that time.
     *        
     *        If you do not specify a value for this parameter, then
     *        YouTube performs the action as soon as possible. See the
     *        Getting started guide for more details.
     *        
     *        Important: You should only specify a value for this
     *        parameter if your broadcast stream is delayed.
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
     * @param { string } part The part parameter specifies a comma-separated list of one
     *        or more liveBroadcast resource properties that the API
     *        response will include. The part names that you can include
     *        in the parameter value are id, snippet, contentDetails, and
     *        status.
     * @param { string } walltime The walltime parameter specifies the wall clock time at
     *        which the specified slate change will occur. The value is
     *        specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sssZ) format.
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
    public youtube_liveBroadcasts_control(
         displaySlate:boolean ,
         id:string ,
         offsetTimeMs:string ,
         onBehalfOfContentOwner:string ,
         onBehalfOfContentOwnerChannel:string ,
         part:string ,
         walltime:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ILiveBroadcast>{
        const params = {
            "displaySlate":displaySlate,
            "id":id,
            "offsetTimeMs":offsetTimeMs,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "onBehalfOfContentOwnerChannel":onBehalfOfContentOwnerChannel,
            "part":part,
            "walltime":walltime,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<ILiveBroadcast>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/liveBroadcasts/control`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ILiveBroadcast);
                }
            });
        });
    }
    /**
     * Changes the status of a YouTube live broadcast and
     * initiates any processes associated with the new status. For
     * example, when you transition a broadcast's status to
     * testing, YouTube starts to transmit video to that
     * broadcast's monitor stream. Before calling this method, you
     * should confirm that the value of the status.streamStatus
     * property for the stream bound to your broadcast is active.
     * @param { string } broadcastStatus The broadcastStatus parameter identifies the state to which
     *        the broadcast is changing. Note that to transition a
     *        broadcast to either the testing or live state, the
     *        status.streamStatus must be active for the stream that the
     *        broadcast is bound to.
     * @param { string } id The id parameter specifies the unique ID of the broadcast
     *        that is transitioning to another status.
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
     * @param { string } part The part parameter specifies a comma-separated list of one
     *        or more liveBroadcast resource properties that the API
     *        response will include. The part names that you can include
     *        in the parameter value are id, snippet, contentDetails, and
     *        status.
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
    public youtube_liveBroadcasts_transition(
         broadcastStatus:string ,
         id:string ,
         onBehalfOfContentOwner:string ,
         onBehalfOfContentOwnerChannel:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ILiveBroadcast>{
        const params = {
            "broadcastStatus":broadcastStatus,
            "id":id,
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
        return new Promise<ILiveBroadcast>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/liveBroadcasts/transition`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ILiveBroadcast);
                }
            });
        });
    }
}



