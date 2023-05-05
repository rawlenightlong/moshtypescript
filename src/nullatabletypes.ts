function greet(name: string | null | undefined) {
    if (name)
    console.log(name.toUpperCase())
    else 
    console.log("Hola")
}

greet(null)
// can't do this, normally

