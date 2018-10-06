document.write("Задачи на числа" + "<br>" + "<br>");
// 1 задание
let str = "i am in the easycode";
let str_new = "";
let str_spl = str.split(" ");

for (let i = 0; i < str_spl.length; i++) {
        str_new += str_spl[i][0].toUpperCase() + str_spl[i].slice(1) + " ";
    }

document.write("Первые буквы каждого слова в верзнем регистре : " + str_new + "<br>");

// 2 задание
str = "tseb eht ma i";
str_spl = str.split();
str_new = "";

for (let i = 0; i < str_spl.length; i++){
    str_new += str_spl[i].split("").reverse().join("");
    console.log(str_new);
}

document.write("Строка перевертыш : " + str_new + "<br>");

// 3 задание
let  i = 10;
let res = 1;

while(i--) {
    res *= i + 1;
}

document.write("Факториал числа 10 : " + res + "<br>");

// 4 задание
str = "JavaScript is a pretty good language";
str_spl = str.split(" ");
str_new = "";

for (let i = 0; i < str_spl.length; i++) {
  str_new += str_spl[i][0].toUpperCase() + str_spl[i].slice(1);
}

document.write("Каждое слово с Большой буквы без пробелов : " + str_new + "<br>");

// 5 задание
str_new = "";
for (let i = 1; i <= 15; i++) {
    if (i % 2) {
        str_new += i + " ";
    }
}
document.write("Нечетные числа 1 - 15 : " + str_new);






