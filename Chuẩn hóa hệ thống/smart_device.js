/**
 * HỆ THỐNG QUẢN LÝ THIẾT BỊ IOT - SMARTLIFE (LEGACY CODE)
 * Vấn đề: Khởi tạo thủ công, thiếu nhất quán, quên biến trạng thái.
 */
class SmartDevice {
    constructor(name, type){
        this.deviceId = crypto.randomUUID();
        this.deviceName = name;
        this.type = type;
        this.isOn = false;
        this.battery = 100;
    }
}

let livingRoomLamp = new SmartDevice("Đèn phòng khách", "Light");
let bedroomAC = new SmartDevice("Điều hòa phòng ngủ", "AirConditioner");
let carLight = new SmartDevice("Đèn ô tô", "Light");

// Hàm hiển thị trạng thái (Sẽ bị lỗi hiển thị "undefined" với đèn phòng khách)
function checkDeviceStatus(device) {
    if (device.isOn === undefined) {
        console.error(`[LỖI NGHIÊM TRỌNG]: Thiết bị ${device.deviceName} bị thiếu trạng thái isOn!`);
    } else {
        console.log(`Thiết bị ${device.deviceName} đang ở trạng thái: ${device.isOn ? "BẬT" : "TẮT"}`);
    }
}

checkDeviceStatus(livingRoomLamp); 
checkDeviceStatus(bedroomAC);

console.log(livingRoomLamp);
console.log(bedroomAC);
console.log(carLight);