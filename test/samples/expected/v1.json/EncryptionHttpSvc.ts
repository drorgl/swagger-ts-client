import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";

/*
    nonsense API 1.0
    


    
*/


export class EncryptionHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Encrypt string with AES key
     * The **encrypt** endpoint returns the encrypted with AES key
     * value from the request.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } value The value which should be encrypted.
     */
    public encrypt(
         authorization:string ,
         value:string ):Promise<string>{
        const params = {
            "value":value
        };
        return new Promise<string>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/encryption/encrypt`)
            .query(params)
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
     * Decrypt encrypted with AES key string
     * The **decrypt** endpoint returns the decrypted with AES key
     * value from the request.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } value The value which should be decrypted.
     */
    public decrypt(
         authorization:string ,
         value:string ):Promise<string>{
        const params = {
            "value":value
        };
        return new Promise<string>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/encryption/decrypt`)
            .query(params)
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



