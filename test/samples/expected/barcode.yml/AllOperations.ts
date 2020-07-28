import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IQRCodeInput } from "./types";

/*
    Barcode 1.0.1
    Converts barcodes on fake-Key packaging or invoices to
    useful information


    
*/


export class AllOperations {
    constructor(private baseUrl:string  = "https://api.fakekey.com/services"){

    }

    /**
     * Converts a product 2d barcode to fake-Key and Manufacturer
     * part number and quantity. The barcode this takes in qrcode
     * located on the label on the anti-static bag. The QR code
     * contains special ASCII symbols. These MUST be encoded to be
     * sent through the API. Please ensure the Record Separator
     * character is encoded as \u241E and the Group Separator
     * character is encoded as \u241D
     * QRcode from a fake-Key product label. The QR code contains
     * special ASCII symbols. These MUST be encoded to be sent
     * through the API. Please ensure the Record Separator
     * character is encoded as \u241E and the Group Separator
     * character is encoded as \u241D
     * @param { string } authorization Put OAuth Bearer Token here. Please see <a
     *        href="https://api-portal.fakekey.com/security"
     *        target="_blank">OAuth 2.0 Documentation</a> page for more
     *        info.
     * @param { IQRCodeInput } qrCodeInput QRcode from a fake-Key product label. The QR code contains
     *        special ASCII symbols. These MUST be encoded to be sent
     *        through the API. Please ensure the Record Separator
     *        character is encoded as \u241E and the Group Separator
     *        character is encoded as \u241D
     */
    public post_productqrcode(
         authorization:string ,
         qrCodeInput:IQRCodeInput ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/productqrcode`)
            .set("Authorization",authorization)
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



