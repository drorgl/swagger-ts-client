import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IBarcodeResponse,IInvoiceBarcodeResponse } from "./types";

/*
    Barcode 1.0.1
    Converts barcodes on fake-Key packaging or invoices to
    useful information


    
*/


export class BarcodeHttpSvc {
    constructor(private baseUrl:string  = "https://api.fakekey.com/services"){

    }

    /**
     * Converts a product barcode to fake-Key and Manufacturer
     * part number and quantity. The barcode this takes in is a 1
     * dimensional barcode located on the label on the anti-static
     * bag.
     * @param { string } barcode Product barcode located on the product's anti-static bag.
     * @param { string } authorization Put OAuth Bearer Token here. Please see <a
     *        href="https://api-portal.fakekey.com/security"
     *        target="_blank">OAuth 2.0 Documentation</a> page for more
     *        info.
     */
    public getProductBarcode(
         barcode:string ,
         authorization:string ):Promise<IBarcodeResponse>{
        return new Promise<IBarcodeResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/productbarcode/${encodeURIComponent(barcode)}`)
            .set("Authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IBarcodeResponse);
                }
            });
        });
    }
    /**
     * Converts an invoice/pack list barcode to information about
     * the order. The barcode this takes in is a 1 dimensional
     * barcode located in the lower left corner of the invoice.
     * @param { string } barcode Invoice barcode located on the invoice in the lower left
     *        corner.
     * @param { string } authorization Put OAuth Bearer Token here. Please see <a
     *        href="https://api-portal.fakekey.com/security"
     *        target="_blank">OAuth 2.0 Documentation</a> page for more
     *        info.
     */
    public getInvoiceBarcode(
         barcode:string ,
         authorization:string ):Promise<IInvoiceBarcodeResponse>{
        return new Promise<IInvoiceBarcodeResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/invoicebarcode/${encodeURIComponent(barcode)}`)
            .set("Authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IInvoiceBarcodeResponse);
                }
            });
        });
    }
}



