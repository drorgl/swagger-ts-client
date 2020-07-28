import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IOrderStatusResponse } from "./types";

/*
    OrderStatus 2.1.1
    Retrieve order status for a given order. Also view related
    information such as tracking numbers and shipment info.


    
*/


export class OrderStatusHttpSvc {
    constructor(private baseUrl:string  = "https://api.fakekey.com/services"){

    }

    /**
     * Retrieve order status for given SalesOrderId and CustomerId
     * @param { number } customerId CustomerId (customer number) that is on the fake-Key
     *        account with which you authenticated
     * @param { number } salesOrderId SalesOrderId belonging to the customerId that you wish to
     *        lookup
     * @param { string } authorization Put OAuth Bearer Token here. Please see <a
     *        href="https://api-portal.fakekey.com/security"
     *        target="_blank">OAuth 2.0 Documentation</a> page for more
     *        info.
     * @param { boolean } rootAccount Optional parameter. If true will lookup orders for any
     *        account associated with the CustomerIDs root account. This
     *        is used in cases where your company has multiple
     *        representatives with unique CustomerIDs but all sharing a
     *        root.
     */
    public getorderstatus(
         customerId:number ,
         salesOrderId:number ,
         authorization:string ,
         rootAccount:boolean ):Promise<IOrderStatusResponse>{
        const params = {
            "rootAccount":rootAccount
        };
        return new Promise<IOrderStatusResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/orderStatus/${customerId}/${salesOrderId}`)
            .query(params)
            .set("Authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IOrderStatusResponse);
                }
            });
        });
    }
}



