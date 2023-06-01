import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListResourceComponent } from './list-resource/list-resource.component';
import { SingleResourceComponent } from './single-resource/single-resource.component';

const routes: Routes = [
  {path: '', component: ListResourceComponent, pathMatch: 'full'},
  {path: ':id', component: SingleResourceComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourceRoutingModule { }
