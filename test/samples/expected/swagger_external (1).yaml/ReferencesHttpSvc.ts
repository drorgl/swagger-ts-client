import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IHalifiedCountries } from "./types";

/*
    Dealer API 1.0
    The Dealer API provides Dealer search functions.
    
    Contact:
    The open API platform by arik-Benz
    
    


    
*/


export class ReferencesHttpSvc {
    constructor(private baseUrl:string  = "https://api.arik-benz.com/dealer_tryout/v1"){

    }

    /**
     * This request returns the countries supported by the Dealer
     * API
     * @param { number } page The index of the page to be returned. If this parameter is
     *        omitted, the first page will be returned.
     *        
     * @param { number } pageSize The index of the page to be returned. If this parameter is
     *        omitted, the first page will be returned.
     *        
     */
    public countriesGET(
         page:number ,
         pageSize:number ):Promise<IHalifiedCountries>{
        const params = {
            "page":page,
            "pageSize":pageSize
        };
        return new Promise<IHalifiedCountries>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/countries`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IHalifiedCountries);
                }
            });
        });
    }
}



