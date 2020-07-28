import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType827,ISwaggerInlineType830 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class GeoHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get geoJson by type.
     * @param { string } type Type of geo json (ie: world, usa)
     *        
     */
    public geoJson(
         type:string ):Promise<ISwaggerInlineType827>{
        return new Promise<ISwaggerInlineType827>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/geo/geojson/${encodeURIComponent(type)}`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType827);
                }
            });
        });
    }
    /**
     * Returns geographical coordinates for the given locations
     * Performs geo-coding of the given locations and returns
     * their geographical coordinates.
     * 
     * @param { ISwaggerInlineType830 } locations Geo request parameters object, containing an array of
     *        locations and geoLevel:
     *        {"locations": [{ "name": "Cupertino", "country": "United
     *        States", "state": "California" }],
     *        "geoLevel": "city"} or {"locations": [{ "name": "United
     *        States, CA, Cupertino" }], "geoLevel": "city"}
     *        
     */
    public locations(
         locations:ISwaggerInlineType830 ):Promise<Array<any>>{
        return new Promise<Array<any>>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/geo/locations`)
            .send(locations)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<any>);
                }
            });
        });
    }
}



