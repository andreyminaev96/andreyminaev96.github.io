//1 DOM
/**
 * isParent - Функцыя которая принимает 2 елемента и проверяет является ли первый елемент родителем для второго
 * @param (string) parent - родительский елемент
 * @param(string) child
 */

let isParent = (parent,child) => document.querySelector(`${child}`).closest(`${parent}`);

isParent('article','p');

//2
// --

//3

const ulSelector = document.querySelector('ul');
    ulSelector.previousElementSibling;
    ulSelector.nextElementSibling;

//4

const ulList = document.querySelectorAll('ul li');
let listStr = ulList.length;

// 1 nodes

ulSelector.classList.add("list");

// 2

document.querySelector('span').nextElementSibling.id = 'link';

// 3
// ulList.forEach((item,index) => index + 1 % 2 === 0 ? item.classList.add('item') : '' ); == почему так неработает ? 

ulSelector.children[0].classList.add('item');
ulSelector.children[2].classList.add('item');

// 4

const aSelect = document.querySelectorAll('a');

aSelect.forEach(item => item.classList.add('custom-link'));

// 1 манипуляцыя содержимЫм

const liTemplate = `
      <li class="new-item">item 4</li>
      <li class="new-item">item 5</li>
      `;

ulSelector.insertAdjacentHTML("beforeend", liTemplate);

// 2

const strong1 =`<strong></strong>`;
const strong2 =`<strong></strong>`;
const strong3 =`<strong></strong>`;

ulSelector.children[0].firstChild.insertAdjacentHTML("beforeend", strong1);
ulSelector.children[1].firstChild.insertAdjacentHTML("beforeend", strong2);
ulSelector.children[2].firstChild.insertAdjacentHTML("beforeend", strong3);

// 3

const imgSelector = `<img src="why-js.png">`;

document.body.insertAdjacentHTML("beforebegin", imgSelector);

// 4

const elementMark = document.querySelector('p mark');

elementMark.insertAdjacentText("beforeend", "green");
elementMark.classList.add('green');

//5
// -








