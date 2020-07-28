import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType4 } from "./types";

/*
    Fuel Status API 1.0
    This API allows to determine the fuel level and remaining
    distance of connected arik-Benz vehicles remotely.
    Data is categorized into resources and containers for the
    polling interface. They are defined as follows:
    * *Resource*: A resource is a single information about a
    vehicle. It's a measurement that consists of a name (also
    referred to as resource ID), a value, and an associated
    timestamp. See below for a list and description of all
    resources that this API provides.
    * *Container*: A container is a set of resources that are
    defined to group data for a certain use case.
    
    The interface is a ISO 20078-compliant REST endpoint to
    query the latest data for a vehicle. If the vehicle did not
    send an update for a resource within 11 hours, the response
    will be empty.
    ## Resources
    This is an alphabetical list of all resources that the API
    provides.
    Name | Description | Unit/Range
    ---- | ----------- | ----------
    rangeliquid | Liquid fuel tank range | 0..2046 km
    tanklevelpercent |     Liquid fuel tank level | 0…100 %
    
    
    Contact:
    The open API platform by arik-Benz
    
    


    
*/


export class TankLevelResourceHttpSvc {
    constructor(private baseUrl:string  = "https://api.arik-benz.com/vehicledata_tryout/v1"){

    }

    /**
     * Returns the latest available tank level resource for the
     * vehicle identification number.
     * @param { string } vehicleId Vehicle identification number
     */
    public getLatestTankLevelUsingGET(
         vehicleId:string ):Promise<ISwaggerInlineType4>{
        return new Promise<ISwaggerInlineType4>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/vehicles/${encodeURIComponent(vehicleId)}/resources/tanklevelpercent`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType4);
                }
            });
        });
    }
}



