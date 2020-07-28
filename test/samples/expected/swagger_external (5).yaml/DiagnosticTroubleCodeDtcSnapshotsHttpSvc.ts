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


export class DiagnosticTroubleCodeDtcSnapshotsHttpSvc {
    constructor(private baseUrl:string  = "https://api.arik-benz.com/remotediagnostic_tryout/v1"){

    }

    /**
     * View the List of DTC Snapshot for specific vehicleId.
     * This API creates a readout of a DTC snapshot from one
     * vehicle. If the result is available immediately, the result
     * is returned. If the result isn't available, a location to
     * the DTC snapshot readout is returned. This location shall
     * be polled until the result is available. INFO: GET Requests
     * are not yet supported!
     * @param { string } vehicleId The vehicle identifier of the vehicle to read from
     * @param { string } ecuId The id of the ECU to read from
     * @param { string } dtcId The id of the DTC associated with the snapshot
     */
    public getDtcSnapshotReadoutsUsingPOST(
         vehicleId:string ,
         ecuId:string ,
         dtcId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/vehicles/${encodeURIComponent(vehicleId)}/ecuId/${encodeURIComponent(ecuId)}/dtcId/${encodeURIComponent(dtcId)}/dtcSnapshotReadouts`)
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



