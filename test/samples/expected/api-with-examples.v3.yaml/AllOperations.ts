import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";

/*
    Simple API overview 2.0.0
    


    
*/


export class AllOperations {
    constructor(private baseUrl:string ){

    }

    /**
     * List API versions
     */
    public listVersionsv2(
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
     * Show API version details
     */
    public getVersionDetailsv2(
        ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/v2`)
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



