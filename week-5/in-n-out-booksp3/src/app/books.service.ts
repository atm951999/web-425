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
        authors: ["William Mann"],
        description: "Good Book",
        numOfPages: 600
      },
      {
        isbn: "852147963",
        title: "Harry Potter and the Chamber of Secrets",
        authors: ["J.K. Rowling"],
        description: "Excellent Read",
        numOfPages: 726
      },
      {
        isbn: "852147963",
        title: "Harry Potter and the Philosophers Stone",
        authors: ["J.K. Rowling"],
        description: "Good Book",
        numOfPages: 768
      },
      {
        isbn: "852147963",
        title: "Clan of the Cavebear",
        authors: ["Jean M. Auel"],
        description: "Awesome Book",
        numOfPages: 840
      },
      {
        isbn: "852147963",
        title: "Harry Potter and the Prisoner of Azkaban",
        authors: ["J.K. Rowling"],
        description: "Good Book",
        numOfPages: 671
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
