import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType554 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class ReportingHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Send E-Mail report for an asset
     * The **send report** endpoint receives asset info and
     * recipients list and sends an email report. Note: the users
     * and groups in the recipients section must be **shared** to
     * the dashboard.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType554 } reportObject An object containing the data needed in order to send the
     *        report. AssetId being the dashboard ID and the recipients
     *        array should contain the user's /group's ID along with its
     *        type. The prefrences section describes the content of the
     *        Email to be sent.
     *        
     */
    public sendReports(
         authorization:string ,
         reportObject:ISwaggerInlineType554 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/reporting`)
            .set("authorization",authorization)
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



