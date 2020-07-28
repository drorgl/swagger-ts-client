import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IVehicleConfiguration,IVehicleComponentTree,IVehicleAlternative } from "./types";

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


export class ConfigurationsHttpSvc {
    constructor(private baseUrl:string  = "https://api.arik-benz.com/configurator_tryout/v1"){

    }

    /**
     * Get the initial configuration for the given marketId and
     * modelId.
     * Get the initial `VehicleConfiguration` for the given
     * **marketId** and **modelId**.
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { string } modelId Minimal string that identifies a model e.g. '176042_002'.
     *        If no nationalSalesType is available, the modelId only
     *        consists of the baumuster e.g. '176042'.
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public modelConfigurationsGET(
         marketId:string ,
         modelId:string ,
         fieldsFilter:Array<string> ):Promise<IVehicleConfiguration>{
        const params = {
            "fieldsFilter":fieldsFilter
        };
        return new Promise<IVehicleConfiguration>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}/configurations/initial`)
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
    /**
     * Get the configuration for the given marketId, modelId and
     * configurationId.
     * Get the `VehicleConfiguration` for the given **marketId**,
     * **modelId** and **configurationId**.
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { string } modelId Minimal string that identifies a model e.g. '176042_002'.
     *        If no nationalSalesType is available, the modelId only
     *        consists of the baumuster e.g. '176042'.
     * @param { string } configurationId Minimal string that identifies a configuration e.g.
     *        'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'.
     *        A codeType is only once within the configurationId e.g
     *        'S-152-160-161' stands for the components with the
     *        componentId 'S-152', 'S-160' and 'S-161'. A new codeType is
     *        divided from the codes with a underscore e.g
     *        'S-152-160-161_I-953_L-696'.
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public modelConfigurationGET(
         marketId:string ,
         modelId:string ,
         configurationId:string ,
         fieldsFilter:Array<string> ):Promise<IVehicleConfiguration>{
        const params = {
            "fieldsFilter":fieldsFilter
        };
        return new Promise<IVehicleConfiguration>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}/configurations/${encodeURIComponent(configurationId)}`)
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
    /**
     * Get the selectable components for the given marketId,
     * modelId and configurationId.
     * Get the selectable `VehicleComponents` and the
     * `ComponentCategories` of the `VehicleConfiguration` for the
     * given **marketId**, **modelId** and **configurationId**.
     * Optional query param **componentType** may be used to
     * filter the result.
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { string } modelId Minimal string that identifies a model e.g. '176042_002'.
     *        If no nationalSalesType is available, the modelId only
     *        consists of the baumuster e.g. '176042'.
     * @param { string } configurationId Minimal string that identifies a configuration e.g.
     *        'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'.
     *        A codeType is only once within the configurationId e.g
     *        'S-152-160-161' stands for the components with the
     *        componentId 'S-152', 'S-160' and 'S-161'. A new codeType is
     *        divided from the codes with a underscore e.g
     *        'S-152-160-161_I-953_L-696'.
     * @param { Array<string> } componentTypes A list of component types separated by a comma case
     *        insensitive. If nothing is defined all component types are
     *        returned. Allowed values are:
     *        - WHEELS
     *        - PAINTS
     *        - UPHOLSTERIES
     *        - TRIMS
     *        - PACKAGES
     *        - LINES
     *        - SPECIAL_EDITION
     *        - SPECIAL_EQUIPMENT
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public modelConfigurationSelectablesGET(
         marketId:string ,
         modelId:string ,
         configurationId:string ,
         componentTypes:Array<string> ,
         fieldsFilter:Array<string> ):Promise<IVehicleComponentTree>{
        const params = {
            "componentTypes":componentTypes,
            "fieldsFilter":fieldsFilter
        };
        return new Promise<IVehicleComponentTree>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}/configurations/${encodeURIComponent(configurationId)}/selectables`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IVehicleComponentTree);
                }
            });
        });
    }
    /**
     * Get the alternatives for the given marketId, modelId,
     * configurationId and componentList.
     * Get the `VehicleAlternatives` for the given **marketId**,
     * **modelId** and **configurationId** and the given
     * **componentList** of changes.
     * @param { string } marketId This is a ISO 3166 language country string e.g. 'de_DE' or
     *        'en_GB'.
     * @param { string } modelId Minimal string that identifies a model e.g. '176042_002'.
     *        If no nationalSalesType is available, the modelId only
     *        consists of the baumuster e.g. '176042'.
     * @param { string } configurationId Minimal string that identifies a configuration e.g.
     *        'E-D15-D18-D41-D46-D49-D52-D53-D54-D59-D60-D71-F32-F36-F88-F98-G03-G05-G36-G56-I61-J53-J67-L08-M23-M70-N18-N62-N92-O76-Q29-Q56-Q79-Q92-S01-S05-S08-S63-S92-T05-T07-T62-T84-T88_I-953_L-696_P-001_S-152-160-161-171-258-290-292-294-351-360-411-440-442-470-472-475-485-520-533-538-560-570-573-580-584-58U-591-620-70B-808-888-893-B03-B16-K11-L18-R43-U60'.
     *        A codeType is only once within the configurationId e.g
     *        'S-152-160-161' stands for the components with the
     *        componentId 'S-152', 'S-160' and 'S-161'. A new codeType is
     *        divided from the codes with a underscore e.g
     *        'S-152-160-161_I-953_L-696'.
     * @param { string } componentList A string representing the changes, in other words a list of
     *        components that will be added and removed. The following
     *        syntax is used for the components to be added and the
     *        components to be removed. The added components e.g.
     *        '+I-950_L-890' and the removed components e.g.
     *        '-I-953_L-696' and the delimiter between the added and
     *        removed components is ','. In one components string
     *        '+I-950_L-890,-I-953_L-696'.
     * @param { Array<string> } fieldsFilter Specifies which fields should be included in the result. If
     *        this filter is not used, per default all fields are
     *        returned.
     */
    public modelConfigurationAlternativesGET(
         marketId:string ,
         modelId:string ,
         configurationId:string ,
         componentList:string ,
         fieldsFilter:Array<string> ):Promise<Array<IVehicleAlternative>>{
        const params = {
            "fieldsFilter":fieldsFilter
        };
        return new Promise<Array<IVehicleAlternative>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}/configurations/${encodeURIComponent(configurationId)}/alternatives/${encodeURIComponent(componentList)}`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<IVehicleAlternative>);
                }
            });
        });
    }
}



