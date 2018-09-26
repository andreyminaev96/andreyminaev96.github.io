// Строки
    document.write("Задание строки" + "<br>");
    let string = "some test string";
    let str  = string;

// 1 Получите первую и последнюю букву строки
    document.write("первая буква : " + str[0] + " " + "последнюю буква : " + str[str.length-1] + "<br>");

// 2 Сделать первую и последнюю букву в верхнем регистре
    document.write("первая буква в верхнем регистре :" + str[0].toUpperCase() + " " + "последняя буква в верхнем регистре : " + str[str.length-1].toUpperCase() + "<br>");

// 3 найдите положение слова string в строке
    document.write("Положение слова : " + str.indexOf("string") + "<br>");

// 4 найти положение 2 пробела
    document.write("Положение 2 пробела : " + str.lastIndexOf(" ") + "<br>");

// 5 получите строку с 5 символа длиной 4 буквы
    document.write("C 5-го символа по 4 буквы : " + str.substr(5,4) + "<br>");

//6 получите строку с 5 по 9 символ
    document.write("C 5-го символа по 9 символ : " + str.slice(5,9) + "<br>");

//7 получить строку без последних 6-и символов
    document.write("Без последних 6-и : " + str.slice(0,-6) + "<br>");

// 8 из двух переменых a b получить переменую string = "2016"
    let a = 20;
    let b = 16;
    string = "" + a + b;
    document.write("Переменная string : " + string + "<br>" + "<br>");

// Числа
    document.write("Задание Числа" + "<br>");

// 1 найти число pi  и округлить его до 2 символов после запятой
    document.write("PI : " + Math.PI
                    + "<br>" +
                   "2 characters : " + " " + Math.PI.toFixed(2));

// 2 Найти максимальное и минимальное число
    let max = Math.max = (15, 11, 16, 12, 51, 12, 13, 51);
    let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
    document.write("<br>" + "Max : " + max + " " + "Min : " + min +"<br>");

// 3 работа с Math.random
    let random_x = Math.random(0) + "x";
    document.write("Случайное число с 2 цыфрами после запятой : " + Math.random().toFixed(2)
                    + "<br>" +
                   "Случайное число от 0 до Х : " + random_x + "<br>");
// 4 проверить результат вычисление и привести с нормальному виду
    let x = 0.6 + 0.7;
    document.write("Значение вычисления : " + x + "<br>");
    x = x.toFixed(1);
    document.write("Нормальный вид :" + x + "<br>");

// 5 получить число из строки
    document.write("Число из строки 100$ : " + parseInt("100$"));


