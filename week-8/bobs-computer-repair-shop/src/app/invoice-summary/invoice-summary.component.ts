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
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Repair } from '../models/repair.interface'

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.css']
})
export class InvoiceSummaryComponent implements OnInit {
  services: Repair[];
  today: Date;
  total: number;
  constructor(private dialogRef: MatDialogRef<InvoiceSummaryComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.services = data.services
    this.today = new Date()
    this.total = data.total
  }

  ngOnInit(): void {
  }

}
