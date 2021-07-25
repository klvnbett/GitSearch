import { Component, OnInit } from '@angular/core';
import { Repos } from '../models/repos';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user!:User;
  repo!:Repos;

  constructor() { }

  ngOnInit(): void {
  }

}
