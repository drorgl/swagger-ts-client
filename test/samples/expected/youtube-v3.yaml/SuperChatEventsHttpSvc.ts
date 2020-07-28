import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISuperChatEventListResponse } from "./types";

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


export class SuperChatEventsHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Lists Super Chat events for a channel.
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
     * @param { number } maxResults The maxResults parameter specifies the maximum number of
     *        items that should be returned in the result set.
     * @param { string } pageToken The pageToken parameter identifies a specific page in the
     *        result set that should be returned. In an API response, the
     *        nextPageToken and prevPageToken properties identify other
     *        pages that could be retrieved.
     * @param { string } part The part parameter specifies the superChatEvent resource
     *        parts that the API response will include. Supported values
     *        are id and snippet.
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
    public youtube_superChatEvents_list(
         hl:string ,
         maxResults:number ,
         pageToken:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ISuperChatEventListResponse>{
        const params = {
            "hl":hl,
            "maxResults":maxResults,
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
        return new Promise<ISuperChatEventListResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/superChatEvents`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISuperChatEventListResponse);
                }
            });
        });
    }
}



