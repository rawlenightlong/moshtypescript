function reject(message: string): never{
    throw new Error(message)
}



function processEvents(): never {
    while (true) {
        // read a message from a queue
    }
}

reject("...")
console.log("Hello") // this will never run because we have an infinite loop
// type checking section of tsconfig = allowUnreachableCode