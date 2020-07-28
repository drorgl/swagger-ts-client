import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";

/*
    nonsense API 1.0
    


    
*/


export class TranslationsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Return a language file
     * The **get translations/lang** endpoint returns a language
     * file.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } lang The name of the language to be returned.
     */
    public getLang(
         authorization:string ,
         lang:string ):Promise<string>{
        return new Promise<string>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/translations/${encodeURIComponent(lang)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as string);
                }
            });
        });
    }
    /**
     * Return all supported languages
     * The **get translations** endpoint returns a list of all
     * your supported languages in nonsense.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     */
    public getAllLangs(
         authorization:string ):Promise<string>{
        return new Promise<string>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/translations`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as string);
                }
            });
        });
    }
}



