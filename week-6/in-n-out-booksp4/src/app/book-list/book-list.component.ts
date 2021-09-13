/*
============================================
; Title: Assignment 5.4
; Author: Professor Krasso
; Date: 05 September 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular.
===========================================
*/

// Imports
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  book: IBook
  header: string[]
  books: Observable<IBook[]>
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = booksService.getBooks()
    this.header = ["isbn", "title", "numOfPages", "authors"]

  }

  ngOnInit(): void {
  }

// showBookDetails function
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn)
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {book: this.book},
      disableClose: true,
      width: "800px"
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === "confirm") {
        this.book =  null;
      }
    })
  }



}
