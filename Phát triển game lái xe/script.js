const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");

let score = 0;
let gameOver = false;

myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

class Car{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 40;
        this.normalSpeed = 1;
        this.boostSpeed = 2;
        this.speed = this.normalSpeed;
        this.direction = "UP";

        this.img = new Image();
        this.img.src = "car.png";
    }

    update(){
        if(gameOver) return;

        switch(this.direction){
            case "UP": this.y -= this.speed; break;
            case "DOWN": this.y += this.speed; break;
            case "LEFT": this.x -= this.speed; break;
            case "RIGHT": this.x += this.speed; break;
        }

        if(this.x < 0) this.x = myCanvas.width;
        if(this.x > myCanvas.width) this.x = 0;
        if(this.y < 0) this.y = myCanvas.height;
        if(this.y > myCanvas.height) this.y = 0;
    }

    draw(){
        ctx.save();
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);

        let angle = 0;
        switch(this.direction){
            case "UP": angle = Math.PI / 2; break;
            case "DOWN": angle = -Math.PI / 2; break;
            case "LEFT": angle = 0; break;
            case "RIGHT": angle = Math.PI; break;
        }
        ctx.rotate(angle);
        ctx.drawImage(this.img, -this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
    }
}

class GameObject{
    constructor(type){
        this.type = type;
        this. width = 50;
        this.height = 50;

        this.x = Math.random() * (myCanvas.width - this.width);
        this.y = Math.random() * (myCanvas.height - this.height);
        this.color = type === "obstacle" ? "#565656" : "gold";
    }

    draw(){
        ctx.fillStyle = this.color;
        if(this.type === "obstacle"){
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        else {
            ctx.beginPath();
            ctx.arc(this.x + this.width / 3, this.y + this.height / 3, this.width / 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

const car = new Car(myCanvas.width / 2 - 35, myCanvas.height / 2 - 20);
const obstacles = [];
const rewards = [];

function createGameObject(type, quantity){
    for(let i = 0; i < quantity; i++){
        if(type === "obstacle"){
            obstacles.push(new GameObject(type));
        }
        else rewards.push(new GameObject(type));
    }
}

function checkCollision(rect1, rect2){
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
}

window.addEventListener("keydown", (e) => {
    if(gameOver) return;

    switch(e.key){
        case "ArrowUp": car.direction = "UP"; break;
        case "ArrowDown": car.direction = "DOWN"; break;
        case "ArrowLeft": car.direction = "LEFT"; break;
        case "ArrowRight": car.direction = "RIGHT"; break;
        case "Control": car.speed = car.boostSpeed; break;
    }
});

window.addEventListener("keyup", (e) => {
    if(e.key === "Control") car.speed = car.normalSpeed;
});

function gameLoop(){
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    car.update();
    car.draw();

    obstacles.forEach(obs => {
        obs.draw();
        if(checkCollision(car, obs)){
            gameOver = true;
        }
    });

    for(let i = rewards.length - 1; i >= 0; i--){
        rewards[i].draw();
        if(checkCollision(car, rewards[i])){
            score += 10;
            rewards.splice(i, 1);
            rewards.push(new GameObject("reward"));
        }
    }

    ctx.fillStyle = "blue";
    ctx.font = "20px Times New Roman";
    ctx.fillText("Score: " + score, 10, 20);

    if(gameOver){
        ctx.fillStyle = "red";
        ctx.font = "80px Times New Roman";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER!", myCanvas.width / 2, myCanvas.height / 2);
        ctx.fillStyle = "red";
        ctx.font = "50px Times New Roman";
        ctx.fillText("Điểm của bạn: " + score, myCanvas.width / 2, myCanvas.height / 2 + 90);
        return;
    }

    requestAnimationFrame(gameLoop);
}

createGameObject("obstacle", 5);
createGameObject("reward", 10);
car.img.onload = () => {
    gameLoop();
}
