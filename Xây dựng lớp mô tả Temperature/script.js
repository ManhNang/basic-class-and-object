class Temperature {
    constructor(celsius){
        this.celsius = celsius;
    }

    celsiusToFahrenheit(){
        return 1.8 * this.celsius + 32;
    }

    celsiusToKelvin(){
        return this.celsius + 273;
    }
}

let temperature = new Temperature(25);
console.log("C sang F: " + temperature.celsiusToFahrenheit());
console.log("C sang K: " + temperature.celsiusToKelvin());