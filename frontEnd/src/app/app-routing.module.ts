import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DeveloperAddComponent} from './developer-add/developer-add.component';
import {DeveloperEditComponent} from './developer-edit/developer-edit.component';
import {DeveloperGetComponent} from './developer-get/developer-get.component';


const routes: Routes = [
  {
    path:'developer',
    component:DeveloperGetComponent
  },
  {
    path:'developer/create',
    component:DeveloperAddComponent
  },
  {
    path:'developer/edit',
    component:DeveloperEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
