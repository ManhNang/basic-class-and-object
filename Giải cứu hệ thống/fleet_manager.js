class Drone {
    constructor(id, battery, status){
        this.id = id;
        this.battery = battery;
        this.status = status;
    }
}

let droneFleet = [];

function addDrone(newDrone){
    droneFleet.push(newDrone);
}

function randomDrones(quantity){
    for (let i = 0; i < quantity; i++) {
        let randomId = "dr_" + crypto.randomUUID();;
        let randomBattery = Math.floor(Math.random() * 91) + 10;
        let randomStatus = Math.random() > 0.3 ? "available" : "busy";
        addDrone(new Drone(randomId, randomBattery, randomStatus));
    }
}

function findAvailableDrone(){
    let drones = droneFleet.filter(drone => drone.status === "available" && drone.battery > 20);
    return drones;
}

function dispatchOrder() {
    let availableDrones = findAvailableDrone();
    for(let drone of availableDrones){
        drone.status = "delivering";
        console.log(`Đã điều phối đơn hàng cho Drone ${drone.id}`);
    }
    console.log("Không có Drone nào sẵn sàng!");
}

randomDrones(20);
dispatchOrder();
dispatchOrder();