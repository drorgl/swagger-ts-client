import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType831,ISwaggerInlineType834,ISwaggerInlineType835 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class PluginsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Return a list of your plug-ins
     * The **get plugins** endpoint returns a list of plugins with
     * their details
     * and provided filtration and ordering.
     * <br/>Results can be filtered and ordered by the following
     * parameters.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } orderby Filter by provided field
     * @param { boolean } desc Order by descending/ascending
     * @param { string } search Filter according to provided string
     * @param { number } skip Number of results to skip from the start of the data set.
     *        skip is to be used with the `limit` parameter for paging
     * @param { number } limit How many results should be returned. limit is to be used
     *        with the `skip` parameter for paging
     */
    public getPlugins(
         authorization:string ,
         orderby:string ,
         desc:boolean ,
         search:string ,
         skip:number ,
         limit:number ):Promise<ISwaggerInlineType831>{
        const params = {
            "orderby":orderby,
            "desc":desc,
            "search":search,
            "skip":skip,
            "limit":limit
        };
        return new Promise<ISwaggerInlineType831>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/plugins`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType831);
                }
            });
        });
    }
    /**
     * Update your plug-in’s metadata
     * The **patch plugins** endpoint updates the metadata of a
     * plug-in and returns a list of modified plug-ins.
     * Metadata for a plug-in includes its filename, directory
     * location, and version details.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<ISwaggerInlineType835> } plugins plugins array to be updated.
     */
    public updatePlugins(
         authorization:string ,
         plugins:Array<ISwaggerInlineType835> ):Promise<Array<ISwaggerInlineType834>>{
        return new Promise<Array<ISwaggerInlineType834>>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/plugins`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType834>);
                }
            });
        });
    }
    /**
     * Return the plug-in’s build information
     * The **get_info** endpoint returns the build information
     * including the JavaScript file name and last build error.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { boolean } returnFile Returns response in JavaScript format or not.
     */
    public getPluginsBuildInfo(
         authorization:string ,
         returnFile:boolean ):Promise<void>{
        const params = {
            "returnFile":returnFile
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/plugins/get_info`)
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
     * Get plugins rebuild start trigger
     * Resolve request after plugins rebuild start, otherwise
     * waiting for it.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public getPluginsRebuildStart(
         authorization:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/plugins/get_start`)
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
     * Get plugins rebuild end trigger
     * Resolve request after plugins rebuild end, otherwise
     * waiting for it.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public getPluginsRebuildEnd(
         authorization:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/plugins/get_end`)
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



