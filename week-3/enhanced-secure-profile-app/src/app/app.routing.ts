/*
============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 22 August 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular for guarding routes
;===========================================
*/

// Imports
import { SignInGuard } from './sign-in.guard';
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    canActivate: [SignInGuard],
    component: HomeComponent
  }
]
