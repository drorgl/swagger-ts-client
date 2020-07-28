import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { ISwaggerInlineType810,ISwaggerInlineType811 } from "./types";

/*
    nonsense API 1.0
    


    
*/


export class DatasourcesHttpSvc {
    constructor(private baseUrl:string  = "/api/v1"){

    }

    /**
     * Search dimensions of datasource
     * The **search fields** endpoint returns list of dimensions
     * that datasource contains. Currently only live datasources
     * are supported
     * 
     * @param { string } datasource full name of the datasource
     * @param { ISwaggerInlineType811 } body 
     */
    public searchFields(
         datasource:string ,
         body:ISwaggerInlineType811 ):Promise<Array<ISwaggerInlineType810>>{
        return new Promise<Array<ISwaggerInlineType810>>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/datasources/${encodeURIComponent(datasource)}/fields/search`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<ISwaggerInlineType810>);
                }
            });
        });
    }
}



