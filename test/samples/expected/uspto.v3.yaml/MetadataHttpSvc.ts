import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";

/*
    USPTO Data Set API 1.0.0
    The Data Set API (DSAPI) allows the public users to
    discover and search USPTO exported data sets. This is a
    generic API that allows USPTO users to make any CSV based
    data files searchable through API. With the help of GET
    call, it returns the list of data fields that are
    searchable. With the help of POST call, data can be fetched
    based on the filters on the field names. Please note that
    POST call is used to search the actual data. The reason for
    the POST call is that it allows users to specify any
    complex search criteria without worry about the GET size
    limitations as well as encoding of the input parameters.
    
    Contact:
    Open Data Portal
    developer@uspto.gov
    https://developer.uspto.gov


    
*/


export class MetadataHttpSvc {
    constructor(private baseUrl:string ){

    }

    /**
     * List available data sets
     */
    public list_data_sets(
        ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/`)
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
     * Provides the general information about the API and the list
     * of fields that can be used to query the dataset.
     * This GET API returns the list of all the searchable field
     * names that are in the oa_citations. Please see the 'fields'
     * attribute which returns an array of field names. Each field
     * or a combination of fields can be searched using the syntax
     * options shown below.
     * @param { string } dataset Name of the dataset.
     * @param { string } version Version of the dataset.
     */
    public list_searchable_fields(
         dataset:string ,
         version:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/${dataset}/${version}/fields`)
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



