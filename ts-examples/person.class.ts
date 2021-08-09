/*
============================================
; Title: Assignment 1.4
; Author: Professor Krasso
; Date: 07 August 2017
; Modified By: Angie Martin
; Description: This program demonstrates the
; use of Angular.
;===========================================
*/

// Import IPerson
import { IPerson } from "./Person.interface";

// Create Person class
class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Create variable myName
let myName = new Person("Angie", "Martin");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);