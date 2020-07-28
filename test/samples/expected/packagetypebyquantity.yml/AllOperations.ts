import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IPackageTypeByQuantityResponse,IPackageTypeByQuantityRequest } from "./types";

/*
    PackageTypeByQuantity 2.2.4
    Given a part number and quantity requested returns pricing,
    quantity available, and other part related information.
    This API will attempt to find the cheapest priced packaging
    type for your requested quantity. Works best with fake-Key
    part numbers as some manufacture numbers may not be unique.
    
    Contact:
    
    
    https://api-portal.fakekey.com/help

    Terms of Service:
    https://www.fakekey.com/en/terms-and-conditions

    
*/


export class AllOperations {
    constructor(private baseUrl:string  = "https://api.fakekey.com/services"){

    }

    /**
     * Search for best Packaging type given a quantity for a part.
     * Works best with fake-Key part numbers as some manufacturer
     * numbers are not unique. This is not a keyword search.
     * This resource expect the following locale settings on the
     * HTTP header: <br />
     * X-fakeKEY-Locale-Site <br />
     * X-fakeKEY-Locale-Language <br />
     * X-fakeKEY-Locale-Currency <br />
     * X-fakeKEY-Locale-ShipToCountry <br />
     * If no locale information is passed on the header, the
     * defaults to be used are: <br />
     * X-fakeKEY-Locale-Site= US <br />
     * X-fakeKEY-Locale-Language= en<br />
     * X-fakeKEY-Locale-Currency= USD <br />
     * X-fakeKEY-Locale-ShipToCountry= (blank) <br /><br />
     * The fake-Key Customer Id can also be passed in through the
     * HTTP header for Pricing(default value is 0).
     * <br />
     * X-fakeKEY-Customer-Id <br />
     * @param { IPackageTypeByQuantityRequest } request PackageTypeByQuantityRequest
     * @param { string } authorization Put OAuth Bearer Token here. Please see<a href=
     *        "https://api-portal.fakekey.com/security" target= "_blank"
     *        > OAuth 2.0 Documentation </ a > page for more info.
     * @param { string } xFakeKeyLocaleSite Two letter code for fake-Key part website to search on.
     *        Different county's sites have different part restrictions,
     *        supported languages, and currencies. Acceptable values
     *        include: US, CA, JP, UK, DE, AT, BE, DK, FI, GR, IE, IT,
     *        LU, NL, NO, PT, ES, KR, HK, SG, CN, TW, AU, FR, IN, NZ, SE,
     *        MX, CH, IL, PL, SK, SI, LV, LT, EE, CZ, HU, BG, MY, ZA, RO,
     *        TH, PH.
     * @param { string } xFakeKeyLocaleLanguage Two letter code for language to search on. Langauge must be
     *        supported by the selected site. If searching on keyword,
     *        this language is used to find matches. Acceptable values
     *        include: en, ja, de, fr, ko, zhs, zht, it, es, he.
     * @param { string } xFakeKeyLocaleCurrency Three letter code for Currency to return part pricing for.
     *        Currency must be supported by the selected site. Acceptable
     *        values include: USD, CAD, JPY, GBP, EUR, HKD, SGD, TWD,
     *        KRW, AUD, NZD, INR, DKK, NOK, SEK, ILS, CNY, PLN, CHF, CZK,
     *        HUF, RON, ZAR, MYR, PHP, THB.
     * @param { string } xFakeKeyLocaleShipToCountry 2 faket ISO code for country to ship to.
     * @param { string } xFakeKeyCustomerId Your fake-Key Customer id
     * @param { string } xFakeKeyPartnerId Your fake-Key Partner Id (Legacy)
     */
    public PackageTypeByQuantitySearch(
         request:IPackageTypeByQuantityRequest ,
         authorization:string ,
         xFakeKeyLocaleSite:string ,
         xFakeKeyLocaleLanguage:string ,
         xFakeKeyLocaleCurrency:string ,
         xFakeKeyLocaleShipToCountry:string ,
         xFakeKeyCustomerId:string ,
         xFakeKeyPartnerId:string ):Promise<IPackageTypeByQuantityResponse>{
        return new Promise<IPackageTypeByQuantityResponse>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/search`)
            .set("Authorization",authorization)
            .set("X-fakeKEY-Locale-Site",xFakeKeyLocaleSite)
            .set("X-fakeKEY-Locale-Language",xFakeKeyLocaleLanguage)
            .set("X-fakeKEY-Locale-Currency",xFakeKeyLocaleCurrency)
            .set("X-fakeKEY-Locale-ShipToCountry",xFakeKeyLocaleShipToCountry)
            .set("X-fakeKEY-Customer-Id",xFakeKeyCustomerId)
            .set("X-fakeKEY-Partner-Id",xFakeKeyPartnerId)
            .send(request)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IPackageTypeByQuantityResponse);
                }
            });
        });
    }
}



