import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IResponse,IOrderInput } from "./types";

/*
    Ordering 1.3.3
    


    
*/


export class AllOperations {
    constructor(private baseUrl:string  = "https://api.fakekey.com/services"){

    }

    /**
     * Test endpoint for Order.
     * Test endpoint for Order. Will do basic input validation but
     * will NOT submit the order for processing.
     * @param { IOrderInput } input OrderInput JSON object
     * @param { string } authorization Put OAuth Bearer Token here. Please see <a
     *        href="https://api-portal.fakekey.com/security"
     *        target="_blank">OAuth 2.0 Documentation</a> page for more
     *        info.
     */
    public OrderingpostTestOrder(
         input:IOrderInput ,
         authorization:string ):Promise<IResponse>{
        return new Promise<IResponse>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/TestOrder`)
            .set("Authorization",authorization)
            .send(input)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IResponse);
                }
            });
        });
    }
    /**
     * Queues an order for processing. A confirmation email will
     * be sent later when it has been processed.
     * Queues an order for processing. A confirmation email will
     * be sent later when it has been processed.
     * @param { IOrderInput } input OrderInput JSON object
     * @param { string } authorization Put OAuth Bearer Token here. Please see <a
     *        href="https://api-portal.fakekey.com/security"
     *        target="_blank">OAuth 2.0 Documentation</a> page for more
     *        info.
     */
    public OrderingpostOrder(
         input:IOrderInput ,
         authorization:string ):Promise<IResponse>{
        return new Promise<IResponse>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/Order`)
            .set("Authorization",authorization)
            .send(input)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IResponse);
                }
            });
        });
    }
}



