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
  constructor(private booksService: BooksService) {
    this.books = booksService.getBooks()
    this.header = ["isbn", "title", "numOfPages", "authors"]

  }

  ngOnInit(): void {
  }


  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn)
    console.log(this.book)
  }



}
