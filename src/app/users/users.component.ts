import {Component, OnInit} from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {User} from '../models/user';
import { Repos } from '../models/repos';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user!: User;
repo!: Repos;
  constructor(public myService: UserserviceService, public repoService: UserserviceService) {
  }

  searchs(searchName:any) {
    this.myService.searchUSer(searchName).then(
      (success)=>{
        this.user = this.myService.foundUser;
      },
      (error)=>{
        console.log(error)
      }
    );
      this.repoService.getRepos(searchName).then(
        (success)=>{
          this.repo =this.repoService.allRepos
          console.log(this.repo);
        },
        (error)=>{
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.searchs('klvnbett');
  }
}
