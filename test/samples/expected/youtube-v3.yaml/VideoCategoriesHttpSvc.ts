import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IVideoCategoryListResponse } from "./types";

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


export class VideoCategoriesHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Returns a list of categories that can be associated with
     * YouTube videos.
     * @param { string } hl The hl parameter specifies the language that should be used
     *        for text values in the API response.
     * @param { string } id The id parameter specifies a comma-separated list of video
     *        category IDs for the resources that you are retrieving.
     * @param { string } part The part parameter specifies the videoCategory resource
     *        properties that the API response will include. Set the
     *        parameter value to snippet.
     * @param { string } regionCode The regionCode parameter instructs the API to return the
     *        list of video categories available in the specified
     *        country. The parameter value is an ISO 3166-1 alpha-2
     *        country code.
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
    public youtube_videoCategories_list(
         hl:string ,
         id:string ,
         part:string ,
         regionCode:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IVideoCategoryListResponse>{
        const params = {
            "hl":hl,
            "id":id,
            "part":part,
            "regionCode":regionCode,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<IVideoCategoryListResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/videoCategories`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IVideoCategoryListResponse);
                }
            });
        });
    }
}



