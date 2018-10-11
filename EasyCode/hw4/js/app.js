//Задачи по функыям

document.write("Задачи по Функцыям" + "<br>" + "<br>");

//1

let s = "";

multiply(12,12,12,12);

function multiply() {
   s = 1;
   if(arguments.length === 0) return s = 0;
   for (let i = 0; i < arguments.length; i++){
       s *= arguments[i];
   }
   return s;
}

document.write("Функцыя multiply принимает любые значение  и возврвщяет их произвидение : " + s + "<br>");

// 3

let strRevers = "";

reversString("Hello");

function reversString(string) {
    strRevers = string.split("").reverse().join("");
    return strRevers ;
}


document.write("Функцыя которая принимет строку и возвраяет сроку перевертыш : " + strRevers + "<br>");

// 4

let codeStr = "";
let codeText = "";

function getCodeStringFromText(textStr) {
    codeStr = textStr.split("");
    for (let i = 0; i < codeStr.length; i++){
        codeText += codeStr[i].charCodeAt(0) + " ";
    }
    return codeText ;
}

getCodeStringFromText("Андрей");

document.write("Функцыя которая принимает строку и возвращет строку где каждый символ разделен пробело и заменен на юникод-значения символа : " + codeText + "<br>");

// Задачи по методам

document.write("<br>" + "<br>" + "Задачи по методам " + "<br>" + "<br>");

// 1

let newArray = "";

doubleArray([6,7,8,9,10]);

function doubleArray(array){
    newArray = array.concat(array);
    return newArray
}

document.write("Функцыя которая принимает массив и возвращяет новый массив с дублированными элементами входного массива : " + newArray + "<br>");

// 2

lastElement([1,2,3,4,5,7,8]);

function lastElement(array) {
    newArray = array.slice(array.length-1);
    return newArray
}

document.write("Функцыя которая получает последний елемент массива : " + newArray + "<br>");

// 3

let arrayN = [];

strArrayN(10);

function strArrayN(n) {
    for (let i = n; i > 0;  i--){
        arrayN.push(i);
    }
    arrayN.reverse();
    return arrayN
}

document.write("Функцыя которая принимает число N и возвращяет массив заполненый от 1 до N : " + arrayN + "<br>");

// 4

let newCollection = '';

changeCollection([1,2,3,4,5],["a","b","c","f","r"]);

function changeCollection(arrayNum, arrayStr) {
    arrayNum.splice(0,1);
    arrayStr.splice(0,1);
    newCollection = "[" + arrayNum + "]" + " , " + "[" + arrayStr + "]";
    return newCollection
}

document.write("Функцыя которая принимает произвольное число массивов и " +
               "удаляет из каждого массива первый елемент и возвращяет массив из оставшихся значений" + newCollection);





