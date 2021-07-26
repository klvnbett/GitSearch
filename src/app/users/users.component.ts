import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../models/user';
import { Repos } from '../models/repos';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user!: User;
  repo!: Repos;
  constructor(public myService: UserserviceService, private repoService: UserserviceService) {
  }
  searchs(searchName: any) {
    this.myService.searchUSer(searchName).then(
      (success) => {
        this.user = this.myService.foundUser;
      },
      (error) => {
        console.log(error)
      }
    );
    this.repoService.getRepos(searchName).then(
      (results:any) => {
        this.repo = this.repoService.allRepos
        console.log(this.repo);
      },
      (error:any) => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.searchs('klvnbett');
  }
}