"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: "#my-profile" }),
    Pipe
], ProfileComponent);
function Component(options) {
    return (constructor) => {
        console.log("Component decorator called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueID = Date.now();
        constructor.prototype.insertInDOM = () => { console.log("inserting component into DOM"); };
    };
}
function Pipe(constructor) {
    console.log("Pipe Decorator called");
    constructor.prototype.pipe = true;
}
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
class Dude {
    say(message) {
        console.log("Person says " + message);
    }
}
__decorate([
    Log
], Dude.prototype, "say", null);
let dude = new Dude();
dude.say("hello");
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        if (typeof result === "string") {
            return result.toUpperCase();
        }
        return result;
    };
}
class Man {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get fullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}
__decorate([
    Capitalize
], Man.prototype, "fullName", null);
let man = new Man("rawle", "becerril");
console.log(man.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() { return value; },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be at least ${length} characters`);
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class Use {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], Use.prototype, "password", void 0);
let user1 = new Use("1234");
const watchedParamaters = [];
function Watch(target, methodName, paramaterIndex) {
    watchedParamaters.push({
        methodName,
        paramaterIndex
    });
}
class Vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
console.log(watchedParamaters);
