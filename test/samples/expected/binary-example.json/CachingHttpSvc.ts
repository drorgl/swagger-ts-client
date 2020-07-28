import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType1 } from "./types";

/*
    Binary Server 1.0.0
    


    
*/


export class CachingHttpSvc {
    constructor(private baseUrl:string ){

    }

    /**
     * get resource
     * Retrieves a resource from a url
     * @param { ISwaggerInlineType1 } data request body
     */
    public post_get(
         data:ISwaggerInlineType1 ):Promise<Stream>{
        return new Promise<Stream>((resolve, reject) => {
            let returnStream = new PassThrough();
            superAgentRequest
            .post(this.baseUrl + `/get`)
            .send(data)
            .pipe(returnStream);
            resolve(returnStream);
        });
    }
}



