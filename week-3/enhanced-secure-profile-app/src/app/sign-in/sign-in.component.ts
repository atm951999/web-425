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
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoggedIn = false
  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }
  signIn() {
    this.isLoggedIn = true
    this.router.navigate(['/home'], {queryParams: {isLoggedIn:this.isLoggedIn}, skipLocationChange: true})
  }


}


