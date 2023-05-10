// Generics

// class KeyValuePair {
//     constructor(public key: number, public value: string) {}
// }

// let pair = new KeyValuePair("1", "Apple");

// we need a common and reusable solution for creating objects with different properties/types

class KeyValuePair<T, U>{
    constructor(public key: T, public value: U){}
}

let pair = new KeyValuePair<string, string>("1", "a")

// essentially, when building the class you can insert variables into angled brackets that represent the ability to be whatever type you need
// the compiler can infer types from the constructor of the class so in line 15, the angled brakckets aren't technically needed / necessary
// let pair = new KeyValuePair("1", "a")

// Generic Functions

function wrapInArray<T>(value: T) {
    return [value]
}

let nums = wrapInArray("1")

class ArrayUtils {
    wrapArray<T>(value: T) {
        return [value]
    }
}

let utils = new ArrayUtils()
let nums2 = utils.wrapArray(1)

// Generic Interfaces
// https://mywebsite.com/users
// https://mywebsite.com/products

// interface Result<T> {
//     data: T | null,
//     error: string | null
// }

// function fetch<T>(url: string): Result<T> {
//     return {data: null, error: null}
// }

// interface User {
//     username: string,
// }

// interface Product {
//     title: string
// }

// let result = fetch<User>("url")
// result.data?.username

// let result2 = fetch<Product>("url")
// result2.data?.title

// Generic Constraints
// telling functions what types of variables can and can not be passed/used
function echo<T extends number | string>(value: T): T{
    return value
}

echo("1")

function echo2<T extends {name: string}>(value: T): T {
    return value
}

echo2({name: "Rawle"})

interface Rawle {
    name: string
}

function echo3<T extends Rawle>(value: T): T {
    return value
}

let rawle: Rawle = {name: "Rawle"}
echo3(rawle)

class Becerril {
    constructor(public name: string){}
}

class DJ extends Becerril {}

function echo4<T extends Becerril>(value: T): T {
    return value
}

let dj: DJ = {name: "Dj"}

echo4(dj)

// Extending Generic Classes
interface Productt {
    name: string, 
    price: number
}

class Store<T> {
    protected _objects: T[] = []

    add(obj: T): void {
        this._objects.push(obj)
    }
    // The Keyof Operator
    // T is Productt
    // keyof T => "name" | "price"
    find(property: keyof T, value: unknown): T | undefined {
        return this._objects.find(obj => obj[property] === value)
    }
}

let store2 = new Store<Productt>()
store2.add({name: "a", price: 1})
store2.find("name", "a")
store2.find("price", 1)
// store2.find("nonexistingproperty", 1)


class CompressibleStore<T> extends Store<T>{
    compress() {}
}
// passing on the generic type parameter
let store = new CompressibleStore<Productt>()
store.add
store.compress

// Restricting the generic type parameter
class SearchableStore<T extends {name: string}> extends Store<T> {
    find(name: keyof T): T | undefined {
        return this._objects.find(obj => obj.name === name)
    }
}

// Fixing/terminating the generic type parameter
// class ProductStore extends Store<Product> {
//     filterByCategory(category: string): Product[]{
//         return []
//     }
// }

// Type Mapping

type ReadOnlyProduct = {
    // Index Signature
    // keyof operator
    readonly [Property in keyof Productt]: Productt[Property]
}

let product: ReadOnly<Productt> = {
    name: "a",
    price: 1
}

type ReadOnly<T> = {
    readonly [K in keyof T]: T[K]
}

type Optional<T> = {
    [K in keyof T]: T[K]
}