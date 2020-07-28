import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IRecommendedPartsResponseV2,IRecommendedPartsRequestV2 } from "./types";

/*
    Recommended Parts 2.0.2
    API to provide recommended parts for given PartNumber.
    These are parts that you may be interested in given your
    interest in the provided part number.
    
    Contact:
    
    
    


    
*/


export class AllOperations {
    constructor(private baseUrl:string  = "https://api.fakekey.com/services"){

    }

    /**
     * Provides part recommendations
     * Provides part recommendations for the given part. Matches
     * recommendations on the fake-Key website.
     * @param { IRecommendedPartsRequestV2 } request RecommendedPartRequest
     * @param { string } authorization Put OAuth Bearer Token here. Please see <a
     *        href="https://api-portal.fakekey.com/security"
     *        target="_blank">OAuth 2.0 Documentation</a> page for more
     *        info.
     * @param { string } xFakeKeyLocaleLanguage Two letter code for language to search on. Langauge must be
     *        supported by the selected site. If searching on keyword,
     *        this language is used to find matches. Acceptable values
     *        include: en, de, fr, zh, it, ja, es, ko, sv, sl, sk, pt,
     *        pl, no, nl, ru, he, hu, el.
     * @param { string } xFakeKeyLocaleSite Two letter code for fake-Key part website to search on.
     *        Different county's sites have different part restrictions,
     *        supported languages, and currencies. Acceptable values
     *        include: US, AU, AT, BE, BG, CA, CN, CZ, DK, EE, FI, FR,
     *        DE, GR, HK, HU, IE, IL, IT, JP, LV, LT, LU, MX, NL, NZ, NO,
     *        PL, PT, SG, SK, KR, ES, SE, CH, TW, GB, TH, PH.
     * @param { string } xFakeKeyLocaleCurrency Three letter code for Currency to return part pricing for.
     *        Currency must be supported by the selected site. Acceptable
     *        values include: USD, AUD, EUR, CAD, CNY, DKK, HKD, ILS,
     *        JPY, NZD, NOK, SGD, KRW, SEK, TWD, GBP, PHP, THB.
     */
    public RecommendedPartspostRecommendedParts(
         request:IRecommendedPartsRequestV2 ,
         authorization:string ,
         xFakeKeyLocaleLanguage:string ,
         xFakeKeyLocaleSite:string ,
         xFakeKeyLocaleCurrency:string ):Promise<IRecommendedPartsResponseV2>{
        return new Promise<IRecommendedPartsResponseV2>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/recommended`)
            .set("Authorization",authorization)
            .set("X-fakeKEY-Locale-Language",xFakeKeyLocaleLanguage)
            .set("X-fakeKEY-Locale-Site",xFakeKeyLocaleSite)
            .set("X-fakeKEY-Locale-Currency",xFakeKeyLocaleCurrency)
            .send(request)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IRecommendedPartsResponseV2);
                }
            });
        });
    }
}



