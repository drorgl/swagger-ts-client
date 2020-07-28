import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IPets } from "./types";

/*
    Swagger Petstore 1.0.0
    

    License:
    MIT
    


    
*/


export class PetsHttpSvc {
    constructor(private baseUrl:string  = "http://petstore.swagger.io/v1"){

    }

    /**
     * List all pets
     * @param { number } limit How many items to return at one time (max 100)
     */
    public listPets(
         limit:number ):Promise<IPets>{
        const params = {
            "limit":limit
        };
        return new Promise<IPets>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/pets`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IPets);
                }
            });
        });
    }
    /**
     * Create a pet
     */
    public createPets(
        ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/pets`)
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
     * Info for a specific pet
     * @param { string } petId The id of the pet to retrieve
     */
    public showPetById(
         petId:string ):Promise<IPets>{
        return new Promise<IPets>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/pets/${encodeURIComponent(petId)}`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IPets);
                }
            });
        });
    }
}



