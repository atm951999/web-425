/*
============================================
; Title: Assignment 5.3
; Author: Professor Krasso
; Date: 05 September 2021
; Modified By: Angela Martin
; Description: This program demonstrates the
; use of Angular.
===========================================
*/

// Imports
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: IBook[]

  constructor() {
    this.books = [
      {
        isbn: "852147963",
        title: "Hello Gorgeous",
        authors: ["J.K. Rowling"],
        description: "Good Book",
        numOfPages: 600
      },
      {
        isbn: "852147963",
        title: "Hello Gorgeous",
        authors: ["J.K. Rowling"],
        description: "Good Book",
        numOfPages: 600
      },
      {
        isbn: "852147963",
        title: "Hello Gorgeous",
        authors: ["J.K. Rowling"],
        description: "Good Book",
        numOfPages: 600
      },
      {
        isbn: "852147963",
        title: "Hello Gorgeous",
        authors: ["J.K. Rowling"],
        description: "Good Book",
        numOfPages: 600
      },
      {
        isbn: "852147963",
        title: "Hello Gorgeous",
        authors: ["J.K. Rowling"],
        description: "Good Book",
        numOfPages: 600
      }
    ]
   }

   // getBooks function
   getBooks(): Observable<IBook[]> {
     return of(this.books)

   }

   // getBook function
   getBook(isbn: string): IBook {
    for(let book of this.books) {
      if (book.isbn == isbn) {
        return book
      }
    }
   }
}
