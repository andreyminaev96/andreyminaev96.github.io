/**
 * Created by користувач on 01.10.18.
 */
let object = {
    product: "iphone",
};

object.price = 1000;
object.currency = "dollar";
object.details = {
  model: "iPhone X",
  color: "white"
};

document.write("Задача обьект" + "<br>" + "<br>");

document.write( "Продукт :" + object.product
                + "<br>" +
                "Цена :" + object.price
                + "<br>" +
                "Модель :" + object.details.model
                + "<br>" +
                "Цвет :" + object.details.color );


document.write("<br>" + "<br>" + "Задача присвоение" + "<br>" + "<br>");

document.write("a += 10"
               + "<br>"+
               "b *= 18"
               + "<br>"+
               "c -= 10"
               + "<br>"+
               "x += a"
               + "<br>"+
               "y *= z");

//можно молучить квадрат так
//  n *= n;
let n = 4;
// либо так  ;
Math.pow(n,2);

document.write("<br>" + Math.pow(n,2));

document.write("<br>" + "<br>" + "Задача обьект" + "<br>" + "<br>");

document.write("Первая задача" + "<br>") ;

let str = prompt("Напишите hidden или visible");

if (str == "hidden"){
    str = "visible"
}else if (str != "hidden" && str != "visible") {
    str = "Попробуйте еще раз что то не так "
}else {
    str = "hidden"
}
document.write(str + "<br>" + "<br>" );

document.write("Вторая задача" + "<br>") ;
let numb = prompt("Введите число");
numb = parseInt(prompt);

// console.log(numb);
if (typeof numb != "string") {

    if (numb == 0) {
        numb = 1;
    } else if (numb < 0) {
        numb = "less then zero"
    } else {
        numb *= 10;
    }
}
 else {
    numb = "Ошибка вы ввели не число "
}

document.write(numb);


