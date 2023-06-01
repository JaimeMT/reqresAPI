import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { SingleUserComponent } from './single-user/single-user.component';

const routes: Routes = [
  {path: '', component: ListUserComponent},
  {path: ':id', component: SingleUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
