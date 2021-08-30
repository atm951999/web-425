/*
============================================
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 22 August 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular for Passing data to routes
;===========================================
*/


import { ComposerService } from '../composer.service'
import { IComposer } from '../composer.interface';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(route.snapshot.paramMap.get('composerId'), 10);
    if (this.composerId) {

      this.composer = this.composerService.getComposer(this.composerId)
    }
   }

  ngOnInit(): void {
  }

}
