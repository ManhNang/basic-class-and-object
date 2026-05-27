/**
 * HỆ THỐNG KHỞI TẠO NHÂN VẬT - CYBERWARRIORS (LEGACY CODE)
 * Vấn đề: Khởi tạo thủ công, dễ quên thuộc tính, trạng thái không đồng nhất.
 */
class Character{
    constructor(name = "Ẩn danh", classType = "Farmer"){
        this.name = name;
        this.classType = classType;
        this.level = 1;
        this.hp = 100;
        this.isAlive = true;
        this.inventory = [];
    }
}

let player1 = new Character("Neo", "Hacker");
let player2 = new Character("Trinity", "Gunner");
let player3 = new Character();

console.log("Thông tin Player 1:", player1);
console.log("Thông tin Player 2:", player2);
console.log("Thông tin Player 3:", player3);