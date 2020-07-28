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


export class SearchHttpSvc {
    constructor(private baseUrl:string ){

    }

    /**
     * Provides search capability for the data set with the given
     * search criteria.
     * This API is based on Solr/Lucense Search. The data is
     * indexed using SOLR. This GET API returns the list of all
     * the searchable field names that are in the Solr Index.
     * Please see the 'fields' attribute which returns an array of
     * field names. Each field or a combination of fields can be
     * searched using the Solr/Lucene Syntax. Please refer
     * https://lucene.apache.org/core/3_6_2/queryparsersyntax.html#Overview
     * for the query syntax. List of field names that are
     * searchable can be determined using above GET api.
     * @param { string } version Version of the dataset.
     * @param { string } dataset Name of the dataset. In this case, the default value is
     *        oa_citations
     */
    public perform_search(
         version:string ,
         dataset:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/${dataset}/${version}/records`)
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



