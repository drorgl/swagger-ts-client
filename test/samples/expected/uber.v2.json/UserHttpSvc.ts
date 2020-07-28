import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";
import { IProfile,IActivities } from "./types";

/*
    Uber API 1.0.0
    Move your app forward with the Uber API


    
*/


export class UserHttpSvc {
    constructor(private baseUrl:string  = "https://api.uber.com/v1"){

    }

    /**
     * User Profile
     * The User Profile endpoint returns information about the
     * Uber user that has authorized with the application.
     */
    public get_me(
        ):Promise<IProfile>{
        return new Promise<IProfile>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/me`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IProfile);
                }
            });
        });
    }
    /**
     * User Activity
     * The User Activity endpoint returns data about a user's
     * lifetime activity with Uber. The response will include
     * pickup locations and times, dropoff locations and times,
     * the distance of past requests, and information about which
     * products were requested.<br><br>The history array in the
     * response will have a maximum length based on the limit
     * parameter. The response value count may exceed limit,
     * therefore subsequent API requests may be necessary.
     * @param { number } offset Offset the list of returned results by this amount. Default
     *        is zero.
     * @param { number } limit Number of items to retrieve. Default is 5, maximum is 100.
     */
    public get_history(
         offset:number ,
         limit:number ):Promise<IActivities>{
        const params = {
            "offset":offset,
            "limit":limit
        };
        return new Promise<IActivities>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/history`)
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as IActivities);
                }
            });
        });
    }
}



