import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISalesOrderHistoryItem } from "./types";

/*
    OrderHistory 1.1.4
    Retrieve list of sales order IDs for a given account to be
    looked up with the order status API.


    
*/


export class HistoryHttpSvc {
    constructor(private baseUrl:string  = "https://api.fakekey.com/services"){

    }

    /**
     * Retrieves a list of sales order numbers and dates for all
     * sales orders within a date range belonging to a customer id.
     * @param { string } startdate Begining of date range in ISO 8601 format. For example:
     *        2018-10-31
     * @param { string } enddate End of date range in ISO 8601 format. For example:
     *        2018-10-31
     * @param { number } customerid CustomerId (customer number) that is on the fake-Key
     *        account with which you authenticated in which you want to
     *        look up the history
     * @param { boolean } openonly If true will only return open orders
     * @param { string } authorization Put OAuth Bearer Token here. Please see <a
     *        href="https://api-portal.fakekey.com/security"
     *        target="_blank">OAuth 2.0 Documentation</a> page for more
     *        info.
     */
    public getCustomerSalesOrderHistory(
         startdate:string ,
         enddate:string ,
         customerid:number ,
         openonly:boolean ,
         authorization:string ):Promise<Array<ISalesOrderHistoryItem>>{
        return new Promise<Array<ISalesOrderHistoryItem>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/customersalesorderhistory/${customerid}/${encodeURIComponent(startdate)}/${encodeURIComponent(enddate)}/${openonly}`)
            .set("Authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISalesOrderHistoryItem>);
                }
            });
        });
    }
    /**
     * Retrieves a list of sales order numbers and dates for all
     * sales orders within a date range belonging to a any
     * customer ids under a root id.
     * @param { string } startdate Begining of date range in ISO 8601 format. For example:
     *        2018-10-31
     * @param { string } enddate End of date range in ISO 8601 format. For example:
     *        2018-10-31
     * @param { number } rootid Customer root Id that contains the fake-Key account with
     *        which you authenticated in which you want to look up the
     *        history
     * @param { boolean } openonly If true will only return open orders
     * @param { string } authorization Put OAuth Bearer Token here. Please see <a
     *        href="https://api-portal.fakekey.com/security"
     *        target="_blank">OAuth 2.0 Documentation</a> page for more
     *        info.
     */
    public getRootSalesOrderHistory(
         startdate:string ,
         enddate:string ,
         rootid:number ,
         openonly:boolean ,
         authorization:string ):Promise<Array<ISalesOrderHistoryItem>>{
        return new Promise<Array<ISalesOrderHistoryItem>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/rootsalesorderhistory/${rootid}/${encodeURIComponent(startdate)}/${encodeURIComponent(enddate)}/${openonly}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISalesOrderHistoryItem>);
                }
            });
        });
    }
}



