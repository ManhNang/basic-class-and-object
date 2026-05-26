/**
 * HỆ THỐNG QUẢN LÝ NHÂN VẬT - PIXELDREAM (LEGACY CODE)
 * Vấn đề: Dữ liệu rời rạc, khó mở rộng, lặp code.
 */

class Hero {
    constructor(name, hp, attackDamage){
        this.name = name;
        this.hp = hp;
        this.attackDamage = attackDamage;
        this.alive = true;
    }

    getHP(){
        console.log("HP còn lại " + this.hp);
    }

    attack(target){
        target.takeDamage(this);
        console.log(`${this.name} tấn công ${target.name}. ${target.name} còn ${target.hp} HP.`);
    }

    takeDamage(attacker){
        if(attacker.attackDamage >= this.hp){
            this.hp = 0;
            this.alive = false;
        }
        else this.hp -= attacker.attackDamage;
    }
}

// Thực thi
let arthur = new Hero("arthur", 1000, 85);
let valhein = new Hero("valhein", 800, 100);

for(let i = 0; i < 12; i++){
    arthur.attack(valhein);
}
