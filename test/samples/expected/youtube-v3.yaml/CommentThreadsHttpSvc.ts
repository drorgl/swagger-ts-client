import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ICommentThreadListResponse,ICommentThread } from "./types";

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


export class CommentThreadsHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Returns a list of comment threads that match the API
     * request parameters.
     * @param { string } allThreadsRelatedToChannelId The allThreadsRelatedToChannelId parameter instructs the
     *        API to return all comment threads associated with the
     *        specified channel. The response can include comments about
     *        the channel or about the channel's videos.
     * @param { string } channelId The channelId parameter instructs the API to return comment
     *        threads containing comments about the specified channel.
     *        (The response will not include comments left on videos that
     *        the channel uploaded.)
     * @param { string } id The id parameter specifies a comma-separated list of
     *        comment thread IDs for the resources that should be
     *        retrieved.
     * @param { number } maxResults The maxResults parameter specifies the maximum number of
     *        items that should be returned in the result set.
     *        
     *        Note: This parameter is not supported for use in
     *        conjunction with the id parameter.
     * @param { string } moderationStatus Set this parameter to limit the returned comment threads to
     *        a particular moderation state.
     *        
     *        Note: This parameter is not supported for use in
     *        conjunction with the id parameter.
     * @param { string } order The order parameter specifies the order in which the API
     *        response should list comment threads. Valid values are: 
     *        - time - Comment threads are ordered by time. This is the
     *        default behavior.
     *        - relevance - Comment threads are ordered by
     *        relevance.Note: This parameter is not supported for use in
     *        conjunction with the id parameter.
     * @param { string } pageToken The pageToken parameter identifies a specific page in the
     *        result set that should be returned. In an API response, the
     *        nextPageToken property identifies the next page of the
     *        result that can be retrieved.
     *        
     *        Note: This parameter is not supported for use in
     *        conjunction with the id parameter.
     * @param { string } part The part parameter specifies a comma-separated list of one
     *        or more commentThread resource properties that the API
     *        response will include.
     * @param { string } searchTerms The searchTerms parameter instructs the API to limit the
     *        API response to only contain comments that contain the
     *        specified search terms.
     *        
     *        Note: This parameter is not supported for use in
     *        conjunction with the id parameter.
     * @param { string } textFormat Set this parameter's value to html or plainText to instruct
     *        the API to return the comments left by users in html
     *        formatted or in plain text.
     * @param { string } videoId The videoId parameter instructs the API to return comment
     *        threads associated with the specified video ID.
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
    public youtube_commentThreads_list(
         allThreadsRelatedToChannelId:string ,
         channelId:string ,
         id:string ,
         maxResults:number ,
         moderationStatus:string ,
         order:string ,
         pageToken:string ,
         part:string ,
         searchTerms:string ,
         textFormat:string ,
         videoId:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ICommentThreadListResponse>{
        const params = {
            "allThreadsRelatedToChannelId":allThreadsRelatedToChannelId,
            "channelId":channelId,
            "id":id,
            "maxResults":maxResults,
            "moderationStatus":moderationStatus,
            "order":order,
            "pageToken":pageToken,
            "part":part,
            "searchTerms":searchTerms,
            "textFormat":textFormat,
            "videoId":videoId,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<ICommentThreadListResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/commentThreads`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ICommentThreadListResponse);
                }
            });
        });
    }
    /**
     * Modifies the top-level comment in a comment thread.
     * @param { ICommentThread } body 
     * @param { string } part The part parameter specifies a comma-separated list of
     *        commentThread resource properties that the API response
     *        will include. You must at least include the snippet part in
     *        the parameter value since that part contains all of the
     *        properties that the API request can update.
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
    public youtube_commentThreads_update(
         body:ICommentThread ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ICommentThread>{
        const params = {
            "part":part,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<ICommentThread>((resolve, reject) => {
            superAgentRequest
            .put(this.baseUrl + `/commentThreads`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ICommentThread);
                }
            });
        });
    }
    /**
     * Creates a new top-level comment. To add a reply to an
     * existing comment, use the comments.insert method instead.
     * @param { ICommentThread } body 
     * @param { string } part The part parameter identifies the properties that the API
     *        response will include. Set the parameter value to snippet.
     *        The snippet part has a quota cost of 2 units.
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
    public youtube_commentThreads_insert(
         body:ICommentThread ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ICommentThread>{
        const params = {
            "part":part,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<ICommentThread>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/commentThreads`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ICommentThread);
                }
            });
        });
    }
}



