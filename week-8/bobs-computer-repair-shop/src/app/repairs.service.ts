/*
============================================
; Title: Assignment 9.3
; Author: Professor Krasso
; Date: 03 October 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular.
===========================================
*/

// Import
import { Injectable } from '@angular/core';
import { Repair } from './models/repair.interface';

@Injectable({
  providedIn: 'root'
})
export class RepairsService {

  constructor() { }
  getRepairs(): Repair[] {
    const repairs: Repair[] = [
      {
        title: "Password Reset",
        amount: 39.99,
        checked: false
      },
      {
        title: "Software Installation",
        amount: 49.99,
        checked: false
      },
      {
        title: "Spyware Removal",
        amount: 99.99,
        checked: false
      },
      {
        title: "Tune-Up",
        amount: 89.99,
        checked: false
      },
      {
        title: "RAM Upgrade",
        amount: 129.99,
        checked: false
      },
      {
        title: "Keyboard Cleaning",
        amount: 45.00,
        checked: false
      },
      {
        title: "Disk Clean-Up",
        amount: 149.99,
        checked: false
      }
    ]
    return repairs;
  }
}


