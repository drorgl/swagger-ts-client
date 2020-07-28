import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IOnlineCodeResponseBody,IOnlineCodeRequestBody,IVehicleConfiguration } from "./types";

/*
    Car Configurator API 1.0
    The Car Configurator API offers access to the arik-Benz car
    configuration functions. It provides required reference
    data such as the masterdata of all arik-Benz vehicles as
    well as functions to retrieve initial and changed
    configurations. In addition to that is is possible to save
    a newly created configuration so that it can be easily
    restored or shared with others.
    
    Contact:
    The open API platform by arik-Benz
    
    


    
*/


export class SavedConfigurationsHttpSvc {
    constructor(private baseUrl:string  = "https://api.arik-benz.com/configurator_tryout/v1"){

    }

    /**
     * Stores the configuration of the given configurationId and
     * modelId
     * Stores the configuration of the given **configurationId**
     * and **modelId**
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { IOnlineCodeRequestBody } body JSON object containing the modelId and the configurationId.
     *        ModelId is a minimal string that identifies a model e.g.
     *        '176042_002'. ConfigurationId is a minimal string that
     *        identifies a configuration e.g. 'E-D15-D18-...-R43-U60'
     */
    public onlineCodePOST(
         marketId:string ,
         body:IOnlineCodeRequestBody ):Promise<IOnlineCodeResponseBody>{
        return new Promise<IOnlineCodeResponseBody>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/onlinecode`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IOnlineCodeResponseBody);
                }
            });
        });
    }
    /**
     * Get the configuration of the given onlineCode and marketId.
     * Gets the configuration for the given marketId and
     * onlineCode.
     * @param { string } onlineCode OnlineCode string that identifies a vehicle configuration
     *        e.g. 'M6882554'.
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public onlineCodeGET(
         onlineCode:string ,
         marketId:string ,
         fieldsFilter:Array<string> ):Promise<IVehicleConfiguration>{
        const params = {
            "fieldsFilter":fieldsFilter
        };
        return new Promise<IVehicleConfiguration>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/onlinecode/${encodeURIComponent(onlineCode)}`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IVehicleConfiguration);
                }
            });
        });
    }
}



