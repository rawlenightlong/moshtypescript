"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log('walking');
    }
}
class Student extends Person {
    constructor(studentID, firstName, lastName) {
        super(firstName, lastName);
        this.studentID = studentID;
    }
    takeTest() {
        console.log("Taking a test");
    }
}
let student = new Student(1, "John", "Smith");
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
printNames([
    new Student(1, "Rawle", "Becerril"),
    new Teacher("John", "Butt"),
    new Principal("Yes", "Maam")
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
