import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType537 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class ApplicationHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get the application's status
     * The **application status** endpoint provides information on
     * the current status of the nonsense application.<br/>It
     * currently provides the version number and some license info.
     */
    public getApplicationStatus(
        ):Promise<ISwaggerInlineType537>{
        return new Promise<ISwaggerInlineType537>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/application/status`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType537);
                }
            });
        });
    }
}



