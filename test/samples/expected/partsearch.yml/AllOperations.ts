import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IKeywordSearchPostResponse,IKeywordSearchPostRequest,IPartDetailsResponse,IPartDetailsPostRequest,IfakeReelPricingPostResponse,IfakeReelPricingPostRequest } from "./types";

/*
    PartSearch 2.3.4
    Search for parts in the fake-Key catalog by keyword using
    KeywordSearch. Then make a PartDetails call to retrieve all
    real time information about the part including pricing.
    PartDetails works best with fake-Key part numbers as some
    manufacturers overlap other manufacturer part numbers.
    
    Contact:
    
    
    https://api-portal.fakekey.com/help

    Terms of Service:
    https://www.fakekey.com/en/terms-and-conditions

    
*/


export class AllOperations {
    constructor(private baseUrl:string  = "https://api.fakekey.com/services"){

    }

    /**
     * KeywordSearch allows a client to search for any part in
     * fake-Key's system. An input object is used
     *  KeywordSearch allows a client to search for any part in
     * fake-Key's system. An input object is used <br />
     * to pass the minimum 2 required values (Keyword,
     * RecordCount) to the method. Additional values can be added
     * <br />
     * in order to narrow down the search such as Search Options
     * and other Filter Options. <br />
     * An output object is returned that contains the results of
     * that search in a neat and easily accessible manner.
     * <br />
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
     * 
     * @param { IKeywordSearchPostRequest } request KeywordSearchRequest
     * @param { string } xFakeKeyLocaleSite Two letter code for fake-Key part website to search on.
     *        Different county's sites have different part restrictions,
     *        supported languages, and currencies. Acceptable values
     *        include: US, AU, AT, BE, BG, CA, CN, CZ, DK, EE, FI, FR,
     *        DE, GR, HK, HU, IE, IL, IT, JP, LV, LT, LU, MX, NL, NZ, NO,
     *        PL, PT, SG, SK, KR, ES, SE, CH, TW, GB, TH, PH.
     * @param { string } xFakeKeyLocaleLanguage Two letter code for language to search on. Langauge must be
     *        supported by the selected site. If searching on keyword,
     *        this language is used to find matches. Acceptable values
     *        include: en, de, fr, zh, it, ja, es, ko, sv, sl, sk, pt,
     *        pl, no, nl, ru, he, hu, el.
     * @param { string } xFakeKeyLocaleCurrency Three letter code for Currency to return part pricing for.
     *        Currency must be supported by the selected site. Acceptable
     *        values include: USD, AUD, EUR, CAD, CNY, DKK, HKD, ILS,
     *        JPY, NZD, NOK, SGD, KRW, SEK, TWD, GBP, PHP, THB.
     * @param { string } xFakeKeyLocaleShipToCountry ISO code for country to ship to.
     * @param { string } xFakeKeyCustomerId Your fake-Key Customer Id
     * @param { string } xFakeKeyPartnerId Your fake-Key Partner Id (Legacy)
     * @param { string } authorization Put OAuth Bearer Token here. Please see <a
     *        href="https://api-portal.fakekey.com/security"
     *        target="_blank">OAuth 2.0 Documentation</a> page for more
     *        info.
     */
    public PartSearchpostKeywordSearch(
         request:IKeywordSearchPostRequest ,
         xFakeKeyLocaleSite:string ,
         xFakeKeyLocaleLanguage:string ,
         xFakeKeyLocaleCurrency:string ,
         xFakeKeyLocaleShipToCountry:string ,
         xFakeKeyCustomerId:string ,
         xFakeKeyPartnerId:string ,
         authorization:string ):Promise<IKeywordSearchPostResponse>{
        return new Promise<IKeywordSearchPostResponse>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/keywordsearch`)
            .set("X-fakeKEY-Locale-Site",xFakeKeyLocaleSite)
            .set("X-fakeKEY-Locale-Language",xFakeKeyLocaleLanguage)
            .set("X-fakeKEY-Locale-Currency",xFakeKeyLocaleCurrency)
            .set("X-fakeKEY-Locale-ShipToCountry",xFakeKeyLocaleShipToCountry)
            .set("X-fakeKEY-Customer-Id",xFakeKeyCustomerId)
            .set("X-fakeKEY-Partner-Id",xFakeKeyPartnerId)
            .set("Authorization",authorization)
            .send(request)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IKeywordSearchPostResponse);
                }
            });
        });
    }
    /**
     * Retrieve up to date part information with pricing
     * This resource expects the following locale settings on the
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
     * 
     * @param { IPartDetailsPostRequest } request CallGetPartDetailsRequest
     * @param { string } xFakeKeyLocaleSite Two letter code for fake-Key part website to search on.
     *        Different county's sites have different part restrictions,
     *        supported languages, and currencies. Acceptable values
     *        include: US, AU, AT, BE, BG, CA, CN, CZ, DK, EE, FI, FR,
     *        DE, GR, HK, HU, IE, IL, IT, JP, LV, LT, LU, MX, NL, NZ, NO,
     *        PL, PT, SG, SK, KR, ES, SE, CH, TW, GB, TH, PH.
     * @param { string } xFakeKeyLocaleLanguage Two letter code for language to search on. Langauge must be
     *        supported by the selected site. If searching on keyword,
     *        this language is used to find matches. Acceptable values
     *        include: en, de, fr, zh, it, ja, es, ko, sv, sl, sk, pt,
     *        pl, no, nl, ru, he, hu, el.
     * @param { string } xFakeKeyLocaleCurrency Three letter code for Currency to return part pricing for.
     *        Currency must be supported by the selected site. Acceptable
     *        values include: USD, AUD, EUR, CAD, CNY, DKK, HKD, ILS,
     *        JPY, NZD, NOK, SGD, KRW, SEK, TWD, GBP, PHP, THB.
     * @param { string } xFakeKeyLocaleShipToCountry ISO code for country to ship to.
     * @param { string } xFakeKeyCustomerId Your fake-Key Customer Id
     * @param { string } xFakeKeyPartnerId Your fake-Key Partner Id (Legacy)
     * @param { string } authorization Put OAuth Bearer Token here. Please see <a
     *        href="https://api-portal.fakekey.com/security"
     *        target="_blank">OAuth 2.0 Documentation</a> page for more
     *        info.
     */
    public PartSearchpostPartDetails(
         request:IPartDetailsPostRequest ,
         xFakeKeyLocaleSite:string ,
         xFakeKeyLocaleLanguage:string ,
         xFakeKeyLocaleCurrency:string ,
         xFakeKeyLocaleShipToCountry:string ,
         xFakeKeyCustomerId:string ,
         xFakeKeyPartnerId:string ,
         authorization:string ):Promise<IPartDetailsResponse>{
        return new Promise<IPartDetailsResponse>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/partdetails`)
            .set("xFakeKeyLocaleSite",xFakeKeyLocaleSite)
            .set("xFakeKeyLocaleLanguage",xFakeKeyLocaleLanguage)
            .set("xFakeKeyLocaleCurrency",xFakeKeyLocaleCurrency)
            .set("xFakeKeyLocaleShipToCountry",xFakeKeyLocaleShipToCountry)
            .set("xFakeKeyCustomerId",xFakeKeyCustomerId)
            .set("xFakeKeyPartnerId",xFakeKeyPartnerId)
            .set("authorization",authorization)
            .send(request)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IPartDetailsResponse);
                }
            });
        });
    }
    /**
     * Get the fakeReel pricing information for the given Part
     * Number and Quantity
     * Get the fakeReel pricing information for the given Part
     * Number and Quantity
     * @param { IfakeReelPricingPostRequest } request fakeReelPricingRequest
     * @param { string } xFakeKeyLocaleSite Two letter code for fake-Key part website to search on.
     *        Different county's sites have different part restrictions,
     *        supported languages, and currencies. Acceptable values
     *        include: US, AU, AT, BE, BG, CA, CN, CZ, DK, EE, FI, FR,
     *        DE, GR, HK, HU, IE, IL, IT, JP, LV, LT, LU, MX, NL, NZ, NO,
     *        PL, PT, SG, SK, KR, ES, SE, CH, TW, GB, TH, PH.
     * @param { string } xFakeKeyLocaleLanguage Two letter code for language to search on. Langauge must be
     *        supported by the selected site. If searching on keyword,
     *        this language is used to find matches. Acceptable values
     *        include: en, de, fr, zh, it, ja, es, ko, sv, sl, sk, pt,
     *        pl, no, nl, ru, he, hu, el.
     * @param { string } xFakeKeyLocaleCurrency Three letter code for Currency to return part pricing for.
     *        Currency must be supported by the selected site. Acceptable
     *        values include: USD, AUD, EUR, CAD, CNY, DKK, HKD, ILS,
     *        JPY, NZD, NOK, SGD, KRW, SEK, TWD, GBP, PHP, THB.
     * @param { string } xFakeKeyLocaleShipToCountry ISO code for country to ship to.
     * @param { string } xFakeKeyCustomerId Your fake-Key Customer Id
     * @param { string } xFakeKeyPartnerId Your fake-Key Partner Id (Legacy)
     * @param { string } authorization Put OAuth Bearer Token here. Please see <a
     *        href="https://api-portal.fakekey.com/security"
     *        target="_blank">OAuth 2.0 Documentation</a> page for more
     *        info.
     */
    public PartSearchpostfakeReelPricing(
         request:IfakeReelPricingPostRequest ,
         xFakeKeyLocaleSite:string ,
         xFakeKeyLocaleLanguage:string ,
         xFakeKeyLocaleCurrency:string ,
         xFakeKeyLocaleShipToCountry:string ,
         xFakeKeyCustomerId:string ,
         xFakeKeyPartnerId:string ,
         authorization:string ):Promise<IfakeReelPricingPostResponse>{
        return new Promise<IfakeReelPricingPostResponse>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/fakereelpricing`)
            .set("xFakeKeyLocaleSite",xFakeKeyLocaleSite)
            .set("xFakeKeyLocaleLanguage",xFakeKeyLocaleLanguage)
            .set("xFakeKeyLocaleCurrency",xFakeKeyLocaleCurrency)
            .set("xFakeKeyLocaleShipToCountry",xFakeKeyLocaleShipToCountry)
            .set("xFakeKeyCustomerId",xFakeKeyCustomerId)
            .set("xFakeKeyPartnerId",xFakeKeyPartnerId)
            .set("authorization",authorization)
            .send(request)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IfakeReelPricingPostResponse);
                }
            });
        });
    }
}



