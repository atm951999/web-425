/*
============================================
; Title: Assignment 5.3
; Author: Professor Krasso
; Date: 05 September 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular.
===========================================
*/

// Imports
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment
  title = 'in-n-out-booksp1';

  constructor() {
    this.assignment = "Exercise 5.3 - Data Tables"
  }
}
