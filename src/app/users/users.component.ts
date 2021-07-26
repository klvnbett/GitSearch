import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Repos } from '../models/repos';
import { User } from '../models/user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user!:User;
  repo!:Repos;

  constructor(public myService:UserserviceService,private repoService:UserserviceService) { }
  searchs(searchName:any){
    this.myService.searchUser(searchName).then(
      (success)=>{
        this.user=this.myService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
      
    );
    this.repoService.getRepos(searchName).then(
      (results:any)=>{
        this.repoService.allRepos
        console.log(this.repo);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.searchs('klvnbett');
  }

}
