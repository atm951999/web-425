import { IPerson } from "./Person.interface";

class Person implements IPerson {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Angie", "Martin");
console.log(`My name is ${myName.firstName} ${myName.lastName}`);