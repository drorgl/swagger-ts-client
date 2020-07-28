import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType802,ISwaggerInlineType803,ISwaggerInlineType804,ISwaggerInlineType805,ISwaggerInlineType806,ISwaggerInlineType807,ISwaggerInlineType808 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class LdapDomainsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get LDAP domains
     * The **get LDAP domains** endpoint returns a list of
     * ldapDomains with their details.
     * <br/>Results can be filtered by parameters such as name and
     * enabled.
     * <br/><br/>The expandable field for the LDAP domain object
     * is `users`.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } name name to filter the LDAP domains returned by
     * @param { boolean } enabled Filter LDAP domains according to their status enabled or
     *        disabled
     * @param { Array<string> } ids Array of LDAP domains IDs to get, separated by a comma
     *        (`,`) and without spaces
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } sort Field by which the results should be sorted. Ascending by
     *        default, descending if prefixed by `-`
     * @param { number } skip Number of results to skip from the start of the data set.
     *        skip is to be used with the `limit` parameter for paging
     * @param { number } limit How many results should be returned. limit is to be used
     *        with the `skip` parameter for paging
     * @param { string } expand List of fields that should be expanded (substitures their
     *        IDs with actual objects). May be nested using the
     *        `resource.subResource` format
     */
    public getLdapDomains(
         authorization:string ,
         name:string ,
         enabled:boolean ,
         ids:Array<string> ,
         fields:string ,
         sort:string ,
         skip:number ,
         limit:number ,
         expand:string ):Promise<Array<ISwaggerInlineType802>>{
        const params = {
            "name":name,
            "enabled":enabled,
            "ids":ids,
            "fields":fields,
            "sort":sort,
            "skip":skip,
            "limit":limit,
            "expand":expand
        };
        return new Promise<Array<ISwaggerInlineType802>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/ldap_domains`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType802>);
                }
            });
        });
    }
    /**
     * Add a new LDAP Domain
     * The *add LDAP Domain* endpoint receives a new LDAP Domain
     * object and creates that domain in nonsense, returning the
     * created object.
     * <br/>If a domain with the same name or baseDN exists,
     * nonsense returns an error.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType803 } ldapDomain Basic LDAP domain object (in `JSON` notation) to be added
     */
    public addLdapDomain(
         authorization:string ,
         ldapDomain:ISwaggerInlineType803 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/ldap_domains`)
            .set("authorization",authorization)
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
     * Get a specific LDAP domain
     * The **get LDAP domain by ID** endpoint retrieves a specific
     * LDAP domain object corresponding to the provided
     * ID.<br/><br/>The expandable fields for the LDAP domain
     * object is `users`.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the LDAP domain to get
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } expand List of fields that should be expanded (substitures their
     *        IDs with actual objects). May be nested using the
     *        `resource.subResource` format
     */
    public getLdapDomain(
         authorization:string ,
         id:string ,
         fields:string ,
         expand:string ):Promise<ISwaggerInlineType804>{
        const params = {
            "fields":fields,
            "expand":expand
        };
        return new Promise<ISwaggerInlineType804>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/ldap_domains/${encodeURIComponent(id)}`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType804);
                }
            });
        });
    }
    /**
     * Update a LDAP Domain
     * The *update LDAP Domain* endpoint receives a domain id and
     * what fields to update, returning the updated object.
     * <br/>If a domain with the specified id is not exists,
     * nonsense returns an error.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the domain to update
     * @param { ISwaggerInlineType806 } ldapDomain Partial LDAP Domain object (in `JSON` notation) containing
     *        the fields to update
     */
    public updateLdapDomain(
         authorization:string ,
         id:string ,
         ldapDomain:ISwaggerInlineType806 ):Promise<ISwaggerInlineType805>{
        return new Promise<ISwaggerInlineType805>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/ldap_domains/${encodeURIComponent(id)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType805);
                }
            });
        });
    }
    /**
     * Delete LDAP Domains
     * The *delete LDAP Domains* endpoint receives a list of
     * domain IDs and deletes these domains in nonsense.
     * <br/>If a domain with the specified id does not exists,
     * nonsense returns an error.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<string> } ids Array of LDAP domain IDs to delete, separated by a comma
     *        (`,`) and without spaces
     */
    public deleteLdapDomains(
         authorization:string ,
         ids:Array<string> ):Promise<void>{
        const params = {
            "ids":ids
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/ldap_domains/bulk`)
            .query(params)
            .set("authorization",authorization)
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
     * Test LDAP domain
     * The *test LDAP Domain* endpoint receives an LDAP Domain
     * object and tests it against the LDAP server.
     * <br/>If the LDAP server is not responding / wrong
     * cradentails were sent, nonsense will return an error.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType807 } ldapDomain Basic LDAP domain object (in `JSON` notation) to be tested
     */
    public testLdapDomain(
         authorization:string ,
         ldapDomain:ISwaggerInlineType807 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/ldap_domains/test`)
            .set("authorization",authorization)
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
     * Sync LDAP domain
     * The *sync LDAP Domain* endpoint receives an LDAP Domain ID
     * and synchronize it against the LDAP server.
     * <br/>If a the LDAP server is not responding, nonsense will
     * return an error.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the domain to update
     * @param { boolean } wait should wait
     * @param { ISwaggerInlineType808 } ldapDomainSync other parameters for the synchronization request
     */
    public syncLdapDomain(
         authorization:string ,
         id:string ,
         wait:boolean ,
         ldapDomainSync:ISwaggerInlineType808 ):Promise<void>{
        const params = {
            "wait":wait
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/ldap_domains/${encodeURIComponent(id)}/sync`)
            .query(params)
            .set("authorization",authorization)
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



