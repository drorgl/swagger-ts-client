import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IResourceMetaInfo } from "./types";

/*
    Vehicle Lock Status API 1.0
    This API allows access to vehicle lock status data of
    arik-Benz vehicles remotely.
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
    doorlockstatusdecklid |     Lock status of the deck lid |
    false: locked<br>true: unlocked
    doorlockstatusvehicle | Vehicle lock status | 0: vehicle
    unlocked<br>1: vehicle internal locked<br>2: vehicle
    external locked<br>3: vehicle selective unlocked
    doorlockstatusgas | Status of gas tank door lock | false:
    locked<br>true: unlocked
    positionHeading | Vehicle heading position | 0..359.9
    degrees
    
    
    Contact:
    The open API platform by arik-Benz
    
    


    
*/


export class ResourcesHttpSvc {
    constructor(private baseUrl:string  = "https://api.arik-benz.com/vehicledata_tryout/v1"){

    }

    /**
     * Returns all available resources for the provided vehicle
     * identification number.
     * @param { string } vehicleId Vehicle identification number
     */
    public getAllResourcesForVinUsingGET(
         vehicleId:string ):Promise<Array<IResourceMetaInfo>>{
        return new Promise<Array<IResourceMetaInfo>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/vehicles/${encodeURIComponent(vehicleId)}/resources`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<IResourceMetaInfo>);
                }
            });
        });
    }
}



