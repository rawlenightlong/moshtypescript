// inheritence
// extracting common properties and letting different objects inherit said properties
// super / sub, parent / child, etc

class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    walk() {
        console.log('walking')
    }
}

class Student extends Person {
    constructor(public studentID: number, firstName: string, lastName: string ){
        super(firstName, lastName)
    }

    takeTest() {
        console.log("Taking a test")
    }
}

let student = new Student(1, "John", "Smith")

// METHOD OVERRIDING

class Teacher extends Person {
override get fullName() {
    return "Professor " + super.fullName
}
}

class Principal extends Person {
    override get fullName() {
        return "Principal " + super.fullName
    }
}

let teacher = new Teacher("John", "Smith")
console.log(teacher.fullName)

// Polymorphism

// Many forms

printNames([
    new Student(1, "Rawle", "Becerril"), 
    new Teacher("John", "Butt"),
    new Principal("Yes", "Maam")
])

function printNames(people: Person[]){
    for (let person of people){
        console.log(person.fullName)
    }
}
// polymorphism in action - person of people is taking a different form on each iteration of the loop; person is type of Person; first it's a student, then it's a teacher

// Open / Closed principal - Classes should be open for extension and closed for modification

// Private vs Protected - Private properties/functions don't get inherited, protected members do