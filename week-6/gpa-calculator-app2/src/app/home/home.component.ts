/*
============================================
; Title: Assignment 6.4
; Author: Professor Krasso
; Date: 12 September 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular.
===========================================
*/

// Imports
import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Create variables
  transcriptEntry: ITranscript;
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];
  gpaTotal: number = 0;
  constructor() {
    this.transcriptEntry = {} as ITranscript;
  }

  ngOnInit(): void {
  }

  // saveEntry function
  saveEntry() {
    this.transcriptEntries.push(this.transcriptEntry);
    this.transcriptEntry = {} as ITranscript;

  }

  // calculate Results function - switch
  calculateResults() {
    let gpa: number = 0;
    for(let transcriptEntry of this.transcriptEntries) {
      switch(transcriptEntry.grade) {
        case 'A':
           gpa += 4.0;
        break;
        case 'A-':
           gpa += 3.70;
        break;
        case 'B+':
           gpa += 3.33;
        break;
        case 'B':
           gpa += 3.00;
        break;
        case 'B-':
           gpa += 2.70;
        break;
        case 'C+':
           gpa += 2.30;
        break;
        case 'C':
           gpa += 2.00;
        break;
        case 'C-':
           gpa += 1.70;
        break;
        case 'D+':
           gpa += 1.30;
        break;
        case 'D':
           gpa += 1.00;
        break;
        case 'D-':
           gpa += 0.70;
        break;
        case 'F':
           gpa += 0.00;
        break;
      }
    }

    this.gpaTotal = gpa / this.transcriptEntries.length;
  }

  // clearEntries function
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0;
  }
}
