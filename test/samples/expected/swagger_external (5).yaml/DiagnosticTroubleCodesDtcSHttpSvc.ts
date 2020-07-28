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


export class DiagnosticTroubleCodesDtcSHttpSvc {
    constructor(private baseUrl:string  = "https://api.arik-benz.com/remotediagnostic_tryout/v1"){

    }

    /**
     * View the List of DTCs for specific vehicleId.
     * This API creates a readout of DTCs for one vehicle. If the
     * result is available immediately, the result is returned. If
     * the result isn't available, a location to the DTC readout
     * is returned. This location shall be polled until the result
     * is available. INFO: GET Requests are not yet supported!
     * @param { string } vehicleId The vehicle identifier of the vehicle to read from.
     * @param { string } ecuId Return DTCs from this ECU id only. Default: Return DTCs
     *        from all ECUs.
     * @param { string } dtcStatus Returns DTCs with this statuses only. Default: Return DTCs
     *        with all statuses.
     */
    public getDtcDataListByEcuUsingPOST(
         vehicleId:string ,
         ecuId:string ,
         dtcStatus:string ):Promise<void>{
        const params = {
            "ecuId":ecuId,
            "dtcStatus":dtcStatus
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/vehicles/${encodeURIComponent(vehicleId)}/dtcReadouts`)
            .query(params)
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



