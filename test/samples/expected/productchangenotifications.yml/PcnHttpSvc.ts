import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IPcnResponse } from "./types";

/*
    Product Change Notifications 1.0.3
    This API provides all product change notifications for a
    given fake-Key part.
    
    Contact:
    
    
    https://api-portal.fakekey.com/help


    
*/


export class PcnHttpSvc {
    constructor(private baseUrl:string  = "https://api.fakekey.com/services"){

    }

    /**
     * This operation provides all product change notifications
     * for a given fake-Key part.
     * @param { string } fakekeypartnumber fake-Key part number
     * @param { string } authorization Put OAuth Bearer Token here. Please see<a href=
     *        "https://api-portal.fakekey.com/app_overview" target=
     *        "_blank" > OAuth 2.0 Documentation </ a > page for more
     *        info.
     * @param { string } xFakeKeyLocaleSite Two letter code for fake-Key part website to search on.
     *        Different county's sites have different part restrictions,
     *        supported languages, and currencies. Acceptable values
     *        include: US, CA, JP, UK, DE, AT, BE, DK, FI, GR, IE, IT,
     *        LU, NL, NO, PT, ES, KR, HK, SG, CN, TW, ALTERA, AU, FR, IN,
     *        NZ, SE, MX, CH, IL, PL, SK, SI, LV, LT, EE, CZ, HU, BG, MY,
     *        ZA, RO.
     * @param { string } xFakeKeyLocaleLanguage Two letter code for language to search on. Langauge must be
     *        supported by the selected site. If searching on keyword,
     *        this language is used to find matches. Acceptable values
     *        include: en, ja, de, fr, ko, zhs, zht, it, es, he.
     * @param { string } xFakeKeyCustomerId Your fake-Key Customer id
     */
    public getGetpcns(
         fakekeypartnumber:string ,
         authorization:string ,
         xFakeKeyLocaleSite:string ,
         xFakeKeyLocaleLanguage:string ,
         xFakeKeyCustomerId:string ):Promise<IPcnResponse>{
        return new Promise<IPcnResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/getpcns/${encodeURIComponent(fakekeypartnumber)}`)
            .set("Authorization",authorization)
            .set("X-fakeKEY-Locale-Site",xFakeKeyLocaleSite)
            .set("X-fakeKEY-Locale-Language",xFakeKeyLocaleLanguage)
            .set("X-fakeKEY-Customer-Id",xFakeKeyCustomerId)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IPcnResponse);
                }
            });
        });
    }
}



