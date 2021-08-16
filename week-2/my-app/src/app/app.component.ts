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

// Import Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Export AppComponent
export class AppComponent {
  title = 'my-app';
}
