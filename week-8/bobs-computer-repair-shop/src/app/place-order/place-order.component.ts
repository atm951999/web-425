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
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RepairsService} from '../repairs.service';
import { Repair } from '../models/repair.interface';
import { MatDialog } from '@angular/material/dialog';
import { InvoiceSummaryComponent } from '../invoice-summary/invoice-summary.component';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  repairs: Repair[];
  parts: string;
  labor: string;
  constructor(private repairsService: RepairsService, private dialog: MatDialog) {
    this.repairs = repairsService.getRepairs();
    console.log(this.repairs)
  }

  ngOnInit(): void {
  }

  submit(): void{
    const services: Repair[] = [];
    let total: number = 0;
    for(let repair of this.repairs) {
      if(repair.checked) {
        services.push(repair)
        total += repair.amount
      }
    }
    const parts = + this.parts || 0;
    const labor = + this.labor*50 || 0;
    total += parts + labor + total;
    if(parts > 0) {
      services.push({
        title: "Parts",
        amount: parts,
        checked: true
      })
    }
    if(labor > 0) {
      services.push({
        title: "Labor",
        amount: labor,
        checked: true
      })
    }
    const dialogRef = this.dialog.open(InvoiceSummaryComponent, {
      data: {
        services,
        total
      },
      disableClose: true,
      width: '800px'
    })
  }

}
