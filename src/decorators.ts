// Decorators
// allow us to change/enhance classes
// can apply them to classes, methods, properties, accessors, and parameters

// @Component
// class ProfileComponent {
// }

// experimental feature - must adjust tsconfig

// Class Decorators

// function Component(constructor: Function){
//     console.log("Component decorator called")
//     constructor.prototype.uniqueID = Date.now()
//     constructor.prototype.insertInDOM = () => {console.log("inserting component into DOM")}
// }

@Component({selector: "#my-profile"})
@Pipe
class ProfileComponent  {
}

// Paramter Decorators

type ComponentOptions = {
    selector: string
}

function Component(options: ComponentOptions) {
    return (constructor: Function) => {
    console.log("Component decorator called")
    constructor.prototype.options = options
    constructor.prototype.uniqueID = Date.now()
    constructor.prototype.insertInDOM = () => {console.log("inserting component into DOM")}
    }
}

// Decorator Composition

function Pipe(constructor: Function) {
    console.log("Pipe Decorator called")
    constructor.prototype.pipe=true
}
// F(g(x)) example - g(x) happens first, then that result gets modified by F; same thing above on line 19/20 - The Pipe decorator modifies the class first, then that whole result is modified by the Component decorator

// Method Decorators
// remember - function keyword functions can use "this", while arrow functions can not!

function Log(target: any, methodName: string, descriptor: PropertyDescriptor){

    const original = descriptor.value as Function

    descriptor.value = function(...args:any){
        console.log("Before")
        original.call(this, ...args) // here, we're telling the decorator function to replace "hello" argument from line 68; no matter what argument is given to dude.say(), it will always say "Blue Sky" as we have it hard coded. we can even go further on line 55 and replace "blue sky" with (message: string) to then restore functionality of the original say function in the Dude class.
        console.log("After")
    }
}

class Dude {
    @Log
    say(message: string){
        console.log("Person says " + message)
    }
}

let dude = new Dude()
dude.say("hello")

// accessor decorators


function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor){
    const original = descriptor.get
    descriptor.get = function(){
       const result = original?.call(this)
       if (typeof result === "string"){
        return result.toUpperCase()
       }
       return result

       // ternary operator version
       // return typeof result === "string" ? result.toUpperCase() : result
    }
}

class Man {
    constructor(public firstname: string, public lastname: string) {}

    @Capitalize
    get fullName() {
        return `${this.firstname} ${this.lastname}`
    }
}

let man = new Man("rawle", "becerril")
console.log(man.fullName)

// Property Decorators

function MinLength(length: number) {
    return (target: any, propertyName: string) => {
        let value: string
        const descriptor: PropertyDescriptor = {
            get() {return value},
            set(newValue: string) {
                if (newValue.length < length)
                    throw new Error (`${propertyName} should be at least ${length} characters`)
                value = newValue
            } 
        }
        Object.defineProperty(target, propertyName, descriptor)
    }
}

class Use {
    @MinLength(4)
    password: string;

    constructor(password: string) {
        this.password = password
    }
}

let user1 = new Use("1234")

// Parameter Decorators

type WatchedParameter = {
    methodName: string,
    paramaterIndex: number
}

const watchedParamaters: WatchedParameter[] = []

function Watch(target: any, methodName: string, paramaterIndex: number) {
    watchedParamaters.push({
        methodName,
        paramaterIndex
    })
}

class Vehicle {
    move(@Watch speed:number) {}
}

console.log(watchedParamaters)