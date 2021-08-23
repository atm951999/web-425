/*
============================================
; Title: Assignment 3.3
; Author: Professor Krasso
; Date: 22 August 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular for passing data to routes
;===========================================
*/

// Import Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Export AppComponent
export class AppComponent {
  'Secure Profile App' = true;
  assignment = 'Assignment - 2.3 - Data Binding';
}
