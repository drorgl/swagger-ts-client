import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IPet } from "./types";

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
     */
    public get_pets(
        ):Promise<Array<IPet>>{
        return new Promise<Array<IPet>>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/pets`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<IPet>);
                }
            });
        });
    }
}



