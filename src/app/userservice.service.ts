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
  constructor() { }
}
