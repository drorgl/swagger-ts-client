import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";

/*
    nonsense API 1.0
    


    
*/


export class AllOperations {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get license information from oxygen
     */
    public getLicense(
        ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/authentication/get_license`)
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



