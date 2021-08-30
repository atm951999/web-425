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
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// Export Class ComposerListComponent
export class ComposerListComponent implements OnInit {
  txtSearchControl = new FormControl('');
  composers: IComposer[]
  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  filterComposers(name: string) {
    alert(name)
  }

  ngOnInit(): void {
  }

}


