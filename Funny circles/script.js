const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

class Circle {
    constructor(x, y, radius, color, speedX, speedY){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
    }

    move(){
        this.x += this.speedX;
        this.y += this.speedY;

        if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
            this.speedX = -this.speedX;
        }

        if(this.y + this.radius > canvas.height || this.y - this.radius < 0){
            this.speedY = -this.speedY;
        }
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

function getRandomHex(){
    return Math.floor(Math.random() * 255);
}

function getRandomColor(){
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + green + "," + blue +")";
}

function createCircle(){
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor();
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let speedX = (Math.random() - 0.5) * 10;
    let speedY = (Math.random() - 0.5) * 5;
    let circle = new Circle(x, y, radius, color, speedX, speedY);
    return circle;
}

let circles = [];

function createMultipleCircle(quantity){
    for(let i = 0; i < quantity; i++){
        circles.push(createCircle());
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach(circle => {
        circle.move();
        circle.draw();
    })

    requestAnimationFrame(animate);
}

createMultipleCircle(100);
animate();