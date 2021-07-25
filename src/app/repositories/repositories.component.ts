import { Component, OnInit } from '@angular/core';
import { Repos } from '../models/repos';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repo!:Repos;;

  constructor(public repoService:UserserviceService) { }
  repoSearch(searchName){
    this.repoService.getRepos(searchName).then(
      (results)=>{
        this.repo=this.repoService.allRepos
        console.log(thius.repo);
      }
    )
  }

  ngOnInit(): void {
  }

}
