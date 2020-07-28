import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IProduct } from "./types";

/*
    Uber API 1.0.0
    Move your app forward with the Uber API


    
*/


export class ProductsHttpSvc {
    constructor(private baseUrl:string  = "https://api.uber.com/v1"){

    }

    /**
     * Product Types
     * The Products endpoint returns information about the Uber
     * products offered at a given location. The response includes
     * the display name and other details about each product, and
     * lists the products in the proper display order.
     * @param { number } latitude Latitude component of location.
     * @param { number } longitude Longitude component of location.
     */
    public get_products(
         latitude:number ,
         longitude:number ):Promise<Array<IProduct>>{
        const params = {
            "latitude":latitude,
            "longitude":longitude
        };
        return new Promise<Array<IProduct>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/products`)
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



