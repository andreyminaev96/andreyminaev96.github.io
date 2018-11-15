// TODO Задачи по конструкторам

// TODO Задача 1

class ProductionCar {
    constructor(modelCar, ageCar){
        this.modelCar = modelCar;
        this.ageCar = ageCar;
    }
    modelCarInfo(){
        return this.modelCar
    }
    ageCarInfo(){
        const options = {
            year: "numeric"
        };
        let date = new Date().toLocaleString('ru-Ru',options);
        return Number(date)- this.ageCar
    }
}
const car = new ProductionCar("Mazda", 1995);

// TODO Задача 2

function StrEnctipe(stringHandler) {
    let str = '';

    this.strInfo = function () {
        return str = stringHandler;
    };
    this.strEnctipeNew = function () {
      return str = stringHandler.split("").reverse().join("");
    };
    this.strDelete = function () {
        this.strInfo(str = '');
        this.strEnctipeNew(str = '');
        return this
    }
}
const str = new StrEnctipe('Andrey');

// TODO Задача 3

class InstanceHandler {
    constructor(str){
        this.str = str
    }
    strType(){
        return typeof this.str
    }
    strHandler(){
        let strNew = this.str;
        return strNew
    }
    strLength(){
        return this.str.length
    }
    strString(){
        return this.str.toString();
    }
    strNumber(){
        return this.str = this.str.length;
    }
}
const strHandler = new InstanceHandler('andrey');
