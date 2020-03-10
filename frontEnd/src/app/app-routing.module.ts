import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DeveloperAddComponent} from './developer-add/developer-add.component';
import {DeveloperEditComponent} from './developer-edit/developer-edit.component';
import {DeveloperGetComponent} from './developer-get/developer-get.component';
import {HomeComponent} from './home/home.component';
import {GraphicComponent} from './graphic/graphic.component';



const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'developer/graphic',
    component:GraphicComponent
  },
  {
    path:'developer',
    component:DeveloperGetComponent
  },
  {
    path:'developer/create',
    component:DeveloperAddComponent
  },
  {
    path:'developer/edit/:id',
    component:DeveloperEditComponent
  },
  {
    path:'developer/create/list',
    component:DeveloperGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
