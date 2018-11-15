// TODO Задачи по замыканию

// TODO Задачf 3

/**
 * minus
 * @param {number} numbFirst - первое число
 * @param {number} numbSecond - второе число
 */

function minus (numbFirst, numbSecond = 0) {

    let i = 0;

    function secondItem() {
        return i = numbFirst - numbSecond
    }

    return secondItem()
}

// TODO Задача 5

/**
* strModuls - модульная функцыя роботы со строкой
* @param {string} value - название строки
*/
const strModuls = (function () {
    let strValue = 0;

    function setString(value) {
        if (typeof value !== 'string') {return strValue = String(value);}
        else { return strValue = value; }
    }

    function getString() {return  strValue}

    function setStrLength() {return strValue.length}

    return {
        setString,
        getString,
        setStrLength
    }

}());

// TODO Задача 6

/**
 * strModuls - модульная функцыя роботы с числами (калькулятор)
 * @param {number} val- число
 */
const calc = (function () {
    let value = 0;

    function setValue(val) {
        value = val;
        return this;
    }

    function getValue() {
        return value;
    }

    function plusValue(val) {
        value += val;
        return this;
    }

    function multiplyValue(val) {
        value *= val;
        return this;
    }

    return {
        setValue,
        getValue,
        plusValue,
        multiplyValue
    }
}());


// TODO Задачи по this


// TODO Задача 2


function getPrice() {
    return this.price * this.products
}

const priceAndGetroduct = {
    price: 100,
    products: 5,
    getPriceProduct: getPrice
};

// TODO Задача 3

const priceAndDetail = {
    price: 10,
    products: 3,
    getPriceProduct: getPrice
};

// TODO Задача 4

let size = {width: 5, height: 10},
 getSquare = function () { return this.width * this.height};

getSquare = getSquare.bind(size);



// TODO Задача 6
const element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight (){
        return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom)
    }
};

const block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px',
    getFullHeight() {
        return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom)
    }
};

//7









