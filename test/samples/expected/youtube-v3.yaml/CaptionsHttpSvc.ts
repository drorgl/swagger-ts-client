import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ICaptionListResponse,ICaption } from "./types";

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


export class CaptionsHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Returns a list of caption tracks that are associated with a
     * specified video. Note that the API response does not
     * contain the actual captions and that the captions.download
     * method provides the ability to retrieve a caption track.
     * @param { string } id The id parameter specifies a comma-separated list of IDs
     *        that identify the caption resources that should be
     *        retrieved. Each ID must identify a caption track associated
     *        with the specified video.
     * @param { string } onBehalfOf ID of the Google+ Page for the channel that the request is
     *        on behalf of.
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
     * @param { string } part The part parameter specifies a comma-separated list of one
     *        or more caption resource parts that the API response will
     *        include. The part names that you can include in the
     *        parameter value are id and snippet.
     * @param { string } videoId The videoId parameter specifies the YouTube video ID of the
     *        video for which the API should return caption tracks.
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
    public youtube_captions_list(
         id:string ,
         onBehalfOf:string ,
         onBehalfOfContentOwner:string ,
         part:string ,
         videoId:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ICaptionListResponse>{
        const params = {
            "id":id,
            "onBehalfOf":onBehalfOf,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "part":part,
            "videoId":videoId,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<ICaptionListResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/captions`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ICaptionListResponse);
                }
            });
        });
    }
    /**
     * Updates a caption track. When updating a caption track, you
     * can change the track's draft status, upload a new caption
     * file for the track, or both.
     * @param { ICaption } body 
     * @param { string } onBehalfOf ID of the Google+ Page for the channel that the request is
     *        be on behalf of
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
     *        include. Set the property value to snippet if you are
     *        updating the track's draft status. Otherwise, set the
     *        property value to id.
     * @param { boolean } sync Note: The API server only processes the parameter value if
     *        the request contains an updated caption file.
     *        
     *        The sync parameter indicates whether YouTube should
     *        automatically synchronize the caption file with the audio
     *        track of the video. If you set the value to true, YouTube
     *        will automatically synchronize the caption track with the
     *        audio track.
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
    public youtube_captions_update(
         body:ICaption ,
         onBehalfOf:string ,
         onBehalfOfContentOwner:string ,
         part:string ,
         sync:boolean ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ICaption>{
        const params = {
            "onBehalfOf":onBehalfOf,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "part":part,
            "sync":sync,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<ICaption>((resolve, reject) => {
            superAgentRequest
            .put(this.baseUrl + `/captions`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ICaption);
                }
            });
        });
    }
    /**
     * Uploads a caption track.
     * @param { ICaption } body 
     * @param { string } onBehalfOf ID of the Google+ Page for the channel that the request is
     *        be on behalf of
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
     * @param { string } part The part parameter specifies the caption resource parts
     *        that the API response will include. Set the parameter value
     *        to snippet.
     * @param { boolean } sync The sync parameter indicates whether YouTube should
     *        automatically synchronize the caption file with the audio
     *        track of the video. If you set the value to true, YouTube
     *        will disregard any time codes that are in the uploaded
     *        caption file and generate new time codes for the captions.
     *        
     *        You should set the sync parameter to true if you are
     *        uploading a transcript, which has no time codes, or if you
     *        suspect the time codes in your file are incorrect and want
     *        YouTube to try to fix them.
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
    public youtube_captions_insert(
         body:ICaption ,
         onBehalfOf:string ,
         onBehalfOfContentOwner:string ,
         part:string ,
         sync:boolean ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ICaption>{
        const params = {
            "onBehalfOf":onBehalfOf,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "part":part,
            "sync":sync,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<ICaption>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/captions`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ICaption);
                }
            });
        });
    }
    /**
     * Deletes a specified caption track.
     * @param { string } id The id parameter identifies the caption track that is being
     *        deleted. The value is a caption track ID as identified by
     *        the id property in a caption resource.
     * @param { string } onBehalfOf ID of the Google+ Page for the channel that the request is
     *        be on behalf of
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
    public youtube_captions_delete(
         id:string ,
         onBehalfOf:string ,
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
            "onBehalfOf":onBehalfOf,
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
            .delete(this.baseUrl + `/captions`)
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
     * Downloads a caption track. The caption track is returned in
     * its original format unless the request specifies a value
     * for the tfmt parameter and in its original language unless
     * the request specifies a value for the tlang parameter.
     * @param { string } id The id parameter identifies the caption track that is being
     *        retrieved. The value is a caption track ID as identified by
     *        the id property in a caption resource.
     * @param { string } onBehalfOf ID of the Google+ Page for the channel that the request is
     *        be on behalf of
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
     * @param { string } tfmt The tfmt parameter specifies that the caption track should
     *        be returned in a specific format. If the parameter is not
     *        included in the request, the track is returned in its
     *        original format.
     * @param { string } tlang The tlang parameter specifies that the API response should
     *        return a translation of the specified caption track. The
     *        parameter value is an ISO 639-1 two-letter language code
     *        that identifies the desired caption language. The
     *        translation is generated by using machine translation, such
     *        as Google Translate.
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
    public youtube_captions_download(
         id:string ,
         onBehalfOf:string ,
         onBehalfOfContentOwner:string ,
         tfmt:string ,
         tlang:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<void>{
        const params = {
            "onBehalfOf":onBehalfOf,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "tfmt":tfmt,
            "tlang":tlang,
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
            .get(this.baseUrl + `/captions/${encodeURIComponent(id)}`)
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



