import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISearchListResponse } from "./types";

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


export class SearchHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Returns a collection of search results that match the query
     * parameters specified in the API request. By default, a
     * search result set identifies matching video, channel, and
     * playlist resources, but you can also configure queries to
     * only retrieve a specific type of resource.
     * @param { string } channelId The channelId parameter indicates that the API response
     *        should only contain resources created by the channel
     * @param { string } channelType The channelType parameter lets you restrict a search to a
     *        particular type of channel.
     * @param { string } eventType The eventType parameter restricts a search to broadcast
     *        events. If you specify a value for this parameter, you must
     *        also set the type parameter's value to video.
     * @param { boolean } forContentOwner Note: This parameter is intended exclusively for YouTube
     *        content partners.
     *        
     *        The forContentOwner parameter restricts the search to only
     *        retrieve resources owned by the content owner specified by
     *        the onBehalfOfContentOwner parameter. The user must be
     *        authenticated using a CMS account linked to the specified
     *        content owner and onBehalfOfContentOwner must be provided.
     * @param { boolean } forDeveloper The forDeveloper parameter restricts the search to only
     *        retrieve videos uploaded via the developer's application or
     *        website. The API server uses the request's authorization
     *        credentials to identify the developer. Therefore, a
     *        developer can restrict results to videos uploaded through
     *        the developer's own app or website but not to videos
     *        uploaded through other apps or sites.
     * @param { boolean } forMine The forMine parameter restricts the search to only retrieve
     *        videos owned by the authenticated user. If you set this
     *        parameter to true, then the type parameter's value must
     *        also be set to video.
     * @param { string } location The location parameter, in conjunction with the
     *        locationRadius parameter, defines a circular geographic
     *        area and also restricts a search to videos that specify, in
     *        their metadata, a geographic location that falls within
     *        that area. The parameter value is a string that specifies
     *        latitude/longitude coordinates e.g.
     *        (37.42307,-122.08427).
     *        
     *        
     *        - The location parameter value identifies the point at the
     *        center of the area.
     *        - The locationRadius parameter specifies the maximum
     *        distance that the location associated with a video can be
     *        from that point for the video to still be included in the
     *        search results.The API returns an error if your request
     *        specifies a value for the location parameter but does not
     *        also specify a value for the locationRadius parameter.
     * @param { string } locationRadius The locationRadius parameter, in conjunction with the
     *        location parameter, defines a circular geographic area.
     *        
     *        The parameter value must be a floating point number
     *        followed by a measurement unit. Valid measurement units are
     *        m, km, ft, and mi. For example, valid parameter values
     *        include 1500m, 5km, 10000ft, and 0.75mi. The API does not
     *        support locationRadius parameter values larger than 1000
     *        kilometers.
     *        
     *        Note: See the definition of the location parameter for more
     *        information.
     * @param { number } maxResults The maxResults parameter specifies the maximum number of
     *        items that should be returned in the result set.
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
     * @param { string } order The order parameter specifies the method that will be used
     *        to order resources in the API response.
     * @param { string } pageToken The pageToken parameter identifies a specific page in the
     *        result set that should be returned. In an API response, the
     *        nextPageToken and prevPageToken properties identify other
     *        pages that could be retrieved.
     * @param { string } part The part parameter specifies a comma-separated list of one
     *        or more search resource properties that the API response
     *        will include. Set the parameter value to snippet.
     * @param { string } publishedAfter The publishedAfter parameter indicates that the API
     *        response should only contain resources created after the
     *        specified time. The value is an RFC 3339 formatted
     *        date-time value (1970-01-01T00:00:00Z).
     * @param { string } publishedBefore The publishedBefore parameter indicates that the API
     *        response should only contain resources created before the
     *        specified time. The value is an RFC 3339 formatted
     *        date-time value (1970-01-01T00:00:00Z).
     * @param { string } q The q parameter specifies the query term to search for.
     *        
     *        Your request can also use the Boolean NOT (-) and OR (|)
     *        operators to exclude videos or to find videos that are
     *        associated with one of several search terms. For example,
     *        to search for videos matching either "boating" or
     *        "sailing", set the q parameter value to boating|sailing.
     *        Similarly, to search for videos matching either "boating"
     *        or "sailing" but not "fishing", set the q parameter value
     *        to boating|sailing -fishing. Note that the pipe character
     *        must be URL-escaped when it is sent in your API request.
     *        The URL-escaped value for the pipe character is %7C.
     * @param { string } regionCode The regionCode parameter instructs the API to return search
     *        results for the specified country. The parameter value is
     *        an ISO 3166-1 alpha-2 country code.
     * @param { string } relatedToVideoId The relatedToVideoId parameter retrieves a list of videos
     *        that are related to the video that the parameter value
     *        identifies. The parameter value must be set to a YouTube
     *        video ID and, if you are using this parameter, the type
     *        parameter must be set to video.
     * @param { string } relevanceLanguage The relevanceLanguage parameter instructs the API to return
     *        search results that are most relevant to the specified
     *        language. The parameter value is typically an ISO 639-1
     *        two-letter language code. However, you should use the
     *        values zh-Hans for simplified Chinese and zh-Hant for
     *        traditional Chinese. Please note that results in other
     *        languages will still be returned if they are highly
     *        relevant to the search query term.
     * @param { string } safeSearch The safeSearch parameter indicates whether the search
     *        results should include restricted content as well as
     *        standard content.
     * @param { string } topicId The topicId parameter indicates that the API response
     *        should only contain resources associated with the specified
     *        topic. The value identifies a Freebase topic ID.
     * @param { string } type The type parameter restricts a search query to only
     *        retrieve a particular type of resource. The value is a
     *        comma-separated list of resource types.
     * @param { string } videoCaption The videoCaption parameter indicates whether the API should
     *        filter video search results based on whether they have
     *        captions. If you specify a value for this parameter, you
     *        must also set the type parameter's value to video.
     * @param { string } videoCategoryId The videoCategoryId parameter filters video search results
     *        based on their category. If you specify a value for this
     *        parameter, you must also set the type parameter's value to
     *        video.
     * @param { string } videoDefinition The videoDefinition parameter lets you restrict a search to
     *        only include either high definition (HD) or standard
     *        definition (SD) videos. HD videos are available for
     *        playback in at least 720p, though higher resolutions, like
     *        1080p, might also be available. If you specify a value for
     *        this parameter, you must also set the type parameter's
     *        value to video.
     * @param { string } videoDimension The videoDimension parameter lets you restrict a search to
     *        only retrieve 2D or 3D videos. If you specify a value for
     *        this parameter, you must also set the type parameter's
     *        value to video.
     * @param { string } videoDuration The videoDuration parameter filters video search results
     *        based on their duration. If you specify a value for this
     *        parameter, you must also set the type parameter's value to
     *        video.
     * @param { string } videoEmbeddable The videoEmbeddable parameter lets you to restrict a search
     *        to only videos that can be embedded into a webpage. If you
     *        specify a value for this parameter, you must also set the
     *        type parameter's value to video.
     * @param { string } videoLicense The videoLicense parameter filters search results to only
     *        include videos with a particular license. YouTube lets
     *        video uploaders choose to attach either the Creative
     *        Commons license or the standard YouTube license to each of
     *        their videos. If you specify a value for this parameter,
     *        you must also set the type parameter's value to video.
     * @param { string } videoSyndicated The videoSyndicated parameter lets you to restrict a search
     *        to only videos that can be played outside youtube.com. If
     *        you specify a value for this parameter, you must also set
     *        the type parameter's value to video.
     * @param { string } videoType The videoType parameter lets you restrict a search to a
     *        particular type of videos. If you specify a value for this
     *        parameter, you must also set the type parameter's value to
     *        video.
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
    public youtube_search_list(
         channelId:string ,
         channelType:string ,
         eventType:string ,
         forContentOwner:boolean ,
         forDeveloper:boolean ,
         forMine:boolean ,
         location:string ,
         locationRadius:string ,
         maxResults:number ,
         onBehalfOfContentOwner:string ,
         order:string ,
         pageToken:string ,
         part:string ,
         publishedAfter:string ,
         publishedBefore:string ,
         q:string ,
         regionCode:string ,
         relatedToVideoId:string ,
         relevanceLanguage:string ,
         safeSearch:string ,
         topicId:string ,
         type:string ,
         videoCaption:string ,
         videoCategoryId:string ,
         videoDefinition:string ,
         videoDimension:string ,
         videoDuration:string ,
         videoEmbeddable:string ,
         videoLicense:string ,
         videoSyndicated:string ,
         videoType:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ISearchListResponse>{
        const params = {
            "channelId":channelId,
            "channelType":channelType,
            "eventType":eventType,
            "forContentOwner":forContentOwner,
            "forDeveloper":forDeveloper,
            "forMine":forMine,
            "location":location,
            "locationRadius":locationRadius,
            "maxResults":maxResults,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "order":order,
            "pageToken":pageToken,
            "part":part,
            "publishedAfter":publishedAfter,
            "publishedBefore":publishedBefore,
            "q":q,
            "regionCode":regionCode,
            "relatedToVideoId":relatedToVideoId,
            "relevanceLanguage":relevanceLanguage,
            "safeSearch":safeSearch,
            "topicId":topicId,
            "type":type,
            "videoCaption":videoCaption,
            "videoCategoryId":videoCategoryId,
            "videoDefinition":videoDefinition,
            "videoDimension":videoDimension,
            "videoDuration":videoDuration,
            "videoEmbeddable":videoEmbeddable,
            "videoLicense":videoLicense,
            "videoSyndicated":videoSyndicated,
            "videoType":videoType,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<ISearchListResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/search`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISearchListResponse);
                }
            });
        });
    }
}



