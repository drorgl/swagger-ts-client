import * as superAgentRequest from "superagent";
import { Stream, PassThrough } from "stream";

/*
    Link Example 1.0.0
    


    
*/


export class AllOperations {
    constructor(private baseUrl:string ){

    }

    public getUserByName(
         username:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/2.0/users/${username}`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    public getRepositoriesByOwner(
         username:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/2.0/repositories/${username}`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    public getRepository(
         username:string ,
         slug:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/2.0/repositories/${username}/${slug}`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    public getPullRequestsByRepository(
         username:string ,
         slug:string ,
         state:string ):Promise<void>{
        const params = {
            "state":state
        };
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/2.0/repositories/${username}/${slug}/pullrequests`)
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
    public getPullRequestsById(
         username:string ,
         slug:string ,
         pid:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .get(this.baseUrl + `/2.0/repositories/${username}/${slug}/pullrequests/${pid}`)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }
    public mergePullRequest(
         username:string ,
         slug:string ,
         pid:string ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            superAgentRequest
            .post(this.baseUrl + `/2.0/repositories/${username}/${slug}/pullrequests/${pid}/merge`)
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



