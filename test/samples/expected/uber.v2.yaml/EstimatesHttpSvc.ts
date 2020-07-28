import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IPriceEstimate,IProduct } from "./types";

/*
    Uber API 1.0.0
    Move your app forward with the Uber API


    
*/


export class EstimatesHttpSvc {
    constructor(private baseUrl:string  = "https://api.uber.com/v1"){

    }

    /**
     * Price Estimates
     * The Price Estimates endpoint returns an estimated price
     * range for each product offered at a given location. The
     * price estimate is provided as a formatted string with the
     * full price range and the localized currency
     * symbol.<br><br>The response also includes low and high
     * estimates, and the [ISO
     * 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code
     * for situations requiring currency conversion. When surge is
     * active for a particular product, its surge_multiplier will
     * be greater than 1, but the price estimate already factors
     * in this multiplier.
     * @param { number } startLatitude Latitude component of start location.
     * @param { number } startLongitude Longitude component of start location.
     * @param { number } endLatitude Latitude component of end location.
     * @param { number } endLongitude Longitude component of end location.
     */
    public get_estimates_price(
         startLatitude:number ,
         startLongitude:number ,
         endLatitude:number ,
         endLongitude:number ):Promise<Array<IPriceEstimate>>{
        const params = {
            "start_latitude":startLatitude,
            "start_longitude":startLongitude,
            "end_latitude":endLatitude,
            "end_longitude":endLongitude
        };
        return new Promise<Array<IPriceEstimate>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/estimates/price`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<IPriceEstimate>);
                }
            });
        });
    }
    /**
     * Time Estimates
     * The Time Estimates endpoint returns ETAs for all products
     * offered at a given location, with the responses expressed
     * as integers in seconds. We recommend that this endpoint be
     * called every minute to provide the most accurate,
     * up-to-date ETAs.
     * @param { number } startLatitude Latitude component of start location.
     * @param { number } startLongitude Longitude component of start location.
     * @param { string } customerUuid Unique customer identifier to be used for experience
     *        customization.
     * @param { string } productId Unique identifier representing a specific product for a
     *        given latitude & longitude.
     */
    public get_estimates_time(
         startLatitude:number ,
         startLongitude:number ,
         customerUuid:string ,
         productId:string ):Promise<Array<IProduct>>{
        const params = {
            "start_latitude":startLatitude,
            "start_longitude":startLongitude,
            "customer_uuid":customerUuid,
            "product_id":productId
        };
        return new Promise<Array<IProduct>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/estimates/time`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<IProduct>);
                }
            });
        });
    }
}



