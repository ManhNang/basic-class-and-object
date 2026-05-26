class Circle {
    constructor(radius){
        this.radius = radius;
        this.color = "white";
    }

    getRadius(){
        return this.radius;
    }

    getArea(){
        return this.radius * this.radius * Math.PI;
    }
}

let circle = new Circle(2, "red");
console.log("Radius: " + circle.getRadius() + " |Area: " + circle.getArea());

let circle1 = new Circle(2.582, "blue");
console.log("Radius: " + circle1.getRadius() + " |Area: " + circle1.getArea());
