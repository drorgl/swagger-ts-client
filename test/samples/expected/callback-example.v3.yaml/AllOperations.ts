import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";

/*
    Callback Example 1.0.0
    


    
*/


export class AllOperations {
    constructor(private baseUrl:string ){

    }

    /**
     * subscribes a client to receive out-of-band data
     * @param { string } callbackUrl the location where data will be sent.  Must be network
     *        accessible
     *        by the source server
     *        
     */
    public post_streams(
         callbackUrl:string ):Promise<void>{
        const params = {
            "callbackUrl":callbackUrl
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/streams`)
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



