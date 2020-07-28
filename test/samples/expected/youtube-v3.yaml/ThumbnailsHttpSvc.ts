import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IThumbnailSetResponse } from "./types";

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


export class ThumbnailsHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Uploads a custom video thumbnail to YouTube and sets it for
     * a video.
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
     * @param { string } videoId The videoId parameter specifies a YouTube video ID for
     *        which the custom video thumbnail is being provided.
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
    public youtube_thumbnails_set(
         onBehalfOfContentOwner:string ,
         videoId:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IThumbnailSetResponse>{
        const params = {
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "videoId":videoId,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<IThumbnailSetResponse>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/thumbnails/set`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IThumbnailSetResponse);
                }
            });
        });
    }
}



