import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IMarket,IVehicleClass,IVehicleBody,IVehicleModel,IProductGroupsPerMarket } from "./types";

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


export class ReferencesHttpSvc {
    constructor(private baseUrl:string  = "https://api.arik-benz.com/configurator_tryout/v1"){

    }

    /**
     * Get all available markets.
     * Get all available `Markets`. Optional query params
     * **language** or **country** may be used to filter the
     * result.
     * @param { string } language This is a ISO language string e.g. 'de' and is spoken in
     *        Austria 'AT', Germany 'DE' and Swiss 'CH'.
     * @param { string } country This is a ISO country string e.g. Germany 'DE' or Swiss
     *        'CH'.
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public marketsGET(
         language:string ,
         country:string ,
         fieldsFilter:Array<string> ):Promise<Array<IMarket>>{
        const params = {
            "language":language,
            "country":country,
            "fieldsFilter":fieldsFilter
        };
        return new Promise<Array<IMarket>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<IMarket>);
                }
            });
        });
    }
    /**
     * Get the market with the given marketId.
     * Gets the `Market` for the given **marketId**. There are no
     * query parameters to filter the result.
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public marketGET(
         marketId:string ,
         fieldsFilter:Array<string> ):Promise<IMarket>{
        const params = {
            "fieldsFilter":fieldsFilter
        };
        return new Promise<IMarket>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IMarket);
                }
            });
        });
    }
    /**
     * Get all available classes for the given marketId.
     * Get all available `VehicleClasses` objects for the given
     * **marketId**. Optional query params **classId**, **bodyId**
     * or **productGroups** may be used to filter the result and
     * must conform to the pattern [0-9A-Z_-]+.
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { string } classId This is a class id e.g. '176' for 'A-Class' in Germany.
     * @param { string } bodyId This is a body id e.g. '1' for 'Limousine' in Germany.
     * @param { Array<string> } productGroups Specifies to which product groups the vehicles belong which
     *        should be returned. The product groups are separated from
     *        each other by a comma and are case sensitive. Allowed
     *        values are:
     *        * PKW
     *        * VAN
     *        * SMART
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public classesGET(
         marketId:string ,
         classId:string ,
         bodyId:string ,
         productGroups:Array<string> ,
         fieldsFilter:Array<string> ):Promise<Array<IVehicleClass>>{
        const params = {
            "classId":classId,
            "bodyId":bodyId,
            "productGroups":productGroups,
            "fieldsFilter":fieldsFilter
        };
        return new Promise<Array<IVehicleClass>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/classes`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<IVehicleClass>);
                }
            });
        });
    }
    /**
     * Get the class for the given marketId and classId.
     * Get the `VehicleClass` for the given **marketId** and
     * **classId**.
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { string } classId This is a class id e.g. '176' for 'A-Klasse' in Germany.
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public classGET(
         marketId:string ,
         classId:string ,
         fieldsFilter:Array<string> ):Promise<IVehicleClass>{
        const params = {
            "fieldsFilter":fieldsFilter
        };
        return new Promise<IVehicleClass>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/classes/${encodeURIComponent(classId)}`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IVehicleClass);
                }
            });
        });
    }
    /**
     * Get all available bodies for the given marketId.
     * Get all available `VehicleBodies` for the given
     * **marketId**. Optional query params **classId** **bodyId**
     * or **productGroups** may be used to filter the result and
     * must conform to the pattern [0-9A-Z_-]+.
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { string } classId This is a class id e.g. '176' for 'A-Class' in Germany.
     * @param { string } bodyId This is a body id e.g. '1' for 'Limousine' in Germany.
     * @param { Array<string> } productGroups Specifies to which product groups the vehicles belong which
     *        should be returned. The product groups are separated from
     *        each other by a comma and are case sensitive. Allowed
     *        values are:
     *        * PKW
     *        * VAN
     *        * SMART
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public bodiesGET(
         marketId:string ,
         classId:string ,
         bodyId:string ,
         productGroups:Array<string> ,
         fieldsFilter:Array<string> ):Promise<Array<IVehicleBody>>{
        const params = {
            "classId":classId,
            "bodyId":bodyId,
            "productGroups":productGroups,
            "fieldsFilter":fieldsFilter
        };
        return new Promise<Array<IVehicleBody>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/bodies`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<IVehicleBody>);
                }
            });
        });
    }
    /**
     * Get the body for the given marketId and bodyId.
     * Get the `VehicleBody` for the given **marketId** and
     * **bodyId**.
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { string } bodyId This is a body id e.g. '1' for 'Limousine' in Germany.
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public bodyGET(
         marketId:string ,
         bodyId:string ,
         fieldsFilter:Array<string> ):Promise<IVehicleBody>{
        const params = {
            "fieldsFilter":fieldsFilter
        };
        return new Promise<IVehicleBody>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/bodies/${encodeURIComponent(bodyId)}`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IVehicleBody);
                }
            });
        });
    }
    /**
     * Get all available models for the given marketId.
     * Get the available `VehicleModels` for the given
     * **marketId**. Optional query params **classId**,
     * **bodyId**, **baumuster4prefix**, **baumuster**,
     * **nationalSalesType** or **productGroups** maybe used to
     * filter the result. The baumuster4prefix must conform to the
     * pattern [0-9]{4}.
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { string } classId This is a class id e.g. '176' for 'A-Class' in Germany.
     * @param { string } bodyId This is a body id e.g. '1' for 'Limousine' in Germany.
     * @param { string } baumuster4prefix The first four digits of a baumuster are called
     *        baumuster4prefix e.g. '1760' for 'Berline' in France.
     * @param { string } baumuster This is a baumuster e.g. '176042' for 'A 180 Limousine' in
     *        Germany.
     * @param { string } nationalSalesType This is the national sales type (NST) of a distinct
     *        baumuster. There is no predefined pattern for the NST, each
     *        market defines its NST. e.g. 'E07' in France, 0001 in
     *        Germany and ZA1 in South Africa Using the NST markets can
     *        define market specific conditions. e.g. different initial
     *        configuration, etc.
     * @param { Array<string> } productGroups Specifies to which product groups the vehicles belong which
     *        should be returned. The product groups are separated from
     *        each other by a comma and are case sensitive. Allowed
     *        values are:
     *        * PKW
     *        * VAN
     *        * SMART
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public modelsGET(
         marketId:string ,
         classId:string ,
         bodyId:string ,
         baumuster4prefix:string ,
         baumuster:string ,
         nationalSalesType:string ,
         productGroups:Array<string> ,
         fieldsFilter:Array<string> ):Promise<Array<IVehicleModel>>{
        const params = {
            "classId":classId,
            "bodyId":bodyId,
            "baumuster4prefix":baumuster4prefix,
            "baumuster":baumuster,
            "nationalSalesType":nationalSalesType,
            "productGroups":productGroups,
            "fieldsFilter":fieldsFilter
        };
        return new Promise<Array<IVehicleModel>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<IVehicleModel>);
                }
            });
        });
    }
    /**
     * Get the model for the given marketId and modelId.
     * Get the `VehicleModel` object for the given **marketId**
     * and **modelId**.
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { string } modelId Minimal string that identifies a model e.g. '176042_002'.
     *        If no nationalSalesType is available, the modelId only
     *        consists of the baumuster e.g. '176042'.
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public modelGET(
         marketId:string ,
         modelId:string ,
         fieldsFilter:Array<string> ):Promise<IVehicleModel>{
        const params = {
            "fieldsFilter":fieldsFilter
        };
        return new Promise<IVehicleModel>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IVehicleModel);
                }
            });
        });
    }
    /**
     * Get all configured active product groups for the given
     * marketId.
     * Get all configured active product groups for the given
     * **marketId**.
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public productGroupsGET(
         marketId:string ,
         fieldsFilter:Array<string> ):Promise<IProductGroupsPerMarket>{
        const params = {
            "fieldsFilter":fieldsFilter
        };
        return new Promise<IProductGroupsPerMarket>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/productgroups`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IProductGroupsPerMarket);
                }
            });
        });
    }
}



