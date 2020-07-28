import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";

/*
    Swagger Petstore 1.0.0
    

    License:
    MIT
    


    
*/


export class PetsHttpSvc {
    constructor(private baseUrl:string ){

    }

    /**
     * List all pets
     * @param { number } limit How many items to return at one time (max 100)
     */
    public listPets(
         limit:number ):Promise<void>{
        const params = {
            "limit":limit
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/pets`)
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
         petId:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/pets/${petId}`)
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



