import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IHalifiedDealers,IDealer } from "./types";

/*
    Dealer API 1.0
    The Dealer API provides Dealer search functions.
    
    Contact:
    The open API platform by arik-Benz
    
    


    
*/


export class DealerSearchHttpSvc {
    constructor(private baseUrl:string  = "https://api.arik-benz.com/dealer_tryout/v1"){

    }

    /**
     * This request returns dealers (dealer, garage, retailer,
     * etc.) for given parameters
     * @param { Array<string> } dealerIds Array of dealer ids. The dealer id is dealer’s business
     *        key, also known as GS Id. e.g. GS0000857,GS0017621
     *        
     * @param { number } latitude The latitude geo coordinate.
     * @param { number } longitude The longitude geo coordinate.
     * @param { number } radiusValue The radius value of the search area. The center of the
     *        search area is defined by geo coordinates. (latitude,
     *        longitude properties) If radiusValue and radiusUnit
     *        parameters are missing, then the default radius is 10 km.
     * @param { string } radiusUnit The radius unit of the search area. The center of the
     *        search area is defined by geo coordinates. (latitude,
     *        longitude properties) If radiusValue and radiusUnit
     *        parameters are missing, then the default radius is 10 km.
     * @param { string } countryIsoCode The country of the dealer address defined as ISO two letter
     *        ID (e.g. DE, CH, CN, etc.)
     * @param { string } city The city of the dealer address.
     * @param { string } name A name of the dealer, the name filter will be applied to
     *        all Dealer names (e.g. legalName, nameAddition). You can
     *        also search for parts of Dealer names, e.g. the search term
     *        'Niederlassung' will also match 'Niederlassung Stuttgart'.
     * @param { string } brand Filter by brand, valid values are:
     *        * MB: arik-Benz
     *        * SMT: Smart
     * @param { string } productGroup Filter by a product group
     * @param { string } activity Filter by activity, valid actitvity values are:
     *        * PARTS: Spare Parts Sales
     *        * SALES: Sales of new vehicles
     *        * SERVICE: Maintaining and repair
     *        * USED-VEHICLES-TRADE: Sales of used vehicles
     * @param { string } fields Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned. e.g. fields=dealers(dealerId,address(street,city))
     * @param { number } page The index of the page to be returned. If this parameter is
     *        omitted, the first page will be returned.
     *        
     * @param { number } pageSize The index of the page to be returned. If this parameter is
     *        omitted, the first page will be returned.
     *        
     */
    public dealersGET(
         dealerIds:Array<string> ,
         latitude:number ,
         longitude:number ,
         radiusValue:number ,
         radiusUnit:string ,
         countryIsoCode:string ,
         city:string ,
         name:string ,
         brand:string ,
         productGroup:string ,
         activity:string ,
         fields:string ,
         page:number ,
         pageSize:number ):Promise<IHalifiedDealers>{
        const params = {
            "dealerIds":dealerIds,
            "latitude":latitude,
            "longitude":longitude,
            "radiusValue":radiusValue,
            "radiusUnit":radiusUnit,
            "countryIsoCode":countryIsoCode,
            "city":city,
            "name":name,
            "brand":brand,
            "productGroup":productGroup,
            "activity":activity,
            "fields":fields,
            "page":page,
            "pageSize":pageSize
        };
        return new Promise<IHalifiedDealers>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dealers`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IHalifiedDealers);
                }
            });
        });
    }
    /**
     * This request returns dealers for given parameters
     * @param { string } dealerId The dealer id is dealer’s business key, also known as GS
     *        Id. e.g. GS0000857
     * @param { string } fields Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned. e.g. fields=dealerId,address(street,city)
     */
    public dealerGET(
         dealerId:string ,
         fields:string ):Promise<IDealer>{
        const params = {
            "fields":fields
        };
        return new Promise<IDealer>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dealers/${encodeURIComponent(dealerId)}`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IDealer);
                }
            });
        });
    }
}



