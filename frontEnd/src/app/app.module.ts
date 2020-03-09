import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperAddComponent } from './developer-add/developer-add.component';
import { DeveloperEditComponent } from './developer-edit/developer-edit.component';
import { DeveloperGetComponent } from './developer-get/developer-get.component';
import {HttpClientModule} from '@angular/common/http';

import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';
import {DeveloperService} from './developer.service';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperAddComponent,
    DeveloperEditComponent,
    DeveloperGetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule.forRoot(),
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DeveloperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
