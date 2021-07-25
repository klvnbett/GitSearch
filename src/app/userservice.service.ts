import { Injectable } from '@angular/core';
import { User } from './models/user';
import { Repos } from './models/repos';
import { HttpClient} from '@angular/common/http';

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
      avatar_url:string;
      createdOn:Date;
    }
  }
}
