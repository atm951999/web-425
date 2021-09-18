/*
============================================
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 22 August 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular for passing data to routes
;===========================================
*/

// Imports
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs'
import { IComposer } from './composer.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: IComposer[]

  constructor() {
    this.composers = [

      {composerId: 1, fullName: "Antonio Vivaldi", genre: "Classical"},
      {composerId: 2, fullName: "Joe Schmo", genre: "jazz"},
      {composerId: 3, fullName: "Ed Sheeran", genre: "folk"},
      {composerId: 4, fullName: "Elvis", genre: "rock"},
      {composerId: 5, fullName: "Ludwig Beethoven", genre: "Classical"}
    ]
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }

  // getComposer function
  getComposers(): Observable<IComposer[]> {
    return of(this.composers)
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composerId == composer.composerId) {
        return composer
      }
    }
  }
}

