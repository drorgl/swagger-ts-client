import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IChannelBannerResource } from "./types";

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


export class ChannelBannersHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Uploads a channel banner image to YouTube. This method
     * represents the first two steps in a three-step process to
     * update the banner image for a channel:
     * 
     * - Call the channelBanners.insert method to upload the
     * binary image data to YouTube. The image must have a 16:9
     * aspect ratio and be at least 2120x1192 pixels.
     * - Extract the url property's value from the response that
     * the API returns for step 1.
     * - Call the channels.update method to update the channel's
     * branding settings. Set the
     * brandingSettings.image.bannerExternalUrl property's value
     * to the URL obtained in step 2.
     * @param { IChannelBannerResource } body 
     * @param { string } channelId The channelId parameter identifies the YouTube channel to
     *        which the banner is uploaded. The channelId parameter was
     *        introduced as a required parameter in May 2017. As this was
     *        a backward-incompatible change, channelBanners.insert
     *        requests that do not specify this parameter will not return
     *        an error until six months have passed from the time that
     *        the parameter was introduced. Please see the API Terms of
     *        Service for the official policy regarding backward
     *        incompatible changes and the API revision history for the
     *        exact date that the parameter was introduced.
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
    public youtube_channelBanners_insert(
         body:IChannelBannerResource ,
         channelId:string ,
         onBehalfOfContentOwner:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IChannelBannerResource>{
        const params = {
            "channelId":channelId,
            "onBehalfOfContentOwner":onBehalfOfContentOwner,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<IChannelBannerResource>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/channelBanners/insert`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IChannelBannerResource);
                }
            });
        });
    }
}



