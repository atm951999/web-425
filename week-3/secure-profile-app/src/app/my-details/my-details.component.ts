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

// Import
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

// Export Class
export class MyDetailsComponent implements OnInit {
  myProfile: Person;
  constructor() {
    this.myProfile = new Person("Angela Martin", "Prime Rib", "Purple")
  }

  ngOnInit(): void {
  }

}

// Create Class
class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords: [
    "#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"
  ]

  constructor (fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }



}
