import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType308,ISwaggerInlineType328,ISwaggerInlineType365,IbaseDashboard,ISwaggerInlineType382,ISwaggerInlineType402,ISwaggerInlineType422,ISwaggerInlineType442,ISwaggerInlineType464,ISwaggerInlineType484,ISwaggerInlineType485,ISwaggerInlineType493,ISwaggerInlineType500,ISwaggerInlineType508,ISwaggerInlineType516,ISwaggerInlineType525 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class DashboardsHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Get a user's dashboards
     * The **get dashboards** endpoint provides access to a
     * specified user's dashboards in their stored format as
     * `JSON` objects.
     * <br/>It's results can be filtered by parameters such as
     * dashboard name, parent folder, or datasource.
     * <br/><br/>The expandable fields for the dashboard object
     * are `widgets`, `parentFolder`, `userAuth`, `rule` and
     * `owner`.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } parentFolder Parent folder ID to filter by
     * @param { string } name Name to filter by
     * @param { string } datasourceTitle Datasource name to filter by
     * @param { string } datasourceAddress Datasource address to filter by
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } expand List of fields that should be expanded (substitures their
     *        IDs with actual objects). May be nested using the
     *        `resource.subResource` format
     */
    public getOwnedDashboards(
         authorization:string ,
         parentFolder:string ,
         name:string ,
         datasourceTitle:string ,
         datasourceAddress:string ,
         fields:string ,
         expand:string ):Promise<Array<ISwaggerInlineType308>>{
        const params = {
            "parentFolder":parentFolder,
            "name":name,
            "datasourceTitle":datasourceTitle,
            "datasourceAddress":datasourceAddress,
            "fields":fields,
            "expand":expand
        };
        return new Promise<Array<ISwaggerInlineType308>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dashboards`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType308>);
                }
            });
        });
    }
    /**
     * Add a new dashboard
     * The **add dashboard** endpoint reveives a dashboard object
     * and adds it to the user's dashboards.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType328 } dashboard Basic dashboard object to be added
     */
    public addDashboard(
         authorization:string ,
         dashboard:ISwaggerInlineType328 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    /**
     * Get a dashboards as .dash file
     * The **export dashboards** endpoint returns the dashboards
     * `JSON` content in a `.dash` file, which can be imported
     * into nonsense.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<string> } dashboardIds Dashboard IDs to export
     */
    public exportDashboardsAsDASH(
         authorization:string ,
         dashboardIds:Array<string> ):Promise<string>{
        const params = {
            "dashboardIds":dashboardIds
        };
        return new Promise<string>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dashboards/export`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as string);
                }
            });
        });
    }
    /**
     * Delete dashboards
     * The **delete dashboards** endpoint deletes dashboards with
     * the provided IDs.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<string> } dashboardIds The IDs of the dashboards to delete
     */
    public removeDashboardsBulk(
         authorization:string ,
         dashboardIds:Array<string> ):Promise<void>{
        const params = {
            "dashboardIds":dashboardIds
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/dashboards/bulk`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    /**
     * Import a dashboard
     * The **import dashboard** endpoint receives a `.dash` file
     * containing a nonsense dashboard and creates it in the
     * user's dashboards.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType365 } dashboard Basic dashboard object to be added
     * @param { string } importFolder The folder to add the imported dashboard to
     */
    public importDashboard(
         authorization:string ,
         dashboard:ISwaggerInlineType365 ,
         importFolder:string ):Promise<void>{
        const params = {
            "importFolder":importFolder
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards/import`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    /**
     * Import dashboards
     * The **import dashboard** endpoint receives a `.dash` file
     * containing dashboards and adds those dashboards to the
     * user's Dashboard list.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<IbaseDashboard> } dashboards Basic dashboard object to be added
     * @param { string } action Determines if the existing dashboard should be overwritten.
     *        <br/>**skip**: The existing dashboard is not overwritten.
     *        <br/>**overwrite**: The existing dashboard is overwritten.
     *        <br/>**duplicate**: A new copy of the existing dashboard is
     *        created on the target server.
     * @param { boolean } republish Republish dashboards on target server after copying (only
     *        affects overwritten dashboards that were previously shared
     *        on the target server)
     * @param { string } importFolder The folder to add the imported dashboard to
     */
    public importDashboardBulk(
         authorization:string ,
         dashboards:Array<IbaseDashboard> ,
         action:string ,
         republish:boolean ,
         importFolder:string ):Promise<void>{
        const params = {
            "action":action,
            "republish":republish,
            "importFolder":importFolder
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards/import/bulk`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    /**
     * Get a specific dashboard
     * The **get dashboard by ID** endpoint returns a specific
     * dashboard object by ID.<br/><br/>The expandable fields for
     * the dashboard object are `widgets`, `parentFolder`,
     * `userAuth` and `owner`.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard to get
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } expand List of fields that should be expanded (substitures their
     *        IDs with actual objects). May be nested using the
     *        `resource.subResource` format
     */
    public getDashboardById(
         authorization:string ,
         id:string ,
         fields:string ,
         expand:string ):Promise<ISwaggerInlineType382>{
        const params = {
            "fields":fields,
            "expand":expand
        };
        return new Promise<ISwaggerInlineType382>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dashboards/${encodeURIComponent(id)}`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType382);
                }
            });
        });
    }
    /**
     * Delete a dashboard
     * The **delete dashboard** endpoint deletes a dashboard with
     * the provided ID.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard to delete
     */
    public removeDashboard(
         authorization:string ,
         id:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/dashboards/${encodeURIComponent(id)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    /**
     * Update a dashboard
     * The **update dashboard** endpoint will perform a partial
     * update on the dashboard of the provided ID, updating the
     * fields in the dashboard object provided in the body.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard to update
     * @param { ISwaggerInlineType422 } dashboard The partial dashboard object who's fields will be updated
     */
    public updateDashboard(
         authorization:string ,
         id:string ,
         dashboard:ISwaggerInlineType422 ):Promise<ISwaggerInlineType402>{
        return new Promise<ISwaggerInlineType402>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/dashboards/${encodeURIComponent(id)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType402);
                }
            });
        });
    }
    /**
     * Check whether a specific dashboard exists
     * The **dashboard exists** endpoint checks whether a
     * dashboard with the provided ID exists.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard
     */
    public doesDashboardExist(
         authorization:string ,
         id:string ):Promise<ISwaggerInlineType442>{
        return new Promise<ISwaggerInlineType442>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dashboards/${encodeURIComponent(id)}/exists`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType442);
                }
            });
        });
    }
    /**
     * Get a dashboard as .dash file
     * The **export dashboard to `.dash` file** endpoint returns
     * the dashboard's `JSON` in a `.dash` file that can be later
     * imported into nonsense.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard to export
     */
    public exportDashboardAsDASH(
         authorization:string ,
         id:string ):Promise<string>{
        return new Promise<string>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dashboards/${encodeURIComponent(id)}/export/dash`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as string);
                }
            });
        });
    }
    /**
     * Get a dashboard as .png image
     * The **export dashboard to `.png`** endpoind returns the
     * requested dashboard rendered as a `.png` image file.
     * <br/>It can be configured to export images of different
     * width, and to include or exclude certain parts (such as
     * dashboard filters).
     * <br/>Note that dashboards rendered this way have a
     * different layout to dashboards displayed in the
     * application, called the reporting layout.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard to export
     * @param { boolean } includeTitle Should dashboard title be included in the exported file
     * @param { boolean } includeFilters Should dashboard filters be included in the exported file
     * @param { boolean } includeDs Should dashboard datasource info be included in the
     *        exported file
     * @param { string } width Render width in pixels
     */
    public exportDashboardAsPNG(
         authorization:string ,
         id:string ,
         includeTitle:boolean ,
         includeFilters:boolean ,
         includeDs:boolean ,
         width:string ):Promise<string>{
        const params = {
            "includeTitle":includeTitle,
            "includeFilters":includeFilters,
            "includeDs":includeDs,
            "width":width
        };
        return new Promise<string>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dashboards/${encodeURIComponent(id)}/export/png`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as string);
                }
            });
        });
    }
    /**
     * Get a dashboard as .pdf file
     * The **export dashboard to `.pdf`** endpoind returns the
     * requested dashboard rendered as a `.pdf` document file.
     * <br/>It can be configured to export PDFs of different paper
     * sizes, orientation, as well as to include or exclude
     * certain parts (such as dashboard filters).
     * <br/>Note that dashboards rendered this way have a
     * different layout to dashboards displayed in the
     * application, and can be either the **as is** layout (the
     * reporting layout) or the **feed** layout which puts each
     * widget in it's own line.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard to export
     * @param { string } paperFormat What paper format should be used while rendering the
     *        dashboard
     * @param { string } paperOrientation What paper orientation should be used while rendering the
     *        dashboard
     * @param { string } layout What layout should be used while rendering the dashboard,
     *        *as is* or *feed*
     * @param { boolean } includeTitle Should dashboard title be included in the exported file
     * @param { boolean } includeFilters Should dashboard filters be included in the exported file
     * @param { boolean } includeDs Should dashboard datasource info be included in the
     *        exported file
     * @param { string } widgetid Widget Id (Use only for Table and Pivot Widgets)
     * @param { boolean } preview Should use a new Pixel Perfect Reporting
     * @param { number } rowCount Count of Table/Pivot rows to export
     * @param { boolean } showTitle Should Table/Pivot Widget title be included in the exported
     *        file
     * @param { boolean } showFooter Should Table/Pivot Widget footer be included in the
     *        exported file
     * @param { string } title Table/Pivot Widget title text in the exported file
     * @param { string } titleSize Table/Pivot widget title size in the exported file
     * @param { string } titlePosition Table/Pivot widget title position in the exported file
     */
    public exportDashboardAsPDF(
         authorization:string ,
         id:string ,
         paperFormat:string ,
         paperOrientation:string ,
         layout:string ,
         includeTitle:boolean ,
         includeFilters:boolean ,
         includeDs:boolean ,
         widgetid:string ,
         preview:boolean ,
         rowCount:number ,
         showTitle:boolean ,
         showFooter:boolean ,
         title:string ,
         titleSize:string ,
         titlePosition:string ):Promise<string>{
        const params = {
            "paperFormat":paperFormat,
            "paperOrientation":paperOrientation,
            "layout":layout,
            "includeTitle":includeTitle,
            "includeFilters":includeFilters,
            "includeDs":includeDs,
            "widgetid":widgetid,
            "preview":preview,
            "rowCount":rowCount,
            "showTitle":showTitle,
            "showFooter":showFooter,
            "title":title,
            "titleSize":titleSize,
            "titlePosition":titlePosition
        };
        return new Promise<string>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dashboards/${encodeURIComponent(id)}/export/pdf`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as string);
                }
            });
        });
    }
    /**
     * Get a dashboard as .pdf file on behind of user
     * The **export dashboard to `.pdf`** endpoind returns the
     * requested dashboard rendered as a `.pdf` document file.
     * <br/>It can be configured to export PDFs of different paper
     * sizes, orientation, as well as to include or exclude
     * certain parts (such as dashboard filters).
     * <br/>Note that dashboards rendered this way have a
     * different layout to dashboards displayed in the
     * application, and can be either the **as is** layout (the
     * reporting layout) or the **feed** layout which puts each
     * widget in it's own line.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard to export
     * @param { string } userId The ID of the dashboard to export
     * @param { boolean } includeTitle Should dashboard title be included in the exported file
     * @param { boolean } includeFilters Should dashboard filters be included in the exported file
     * @param { boolean } includeDs Should dashboard datasource info be included in the
     *        exported file
     * @param { string } paperFormat What paper format should be used while rendering the
     *        dashboard
     * @param { string } paperOrientation What paper orientation should be used while rendering the
     *        dashboard
     * @param { string } layout What layout should be used while rendering the dashboard,
     *        *as is* or *feed*
     * @param { Array<any> } filters custom filters array to be added to the dashboard
     */
    public exportDashboardAsPDFonBehalfUser(
         authorization:string ,
         id:string ,
         userId:string ,
         includeTitle:boolean ,
         includeFilters:boolean ,
         includeDs:boolean ,
         paperFormat:string ,
         paperOrientation:string ,
         layout:string ,
         filters:Array<any> ):Promise<string>{
        const params = {
            "userId":userId,
            "includeTitle":includeTitle,
            "includeFilters":includeFilters,
            "includeDs":includeDs,
            "paperFormat":paperFormat,
            "paperOrientation":paperOrientation,
            "layout":layout
        };
        return new Promise<string>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards/${encodeURIComponent(id)}/export/pdf`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as string);
                }
            });
        });
    }
    /**
     * Duplicate a dashboard
     * The **duplicate dashboard** endpoint creates a new
     * dashboard based on an existing dashboard of the provided ID.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard to duplicate
     */
    public duplicateDashboard(
         authorization:string ,
         id:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards/${encodeURIComponent(id)}/duplicate`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    /**
     * Change dashboard owner
     * The **change owner** endpoint updates the owner of any
     * dashboard according to the dashboard ID.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard to update
     * @param { ISwaggerInlineType484 } ownerData Object with the ID of new owner of a dashboard
     */
    public changeDashboardOwner(
         authorization:string ,
         id:string ,
         ownerData:ISwaggerInlineType484 ):Promise<ISwaggerInlineType464>{
        return new Promise<ISwaggerInlineType464>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards/${encodeURIComponent(id)}/change_owner`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType464);
                }
            });
        });
    }
    /**
     * Publishes a dashboard
     * The **publish dashboard** endpoint publishes the dashboard
     * to all shared recipients. <br/>Setting the 'force'
     * parameter to 'true' will forcefully replace the recipients'
     * dashboard.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard to publish
     * @param { boolean } force When set to 'false' the recipient must click 'Restore
     *        dashboard' to retrieve the published version. When set to
     *        'true' the publisehd dashboard will override the
     *        recipient's local copy immediately.
     */
    public publishDashboard(
         authorization:string ,
         id:string ,
         force:boolean ):Promise<void>{
        const params = {
            "force":force
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards/${encodeURIComponent(id)}/publish`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    /**
     * Publishes dashboards
     * The **publish dashboards** endpoint publishes the dashboard
     * to all shared recipients. <br/>Setting the 'force'
     * parameter to 'true' will forcefully replace the recipients'
     * dashboard.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { Array<string> } ids The IDs of the dashboards to publish
     * @param { boolean } force When set to 'false' the recipient must click 'Restore
     *        dashboard' to retrieve the published version. When set to
     *        'true' the publisehd dashboard will override the
     *        recipient's local copy immediately.
     */
    public publishDashboardBulk(
         authorization:string ,
         ids:Array<string> ,
         force:boolean ):Promise<void>{
        const params = {
            "ids":ids,
            "force":force
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards/publish/bulk`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    /**
     * Restores a dashboard
     * The **restore dashboard** endpoint restores the dashboard
     * to the last version published by the dashboard owner. All
     * local changes to the dashboard will be overridden.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard to publish
     */
    public restoreDashboard(
         authorization:string ,
         id:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards/${encodeURIComponent(id)}/restore`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    /**
     * Restores a dashboard
     * The **undo import dashboard** endpoint restores the
     * dashboard to the last backup that performed before the last
     * import. All local changes to the dashboard will be
     * overridden.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } id The ID of the dashboard to restore
     */
    public undoImportDashboard(
         authorization:string ,
         id:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards/${encodeURIComponent(id)}/undo_Import`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    /**
     * Get a dashboard's widgets
     * The **get dashboard widgets** endpoint returns an array of
     * a dashboard's widgets.
     * <br/>The result can be filtered by different parameters
     * such as the widget type or title.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } dashboardId The ID of the dashboard to get
     * @param { string } title Widget title to filter by
     * @param { string } type Widget type to filter by
     * @param { string } subtype Widget sub-type to filter by
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     * @param { string } sort Field by which the results should be sorted. Ascending by
     *        default, descending if prefixed by `-`
     * @param { number } skip Number of results to skip from the start of the data set.
     *        skip is to be used with the `limit` parameter for paging
     * @param { number } limit How many results should be returned. limit is to be used
     *        with the `skip` parameter for paging
     */
    public getDashboardWidgets(
         authorization:string ,
         dashboardId:string ,
         title:string ,
         type:string ,
         subtype:string ,
         fields:string ,
         sort:string ,
         skip:number ,
         limit:number ):Promise<Array<ISwaggerInlineType485>>{
        const params = {
            "title":title,
            "type":type,
            "subtype":subtype,
            "fields":fields,
            "sort":sort,
            "skip":skip,
            "limit":limit
        };
        return new Promise<Array<ISwaggerInlineType485>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dashboards/${encodeURIComponent(dashboardId)}/widgets`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType485>);
                }
            });
        });
    }
    /**
     * Add a new widget to a dashboard
     * The **add widget to dashboard** endpoint adds the provided
     * widget object to the dashboard of the given ID.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } dashboardId The ID of the dashboard to add the widget to
     * @param { ISwaggerInlineType493 } widget Basic widget object to be added to the dashboard
     */
    public addDashboardWidget(
         authorization:string ,
         dashboardId:string ,
         widget:ISwaggerInlineType493 ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards/${encodeURIComponent(dashboardId)}/widgets`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    /**
     * Get a specific widget from a dashboard
     * The **get dashboard widget by ID** endpoint returns a
     * specific widget (by ID) from a specific dashboard.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } dashboardId The ID of the dashboard containing the widget
     * @param { string } id The ID of the widget to get
     * @param { string } fields Whitelist of fields to return for each document. fields Can
     *        also define which fields to exclude by prefixing field
     *        names with `-`
     */
    public getDashboardWidgetById(
         authorization:string ,
         dashboardId:string ,
         id:string ,
         fields:string ):Promise<ISwaggerInlineType500>{
        const params = {
            "fields":fields
        };
        return new Promise<ISwaggerInlineType500>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dashboards/${encodeURIComponent(dashboardId)}/widgets/${encodeURIComponent(id)}`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType500);
                }
            });
        });
    }
    /**
     * Delete a widget
     * The **delete widget** endpoint deletes a widget with the
     * provided ID from it's dashboard.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } dashboardId The ID of the dashboard containing the widget
     * @param { string } id The ID of the widget to delete
     */
    public removeDashboardWidget(
         authorization:string ,
         dashboardId:string ,
         id:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/dashboards/${encodeURIComponent(dashboardId)}/widgets/${encodeURIComponent(id)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    /**
     * Partially update a widget
     * The **update widget** endpoint will perform a partial
     * update on the dashboard's widget of the provided ID,
     * updating the fields with the widget object provided in the
     * body.
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } dashboardId The ID of the dashboard containing the widget
     * @param { string } id The ID of the widget to update
     * @param { ISwaggerInlineType516 } widget The partial widget object who's fields will be updated
     */
    public updateDashboardWidget(
         authorization:string ,
         dashboardId:string ,
         id:string ,
         widget:ISwaggerInlineType516 ):Promise<ISwaggerInlineType508>{
        return new Promise<ISwaggerInlineType508>((resolve, reject) => {
            superAgentRequest
            .patch(this.baseUrl + `/dashboards/${encodeURIComponent(dashboardId)}/widgets/${encodeURIComponent(id)}`)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as ISwaggerInlineType508);
                }
            });
        });
    }
    /**
     * Get a specific widget as .png image
     * The **export widget to `.png`** endpoint returns a
     * specified widget rendered as a `.png` image.
     * <br/>The desired output image size (height & width) must be
     * specified.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { string } dashboardId The ID of the dashboard containing the widget
     * @param { string } id The ID of the widget to export
     * @param { string } width Render width in pixels
     * @param { string } height Render height in pixels
     */
    public exportDashboardWidgetAsPNG(
         authorization:string ,
         dashboardId:string ,
         id:string ,
         width:string ,
         height:string ):Promise<string>{
        const params = {
            "width":width,
            "height":height
        };
        return new Promise<string>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/dashboards/${encodeURIComponent(dashboardId)}/widgets/${encodeURIComponent(id)}/export/png`)
            .query(params)
            .set("authorization",authorization)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as string);
                }
            });
        });
    }
    /**
     * Copy dashboard to server
     * The **copy dashboards to server** endpoint copies the
     * seleteced dashboards to a remote nonsense server.
     * 
     * @param { string } authorization The user's API token preceded by the keyword `Bearer `
     *        (with space between it and the token). For more
     *        information, see [API
     *        tutorial](http://developer.nonsense.com/display/API2/Using+the+REST+API).
     * @param { ISwaggerInlineType525 } copyRequest The copy request object
     * @param { boolean } republish Republish dashboards on target server after copying
     *        (only affects overwritten dashboards that were previously
     *        shared at target server)
     *        
     * @param { boolean } force Continute despite of nonsense versions incompatability
     */
    public copyDashboardsToServer(
         authorization:string ,
         copyRequest:ISwaggerInlineType525 ,
         republish:boolean ,
         force:boolean ):Promise<void>{
        const params = {
            "republish":republish,
            "force":force
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/dashboards/copy`)
            .query(params)
            .set("authorization",authorization)
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



