/*
============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 05 September 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular.
===========================================
*/

// Import
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
    this.assignment = "Exercise 6.2 - Output Properties"
  }
}
