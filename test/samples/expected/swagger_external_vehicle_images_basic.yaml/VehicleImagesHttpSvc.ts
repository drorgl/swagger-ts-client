import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IVehicleImageResponse } from "./types";

/*
    Vehicle Image API 1.0
    The vehicle images API offers access to original arik-Benz
    vehicle images. It provides access to exterior and interior
    images with parameters e.g. to display vehicles at
    day/nighttime or in cabrio mode.
    
    Contact:
    The open API platform by arik-Benz
    
    


    
*/


export class VehicleImagesHttpSvc {
    constructor(private baseUrl:string  = "https://api.arik-benz.com/vehicle_images/v1"){

    }

    /**
     * Returns image IDs pointing to PNG images of a vehicle.
     * @param { string } vehicleId The FIN or VIN of one specific vehicle.
     * @param { boolean } roofOpen Set 'true', if you are looking for images with the roof
     *        open. This option is only valid for cabrios. Default is
     *        'false'.
     * @param { boolean } night Set 'true', if you are looking for images with a darker
     *        background and the vehicle's headlights turned on. Default
     *        is 'false'.
     */
    public get_vehicles_vehicleId(
         vehicleId:string ,
         roofOpen:boolean ,
         night:boolean ):Promise<IVehicleImageResponse>{
        const params = {
            "roofOpen":roofOpen,
            "night":night
        };
        return new Promise<IVehicleImageResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/vehicles/${encodeURIComponent(vehicleId)}`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IVehicleImageResponse);
                }
            });
        });
    }
    /**
     * Returns a vehicle image belonging to the given imageId. An
     * imageId is valid only for 24 hours.
     * @param { string } imageId Id representing a vehicle image.
     */
    public get_images_imageId(
         imageId:string ):Promise<any>{
        return new Promise<any>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/images/${encodeURIComponent(imageId)}`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as any);
                }
            });
        });
    }
}



