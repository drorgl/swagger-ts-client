import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IVideoListResponse,IVideo,IVideoGetRatingResponse,IVideoAbuseReport } from "./types";

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


export class VideosHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Returns a list of videos that match the API request
     * parameters.
     * @param { string } chart The chart parameter identifies the chart that you want to
     *        retrieve.
     * @param { string } hl The hl parameter instructs the API to retrieve localized
     *        resource metadata for a specific application language that
     *        the YouTube website supports. The parameter value must be a
     *        language code included in the list returned by the
     *        i18nLanguages.list method.
     *        
     *        If localized resource details are available in that
     *        language, the resource's snippet.localized object will
     *        contain the localized values. However, if localized details
     *        are not available, the snippet.localized object will
     *        contain resource details in the resource's default language.
     * @param { string } id The id parameter specifies a comma-separated list of the
     *        YouTube video ID(s) for the resource(s) that are being
     *        retrieved. In a video resource, the id property specifies
     *        the video's ID.
     * @param { string } locale DEPRECATED
     * @param { number } maxHeight The maxHeight parameter specifies a maximum height of the
     *        embedded player. If maxWidth is provided, maxHeight may not
     *        be reached in order to not violate the width request.
     * @param { number } maxResults The maxResults parameter specifies the maximum number of
     *        items that should be returned in the result set.
     *        
     *        Note: This parameter is supported for use in conjunction
     *        with the myRating and chart parameters, but it is not
     *        supported for use in conjunction with the id parameter.
     * @param { number } maxWidth The maxWidth parameter specifies a maximum width of the
     *        embedded player. If maxHeight is provided, maxWidth may not
     *        be reached in order to not violate the height request.
     * @param { string } myRating Set this parameter's value to like or dislike to instruct
     *        the API to only return videos liked or disliked by the
     *        authenticated user.
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
     *        
     *        Note: This parameter is supported for use in conjunction
     *        with the myRating and chart parameters, but it is not
     *        supported for use in conjunction with the id parameter.
     * @param { string } part The part parameter specifies a comma-separated list of one
     *        or more video resource properties that the API response
     *        will include.
     *        
     *        If the parameter identifies a property that contains child
     *        properties, the child properties will be included in the
     *        response. For example, in a video resource, the snippet
     *        property contains the channelId, title, description, tags,
     *        and categoryId properties. As such, if you set
     *        part=snippet, the API response will contain all of those
     *        properties.
     * @param { string } regionCode The regionCode parameter instructs the API to select a
     *        video chart available in the specified region. This
     *        parameter can only be used in conjunction with the chart
     *        parameter. The parameter value is an ISO 3166-1 alpha-2
     *        country code.
     * @param { string } videoCategoryId The videoCategoryId parameter identifies the video category
     *        for which the chart should be retrieved. This parameter can
     *        only be used in conjunction with the chart parameter. By
     *        default, charts are not restricted to a particular category.
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
    public youtube_videos_list(
         chart:string ,
         hl:string ,
         id:string ,
         locale:string ,
         maxHeight:number ,
         maxResults:number ,
         maxWidth:number ,
         myRating:string ,
         onBehalfOfContentOwner:string ,
         pageToken:string ,
         part:string ,
         regionCode:string ,
         videoCategoryId:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IVideoListResponse>{
        const params = {
            "chart":chart,
            "hl":hl,
            "id":id,
            "locale":locale,
            "maxHeight":maxHeight,
            "maxResults":maxResults,
            "maxWidth":maxWidth,
            "myRating":myRating,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "pageToken":pageToken,
            "part":part,
            "regionCode":regionCode,
            "videoCategoryId":videoCategoryId,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<IVideoListResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/videos`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IVideoListResponse);
                }
            });
        });
    }
    /**
     * Updates a video's metadata.
     * @param { IVideo } body 
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
     *        each individual channel. The actual CMS account that the
     *        user authenticates with must be linked to the specified
     *        YouTube content owner.
     * @param { string } part The part parameter serves two purposes in this operation.
     *        It identifies the properties that the write operation will
     *        set as well as the properties that the API response will
     *        include.
     *        
     *        Note that this method will override the existing values for
     *        all of the mutable properties that are contained in any
     *        parts that the parameter value specifies. For example, a
     *        video's privacy setting is contained in the status part. As
     *        such, if your request is updating a private video, and the
     *        request's part parameter value includes the status part,
     *        the video's privacy setting will be updated to whatever
     *        value the request body specifies. If the request body does
     *        not specify a value, the existing privacy setting will be
     *        removed and the video will revert to the default privacy
     *        setting.
     *        
     *        In addition, not all parts contain properties that can be
     *        set when inserting or updating a video. For example, the
     *        statistics object encapsulates statistics that YouTube
     *        calculates for a video and does not contain values that you
     *        can set or modify. If the parameter value specifies a part
     *        that does not contain mutable values, that part will still
     *        be included in the API response.
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
    public youtube_videos_update(
         body:IVideo ,
         onBehalfOfContentOwner:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IVideo>{
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
        return new Promise<IVideo>((resolve, reject) => {
            superAgentRequest
            .put(this.baseUrl + `/videos`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IVideo);
                }
            });
        });
    }
    /**
     * Uploads a video to YouTube and optionally sets the video's
     * metadata.
     * @param { boolean } autoLevels The autoLevels parameter indicates whether YouTube should
     *        automatically enhance the video's lighting and color.
     * @param { IVideo } body 
     * @param { boolean } notifySubscribers The notifySubscribers parameter indicates whether YouTube
     *        should send a notification about the new video to users who
     *        subscribe to the video's channel. A parameter value of True
     *        indicates that subscribers will be notified of newly
     *        uploaded videos. However, a channel owner who is uploading
     *        many videos might prefer to set the value to False to avoid
     *        sending a notification about each new video to the
     *        channel's subscribers.
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
     *        Note that not all parts contain properties that can be set
     *        when inserting or updating a video. For example, the
     *        statistics object encapsulates statistics that YouTube
     *        calculates for a video and does not contain values that you
     *        can set or modify. If the parameter value specifies a part
     *        that does not contain mutable values, that part will still
     *        be included in the API response.
     * @param { boolean } stabilize The stabilize parameter indicates whether YouTube should
     *        adjust the video to remove shaky camera motions.
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
    public youtube_videos_insert(
         autoLevels:boolean ,
         body:IVideo ,
         notifySubscribers:boolean ,
         onBehalfOfContentOwner:string ,
         onBehalfOfContentOwnerChannel:string ,
         part:string ,
         stabilize:boolean ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IVideo>{
        const params = {
            "autoLevels":autoLevels,
            "notifySubscribers":notifySubscribers,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "onBehalfOfContentOwnerChannel":onBehalfOfContentOwnerChannel,
            "part":part,
            "stabilize":stabilize,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<IVideo>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/videos`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IVideo);
                }
            });
        });
    }
    /**
     * Deletes a YouTube video.
     * @param { string } id The id parameter specifies the YouTube video ID for the
     *        resource that is being deleted. In a video resource, the id
     *        property specifies the video's ID.
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
     *        each individual channel. The actual CMS account that the
     *        user authenticates with must be linked to the specified
     *        YouTube content owner.
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
    public youtube_videos_delete(
         id:string ,
         onBehalfOfContentOwner:string ,
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
            .delete(this.baseUrl + `/videos`)
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
     * Retrieves the ratings that the authorized user gave to a
     * list of specified videos.
     * @param { string } id The id parameter specifies a comma-separated list of the
     *        YouTube video ID(s) for the resource(s) for which you are
     *        retrieving rating data. In a video resource, the id
     *        property specifies the video's ID.
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
    public youtube_videos_getRating(
         id:string ,
         onBehalfOfContentOwner:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IVideoGetRatingResponse>{
        const params = {
            "id":id,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<IVideoGetRatingResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/videos/getRating`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IVideoGetRatingResponse);
                }
            });
        });
    }
    /**
     * Add a like or dislike rating to a video or remove a rating
     * from a video.
     * @param { string } id The id parameter specifies the YouTube video ID of the
     *        video that is being rated or having its rating removed.
     * @param { string } rating Specifies the rating to record.
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
    public youtube_videos_rate(
         id:string ,
         rating:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<void>{
        const params = {
            "id":id,
            "rating":rating,
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
            .post(this.baseUrl + `/videos/rate`)
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
     * Report abuse for a video.
     * @param { IVideoAbuseReport } body 
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
    public youtube_videos_reportAbuse(
         body:IVideoAbuseReport ,
         onBehalfOfContentOwner:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<void>{
        const params = {
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
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
            .post(this.baseUrl + `/videos/reportAbuse`)
            .query(params)
            .send(body)
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



