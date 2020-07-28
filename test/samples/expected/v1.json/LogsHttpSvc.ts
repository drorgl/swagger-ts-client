import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType812 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class LogsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Returns dashboard loading times
     * The **post timer** endpoint returns information regarding
     * your dashboard’s loading times.
     */
    public saveLogs(
        ):Promise<ISwaggerInlineType812>{
        return new Promise<ISwaggerInlineType812>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/logs/timer`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType812);
                }
            });
        });
    }
}



