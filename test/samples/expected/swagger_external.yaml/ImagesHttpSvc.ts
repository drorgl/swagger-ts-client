import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IVehicleImageResponse,IComponentsImagesResponse,IEngineImageResponse,IRimImageResponse,ITrimImageResponse,IPaintImageResponse,IUpholsteryImageResponse,IAllEquipmentImagesResponse,IEquipmentImageResponse } from "./types";

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


export class ImagesHttpSvc {
    constructor(private baseUrl:string  = "https://api.arik-benz.com/configurator_tryout/v1"){

    }

    /**
     * Returns URLs pointing to PNG images of a vehicle with a
     * white background.
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
     * @param { string } perspectives One or more perspectives as a comma separated String list
     *        e.g. 'EXT000,EXT010,INT1'.  The following perspectives are
     *        available:
     *        * EXT000-EXT350: EXT000 defines the front view, EXT010
     *        defines a rotation of 10 degress and so forth.
     *        * INT1-INT4: These are the 4 available interior
     *        perspectives.
     *        
     *        The default value is EXT020,INT1 if no value is provided.
     * @param { boolean } roofOpen Set 'true', if you are looking for images with the roof
     *        open. This option is only valid for cabrios. Default is
     *        'false'.
     * @param { boolean } night Set 'true', if you are looking for images with a darker
     *        background and the vehicle's headlights turned on. Default
     *        is 'false'.
     */
    public imageVehicleGET(
         marketId:string ,
         modelId:string ,
         configurationId:string ,
         perspectives:string ,
         roofOpen:boolean ,
         night:boolean ):Promise<IVehicleImageResponse>{
        const params = {
            "perspectives":perspectives,
            "roofOpen":roofOpen,
            "night":night
        };
        return new Promise<IVehicleImageResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}/configurations/${encodeURIComponent(configurationId)}/images/vehicle`)
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
     * Returns URLs pointing to images in JPG format in the
     * highest available resolution (depending on the component)
     * of the vehicle's:
     * * engine (1024x576 px),
     * * rim (710x710 px),
     * * trim (800x600 px),
     * * paints (800x600 px),
     * * upholstery (800x600 px) and
     * * equipments (740x416 px).
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
     */
    public imageComponentsGET(
         marketId:string ,
         modelId:string ,
         configurationId:string ):Promise<IComponentsImagesResponse>{
        return new Promise<IComponentsImagesResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}/configurations/${encodeURIComponent(configurationId)}/images/components`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IComponentsImagesResponse);
                }
            });
        });
    }
    /**
     * Returns a URL pointing to an image of the vehicles engine.
     * These images are available in the resolution 1024x576 px.
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
     */
    public imageComponentsEngineGET(
         marketId:string ,
         modelId:string ,
         configurationId:string ):Promise<IEngineImageResponse>{
        return new Promise<IEngineImageResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}/configurations/${encodeURIComponent(configurationId)}/images/components/engine`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IEngineImageResponse);
                }
            });
        });
    }
    /**
     * Returns a URL pointing to an image of the vehicles rim.
     * These images are available in the resolution 710x710 px.
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
     */
    public imageComponentsRimGET(
         marketId:string ,
         modelId:string ,
         configurationId:string ):Promise<IRimImageResponse>{
        return new Promise<IRimImageResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}/configurations/${encodeURIComponent(configurationId)}/images/components/rim`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IRimImageResponse);
                }
            });
        });
    }
    /**
     * Returns a URL pointing to an image of this vehicles trim.
     * These images are available in resolution 800x600 px.
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
     */
    public imageComponentsTrimGET(
         marketId:string ,
         modelId:string ,
         configurationId:string ):Promise<ITrimImageResponse>{
        return new Promise<ITrimImageResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}/configurations/${encodeURIComponent(configurationId)}/images/components/trim`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ITrimImageResponse);
                }
            });
        });
    }
    /**
     * Returns URLs pointing to images of this vehicles paint.
     * These images are available in resolution 800x600 px.  Note
     * there might be two paints (e.g. Smart, 'paint' for body
     * panel and 'paint2' for the tridion cell)
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
     */
    public imageComponentsPaintGET(
         marketId:string ,
         modelId:string ,
         configurationId:string ):Promise<IPaintImageResponse>{
        return new Promise<IPaintImageResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}/configurations/${encodeURIComponent(configurationId)}/images/components/paint`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IPaintImageResponse);
                }
            });
        });
    }
    /**
     * Returns URLs pointing to images of the vehicle's
     * upholsteries. Tge images are available in the highest
     * possible resolution (usually 800x600 px).
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
     */
    public imageComponentsUpholsteryGET(
         marketId:string ,
         modelId:string ,
         configurationId:string ):Promise<IUpholsteryImageResponse>{
        return new Promise<IUpholsteryImageResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}/configurations/${encodeURIComponent(configurationId)}/images/components/upholstery`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IUpholsteryImageResponse);
                }
            });
        });
    }
    /**
     * Returns URLs pointing to images of this vehicle's
     * equipments. The images are available in the highest
     * possible resolution (usually 740x416 px).
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
     */
    public imageComponentsEquipmentsGET(
         marketId:string ,
         modelId:string ,
         configurationId:string ):Promise<IAllEquipmentImagesResponse>{
        return new Promise<IAllEquipmentImagesResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}/configurations/${encodeURIComponent(configurationId)}/images/components/equipments`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IAllEquipmentImagesResponse);
                }
            });
        });
    }
    /**
     * Returns URLs pointing to images of this vehicle's
     * equipments. The images are available in the highest
     * possible resolution (usually 740x416 px).
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
     * @param { string } componentCode The value of the requested component group, e.g. '245'.
     */
    public imageComponentsEquipmentsByCodeGET(
         marketId:string ,
         modelId:string ,
         configurationId:string ,
         componentCode:string ):Promise<IEquipmentImageResponse>{
        return new Promise<IEquipmentImageResponse>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/markets/${encodeURIComponent(marketId)}/models/${encodeURIComponent(modelId)}/configurations/${encodeURIComponent(configurationId)}/images/components/equipments/${encodeURIComponent(componentCode)}`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IEquipmentImageResponse);
                }
            });
        });
    }
}



