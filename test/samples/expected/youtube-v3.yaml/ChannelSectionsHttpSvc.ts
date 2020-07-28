import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IChannelSectionListResponse,IChannelSection } from "./types";

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


export class ChannelSectionsHttpSvc {
    constructor(private baseUrl:string  = "https://www.googleapis.com/youtube/v3"){

    }

    /**
     * Returns channelSection resources that match the API request
     * criteria.
     * @param { string } channelId The channelId parameter specifies a YouTube channel ID. The
     *        API will only return that channel's channelSections.
     * @param { string } hl The hl parameter indicates that the snippet.localized
     *        property values in the returned channelSection resources
     *        should be in the specified language if localized values for
     *        that language are available. For example, if the API
     *        request specifies hl=de, the snippet.localized properties
     *        in the API response will contain German titles if German
     *        titles are available. Channel owners can provide localized
     *        channel section titles using either the
     *        channelSections.insert or channelSections.update method.
     * @param { string } id The id parameter specifies a comma-separated list of the
     *        YouTube channelSection ID(s) for the resource(s) that are
     *        being retrieved. In a channelSection resource, the id
     *        property specifies the YouTube channelSection ID.
     * @param { boolean } mine Set this parameter's value to true to retrieve a feed of
     *        the authenticated user's channelSections.
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
     * @param { string } part The part parameter specifies a comma-separated list of one
     *        or more channelSection resource properties that the API
     *        response will include. The part names that you can include
     *        in the parameter value are id, snippet, and
     *        contentDetails.
     *        
     *        If the parameter identifies a property that contains child
     *        properties, the child properties will be included in the
     *        response. For example, in a channelSection resource, the
     *        snippet property contains other properties, such as a
     *        display title for the channelSection. If you set
     *        part=snippet, the API response will also contain all of
     *        those nested properties.
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
    public youtube_channelSections_list(
         channelId:string ,
         hl:string ,
         id:string ,
         mine:boolean ,
         onBehalfOfContentOwner:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IChannelSectionListResponse>{
        const params = {
            "channelId":channelId,
            "hl":hl,
            "id":id,
            "mine":mine,
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
        return new Promise<IChannelSectionListResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/channelSections`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IChannelSectionListResponse);
                }
            });
        });
    }
    /**
     * Update a channelSection.
     * @param { IChannelSection } body 
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
     * @param { string } part The part parameter serves two purposes in this operation.
     *        It identifies the properties that the write operation will
     *        set as well as the properties that the API response will
     *        include.
     *        
     *        The part names that you can include in the parameter value
     *        are snippet and contentDetails.
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
    public youtube_channelSections_update(
         body:IChannelSection ,
         onBehalfOfContentOwner:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IChannelSection>{
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
        return new Promise<IChannelSection>((resolve, reject) => {
            superAgentRequest
            .put(this.baseUrl + `/channelSections`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IChannelSection);
                }
            });
        });
    }
    /**
     * Adds a channelSection for the authenticated user's channel.
     * @param { IChannelSection } body 
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
     *        The part names that you can include in the parameter value
     *        are snippet and contentDetails.
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
    public youtube_channelSections_insert(
         body:IChannelSection ,
         onBehalfOfContentOwner:string ,
         onBehalfOfContentOwnerChannel:string ,
         part:string ,
         alt:string ,
         fields:string ,
         key:string ,
         oauthToken:string ,
         prettyPrint:boolean ,
         quotaUser:string ,
         userIp:string ):Promise<IChannelSection>{
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
        return new Promise<IChannelSection>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/channelSections`)
            .query(params)
            .send(body)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IChannelSection);
                }
            });
        });
    }
    /**
     * Deletes a channelSection.
     * @param { string } id The id parameter specifies the YouTube channelSection ID
     *        for the resource that is being deleted. In a channelSection
     *        resource, the id property specifies the YouTube
     *        channelSection ID.
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
    public youtube_channelSections_delete(
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
            .delete(this.baseUrl + `/channelSections`)
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



