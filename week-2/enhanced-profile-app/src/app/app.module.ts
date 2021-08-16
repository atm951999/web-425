/*
============================================
; Title: Assignment 2.3
; Author: Professor Krasso
; Date: 15 August 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular for data binding
;===========================================
*/

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// Export AppModule
export class AppModule { }
