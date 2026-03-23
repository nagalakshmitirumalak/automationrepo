// Create an interface IShape with calculateArea(). Implement Circle and Rectangle classes

interface IShape{
    name: string;
    calculateArea(): number;
}

class circle implements IShape{
    constructor(radius : number){
        this.name = "Circle";
        this.radius = radius;
    }

    radius: number;
    name: string;

    calculateArea(): number{
        let area : number = Math.PI * this.radius * this.radius;
        return area;
    }
}

class rectangle implements IShape{
    constructor(length: number, width: number){
        this.name = "Rectangle";
        this.length = length;
        this.width = width;
    }

    length: number;
    width: number;
    name: string;

    calculateArea(): number{
        let area: number = this.length * this.width;
        return area;
    }
}

let obj1: circle = new circle(5);
console.log(`${obj1.name} Area is `, obj1.calculateArea());
let obj2: rectangle = new rectangle(4,5);
console.log(`${obj2.name} Area is `, obj2.calculateArea());