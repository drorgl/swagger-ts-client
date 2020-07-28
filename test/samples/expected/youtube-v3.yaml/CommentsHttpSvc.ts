import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ICommentListResponse,IComment } from "./types";

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


export class CommentsHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Returns a list of comments that match the API request
     * parameters.
     * @param { string } id The id parameter specifies a comma-separated list of
     *        comment IDs for the resources that are being retrieved. In
     *        a comment resource, the id property specifies the comment's
     *        ID.
     * @param { number } maxResults The maxResults parameter specifies the maximum number of
     *        items that should be returned in the result set.
     *        
     *        Note: This parameter is not supported for use in
     *        conjunction with the id parameter.
     * @param { string } pageToken The pageToken parameter identifies a specific page in the
     *        result set that should be returned. In an API response, the
     *        nextPageToken property identifies the next page of the
     *        result that can be retrieved.
     *        
     *        Note: This parameter is not supported for use in
     *        conjunction with the id parameter.
     * @param { string } parentId The parentId parameter specifies the ID of the comment for
     *        which replies should be retrieved.
     *        
     *        Note: YouTube currently supports replies only for top-level
     *        comments. However, replies to replies may be supported in
     *        the future.
     * @param { string } part The part parameter specifies a comma-separated list of one
     *        or more comment resource properties that the API response
     *        will include.
     * @param { string } textFormat This parameter indicates whether the API should return
     *        comments formatted as HTML or as plain text.
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
    public youtube_comments_list(
         id:string ,
         maxResults:number ,
         pageToken:string ,
         parentId:string ,
         part:string ,
         textFormat:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<ICommentListResponse>{
        const params = {
            "id":id,
            "maxResults":maxResults,
            "pageToken":pageToken,
            "parentId":parentId,
            "part":part,
            "textFormat":textFormat,
            "alt":alt,
            "fields":fields,
            "key":key,
            "oauthToken":oauthToken,
            "prettyPrint":prettyPrint,
            "quotaUser":quotaUser,
            "userIp":userIp
        };
        return new Promise<ICommentListResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/comments`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ICommentListResponse);
                }
            });
        });
    }
    /**
     * Modifies a comment.
     * @param { IComment } body 
     * @param { string } part The part parameter identifies the properties that the API
     *        response will include. You must at least include the
     *        snippet part in the parameter value since that part
     *        contains all of the properties that the API request can
     *        update.
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
    public youtube_comments_update(
         body:IComment ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IComment>{
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
        return new Promise<IComment>((resolve, reject) => {
            superAgentRequest
            .put(this.baseUrl + `/comments`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IComment);
                }
            });
        });
    }
    /**
     * Creates a reply to an existing comment. Note: To create a
     * top-level comment, use the commentThreads.insert method.
     * @param { IComment } body 
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
    public youtube_comments_insert(
         body:IComment ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IComment>{
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
        return new Promise<IComment>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/comments`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IComment);
                }
            });
        });
    }
    /**
     * Deletes a comment.
     * @param { string } id The id parameter specifies the comment ID for the resource
     *        that is being deleted.
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
    public youtube_comments_delete(
         id:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<void>{
        const params = {
            "id":id,
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
            .delete(this.baseUrl + `/comments`)
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
     * Expresses the caller's opinion that one or more comments
     * should be flagged as spam.
     * @param { string } id The id parameter specifies a comma-separated list of IDs of
     *        comments that the caller believes should be classified as
     *        spam.
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
    public youtube_comments_markAsSpam(
         id:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<void>{
        const params = {
            "id":id,
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
            .post(this.baseUrl + `/comments/markAsSpam`)
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
     * Sets the moderation status of one or more comments. The API
     * request must be authorized by the owner of the channel or
     * video associated with the comments.
     * @param { boolean } banAuthor The banAuthor parameter lets you indicate that you want to
     *        automatically reject any additional comments written by the
     *        comment's author. Set the parameter value to true to ban
     *        the author.
     *        
     *        Note: This parameter is only valid if the moderationStatus
     *        parameter is also set to rejected.
     * @param { string } id The id parameter specifies a comma-separated list of IDs
     *        that identify the comments for which you are updating the
     *        moderation status.
     * @param { string } moderationStatus Identifies the new moderation status of the specified
     *        comments.
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
    public youtube_comments_setModerationStatus(
         banAuthor:boolean ,
         id:string ,
         moderationStatus:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<void>{
        const params = {
            "banAuthor":banAuthor,
            "id":id,
            "moderationStatus":moderationStatus,
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
            .post(this.baseUrl + `/comments/setModerationStatus`)
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



