import { Task } from './../models/task.model';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TaskModule } from './task/task.module';
import { EventService } from '../services/EventService';
// import { provideHttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
