/*
============================================
; Title: Assignment 2.2
; Author: Professor Krasso
; Date: 15 August 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular for navigating
;===========================================
*/

// Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// Create routes variable
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Export AppRoutingModule
export class AppRoutingModule { }
