/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 15 August 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular for Routing in Action
;===========================================
*/

// Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

// Create variable routes
const routes: Routes = [
  {
    path: '',
    component: ComposerListComponent
  },
  {
    path: 'home',
    component: ComposerListComponent
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
