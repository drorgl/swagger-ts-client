import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IPet,INewPet } from "./types";

/*
    Swagger Petstore 1.0.0
    A sample API that uses a petstore as an example to
    demonstrate features in the swagger-2.0 specification
    
    Contact:
    Swagger API Team
    
    

    License:
    MIT
    

    Terms of Service:
    http://swagger.io/terms/

    
*/


export class AllOperations {
    constructor(private baseUrl:string  = "http://petstore.swagger.io/api"){

    }

    /**
     * Returns all pets from the system that the user has access to
     * @param { Array<string> } tags tags to filter by
     * @param { number } limit maximum number of results to return
     */
    public findPets(
         tags:Array<string> ,
         limit:number ):Promise<Array<IPet>>{
        const params = {
            "tags":tags,
            "limit":limit
        };
        return new Promise<Array<IPet>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/pets`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<IPet>);
                }
            });
        });
    }
    /**
     * Creates a new pet in the store.  Duplicates are allowed
     * @param { INewPet } pet Pet to add to the store
     */
    public addPet(
         pet:INewPet ):Promise<IPet>{
        return new Promise<IPet>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/pets`)
            .send(pet)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IPet);
                }
            });
        });
    }
    /**
     * Returns a user based on a single ID, if the user does not
     * have access to the pet
     * @param { number } id ID of pet to fetch
     */
    public findPetById(
         id:number ):Promise<IPet>{
        return new Promise<IPet>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/pets/${id}`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IPet);
                }
            });
        });
    }
    /**
     * deletes a single pet based on the ID supplied
     * @param { number } id ID of pet to delete
     */
    public deletePet(
         id:number ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .delete(this.baseUrl + `/pets/${id}`)
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



