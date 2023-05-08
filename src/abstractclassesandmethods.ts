abstract class Shape { // this class is simple/NOT READY to be functional; it must be extended by another class
    constructor(public color: string){}

    abstract render(): void; // abstract methods can only exist in abstract classes, and must be given a type as they will automatically be inferred type "any"
}

class Circle extends Shape {
    constructor(public radius: number, color: string){
        super(color)
    }

    override render(): void {
        console.log("rendering a cirlce")
    }
}

// let shape = new Shape("red")
// shape.render()