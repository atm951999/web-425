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

// Import
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

// Export Class AppComponent
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
