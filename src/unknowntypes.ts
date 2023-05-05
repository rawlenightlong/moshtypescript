// function render(document: any) {
//     document.move()
//     document.fly()
//     document.whateverWeWant()
//     // no type checking is being done, since the ANY type is being used
// }

function render(document: unknown) {
    if (typeof document === "string"){
        document.toUpperCase()
    }

}

//Type checking verifies that methods exist on the element