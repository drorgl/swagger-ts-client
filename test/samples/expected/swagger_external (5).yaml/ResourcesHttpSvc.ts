import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";

/*
    Remote Diagnostic Support API 1.0
    The Remote Diagnostic Support API will provide the
    possibility for 3rd party applications (e.g. ADAC, ATU,
    etc.) to access vehicle diagnostics data remotely on behalf
    of the Daimler customer. To use the endpoints you need a
    valid vin/fin (vehicleId).
    
    Contact:
    The open API platform by arik-Benz
    
    


    
*/


export class ResourcesHttpSvc {
    constructor(private baseUrl:string  = "https://api.arik-benz.com/remotediagnostic_tryout/v1"){

    }

    /**
     * View the List of resources
     * This API creates a readout of available resources to the
     * accessing party for one vehicle. If the result is available
     * immediately, the result is returned. If the result isn't
     * available, a location to the resource readout is returned.
     * This location shall be polled until the result is
     * available. INFO: GET Requests are not yet supported!
     * @param { string } vehicleId vehicleId of the resources to be viewed
     */
    public getResourceReadoutsUsingPOST(
         vehicleId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/vehicles/${encodeURIComponent(vehicleId)}/resourceReadouts`)
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



