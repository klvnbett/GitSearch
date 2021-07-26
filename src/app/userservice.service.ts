import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Repos } from './models/repos';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  foundUser:User;
  allRepos:Repos;
  constructor(private http:HttpClient) { 
    this.foundUser = new User("","","","",0,0,0,"",new Date);
    this.allRepos =new Repos("","","",new Date,0,0,"");
  }
  searchUser(searchName:string){
    interface Response{
      url:string;
      login:string;
      html_url:string;
      loc:string;
      reposits:number;
      followers:number;
      following:number;
      avataurl:string;
      createdOn:Date;
    }
    return new Promise((resolve:any,reject)=>{
      this.http.get<Response>('https://api.com/users/'+searchName+
      '?access_token='+environment.apiKey).toPromise().then(
        (result)=>{
          this.foundUser=result;
          console.log(this.foundUser);
          resolve();
        },
        (error)=>{
          console.log(error);
          reject();
        }
      );
    });
  }
  getRepos(searchName:any){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      count:number;
      createdOn:Date;
      lang:string;
    }
    return new Promise((resolve:any,reject)=>{
    this.http.get<Repos>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token"+environment.apiKey).toPromise().then(
      (results)=>{
        this.allRepos=results;
        resolve();
      },
      (error)=>{
        console.log(error);
        reject();
      }
    );
    });
  } 
    
    
 
}
