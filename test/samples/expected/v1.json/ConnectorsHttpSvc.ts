import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";

/*
    nonsense API 1.0
    


    
*/


export class ConnectorsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Returns object that describes the UI connection manifest
     * The **get connector ui manifest** endpoint returns
     * connector ui manifest that describes ui render options for
     * controls.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } provider The name of connector provider.
     */
    public getConnectorUIManifest(
         authorization:string ,
         provider:string ):Promise<any>{
        return new Promise<any>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/connectors/${encodeURIComponent(provider)}/ui_config`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as any);
                }
            });
        });
    }
}



