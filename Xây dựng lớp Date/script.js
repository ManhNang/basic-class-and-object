class Date {
    constructor(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay(){
        return this.day;
    }

    getMonth(){
        return this.month;
    }

    getYear(){
        return this.year;
    }

    setDay(day){
        this.day = day;
    }

    setMonth(month){
        this.month = month;
    }

    setYear(year){
        this.year = year;
    }

    setDate(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }

    toString(){
        return `${this.day}/${this.month}/${this.year}`;
    }
}

let date = new Date(13, 11, 2000);
console.log(date.getDay() + "/" + date.getMonth() + "/" + date.getYear());
date.setDay(10);
date.setMonth(10);
date.setYear(2019);
console.log(date.getDay() + "/" + date.getMonth() + "/" + date.getYear());
date.setDate(12, 1, 2004);
console.log(date.toString());
