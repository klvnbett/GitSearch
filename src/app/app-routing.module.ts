import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"user-profile",component:UsersComponent},
  {path:"searchRepo",component:RepositoriesComponent},
  {path:'',redirectTo:"/user-profile",pathMatch:"full"},
  {path:"**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
