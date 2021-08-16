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
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// Export Class ComposerListComponent
export class ComposerListComponent implements OnInit {
  composers: Composer[]
  constructor() {
    this.composers = [
      new Composer("Antonio Vivaldi", "Classical"),
      new Composer("Joe Schmo", "jazz"),
      new Composer("Ed Sheeran", "folk"),
      new Composer("Elvis", "rock"),
      new Composer("Ludwig Beethoven", "Classical")
    ]
  }

  ngOnInit(): void {
  }

}

// Create Class Composer
class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}
