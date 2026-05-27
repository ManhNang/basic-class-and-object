/**
 * HỆ THỐNG QUẢN LÝ XE - TECHRIDE (LEGACY CODE)
 * Vấn đề: Dữ liệu phân mảnh, lặp lại logic, thiếu tính đồng nhất cấu trúc
 */
class Vehicle{
    constructor(id, driverName, vehicleType){
        this.id = id;
        this.driverName = driverName;
        this.vehicleType = vehicleType;
        this.status = "Active";
    }

    calculateFare(distance){
        return distance * 5000;
    }
}

let vehicle1 = new Vehicle("V01", "Nguyen Van A", "Motorbike");
let vehicle2 = new Vehicle("V02", "Tran Thi B", "Bike");
let vehicle3 = new Vehicle("V03", "Dang Van C", "Car");
console.log("Xe 1 tính tiền 10km:", vehicle1.calculateFare(10));
console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);
vehicle2.status = "Maintenance";
console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);