let storage = {
    incoming_todos: [],
    expenses_todos: []
};

const selectItem = document.querySelector('select');
const button = document.querySelector('.add__btn');
const inputItem = document.querySelectorAll('input');
const table_income = document.querySelector(".income__list");
const table_expenses = document.querySelector(".expenses__list");


button.addEventListener('click', (e) => {

    e.preventDefault();

    if (!inputItem[0].value || !inputItem[1].value) return alert("Заполните все поля");

    if (inputItem[1].value === "0") return alert('введите число больше либо меньше нуля');

    add_new_todo(inputItem[0].value, inputItem[1].value);

    inputItem[0].value = '';
    inputItem[1].value = '';

});

selectItem.addEventListener('change', () => {

    selectItem.classList.toggle('red-focus');

    inputItem.forEach(item => item.classList.toggle('red-focus'));

    button.classList.toggle('red');

});

table_income.addEventListener('click', e => {

    if (e.target.closest("button")) {
        const id = e.target.closest(".item").dataset.todoId;
        delete_todo_item(id);
    }

});

table_expenses.addEventListener('click', e => {

    if (e.target.closest("button")) {
        const id = e.target.closest(".item").dataset.todoId;
        delete_todo_item(id);
    }

});

/**
 * generate_id - создает произвольную строку
 * @returns {string} - новый id
 */

const generate_id = () => {
    const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let idInit = '0000000000'.split('').reduce((prev, next) => prev + words[Math.floor(Math.random() * words.length)], "");
    return idInit
};

/**
 * add_new_todo - функция для добавления новой задачи
 * @param {String} title - заголовок задачи
 * @param {number} value - текст задачи
 * @returns {void}
 */

const add_new_todo = (title, value) => {

    value = parseInt(value);

    const new_todo = {title, value, id: generate_id() };

    if (!selectItem.classList.contains('red-focus')) {

        storage.incoming_todos.push(new_todo);

        add_income_template(new_todo, table_income);

        budgetItems(value, table_income);

        return storage.incoming_todos;

    } else {

        // value = parseInt("-" + value);
        //
        // new_todo.value = value;

        storage.expenses_todos.push(new_todo);

        add_income_template(new_todo, table_expenses);

        budgetItems(value, table_expenses);

        return storage.expenses_todos;

    }

};

/**
 * add_income_template - функция для добавления елемента в HTML
 * @param {object} itemObj
 * @param {string} elementClass - класс елемента
 * @returns {void}
 */

const add_income_template = (itemObj, elementClass) => {

   if (elementClass.dataset.class !== "income__list" || itemObj.value < 0) return table_expenses.insertAdjacentHTML("afterbegin", create_income_template(itemObj));

   table_income.insertAdjacentHTML("afterbegin", create_income_template(itemObj));

};

/**
 * create_income_template - функция для создания HTML елемента
 * @param {object} itemObj
 * @returns {void}
 */

const create_income_template = itemObj => {
    return `
         <div class="item clearfix" data-todo-id="${itemObj.id}">
            <div class="item__description">${itemObj.title}</div>
            <div class="right clearfix">
                <div class="item__value">${itemObj.value}</div>
                <div class="item__delete">
                    <button class="item__delete--btn" ><i class="ion-ios-close-outline remove-task"></i></button>
                </div>
            </div>
        </div>  
    `;
};

/**
 * delete_todo_item - функция для удаления елемента
 * @param {string} id - id елемента
 * */

const delete_todo_item = (id) => {

    if (!id) return console.log("Передайте id удаляемой задачи.");

    const is_confirm = confirm("Удалить задачу?");

    if (!is_confirm) return;

    let deleteValue = 0;

    if (storage.incoming_todos.some(todo => todo.id === id)){

        storage.incoming_todos = storage.incoming_todos.filter(todo => todo.id !== id);

        storage.incoming_todos.forEach(item => deleteValue = item.value);

        delete_todo_from_html(id);

        budgetItems(deleteValue, table_income);

        return storage.incoming_todos;
    }

    if (storage.expenses_todos.some(todo => todo.id === id)) {

        storage.expenses_todos = storage.expenses_todos.filter(todo => todo.id !== id);

        storage.expenses_todos.forEach(item => deleteValue = item.value );

        delete_todo_from_html(id);

        budgetItems(deleteValue, table_expenses);

        return storage.expenses_todos;
    }

};

/**
 * delete_todo_from_html- функция для удаления елемента с HTML
 * @param {string} id - id елемента
 * */

const delete_todo_from_html = id => {

    const target = document.querySelector(`[data-todo-id="${id}"]`);

    const target_parent = target.parentElement;

    target_parent.removeChild(target);
};

/**
 * budgetItems- функция для cjplfybz елемента
 * @param {number} value  - значение елемента
 * @param {string} itemClass - класс елемента
 * */

const budgetItems = (value, itemClass) => {

    const expenceClass =  document.querySelector('.budget__expenses--value');

    const incomeClass = document.querySelector('.budget__income--value');

    let budgetValue = 0;


    if (itemClass.dataset.class !== "expenses__list") {

        storage.incoming_todos.forEach(item => budgetValue += item.value );

        incomeClass.parentNode.removeChild(incomeClass);

        add_budget_template(budgetValue, itemClass);

    } else {

        storage.expenses_todos.forEach(item => budgetValue += item.value );

        expenceClass.parentNode.removeChild(expenceClass);

        add_budget_template(budgetValue, itemClass);
    }

    budgetItemsValue()

    //
};

/**
 * add_income_template - функция для добавления елемента в HTML
 * @param {number} value - значение елемента
 * @param {string} itemClass - класс елемента
 */

const add_budget_template = (value , itemClass) => {

    if (itemClass.dataset.class !== "expenses__list") { document.querySelector('.budget__income .right').insertAdjacentHTML("afterbegin", budgetIncomes(value)) }

   else { document.querySelector('.budget__expenses .right').insertAdjacentHTML("afterbegin",  budgetExpenses(value)) }

};

/**
 * create_income_template - функция для создания HTML елемента
 * @param {number} value - значение елемента
 * @returns {void}
 */

const budgetIncomes = value => `<div class="budget__income--value">+ ${value}</div>`;

/**
 * create_income_template - функция для создания HTML елемента
 * @param {number} value - значение елемента
 * @returns {void}
 */

const budgetExpenses = value => `<div class="budget__expenses--value">- ${value}</div>`;

/**
 * create_income_template - функция для подщета значения двую масивов
 */

const budgetItemsValue = () => {

    const budgetValueSelect = document.querySelector('.budget .budget__value');

    let itemExpenses = 0; storage.expenses_todos.forEach(item => itemExpenses += item.value );

    let itemIncoming = 0; storage.incoming_todos.forEach(item => itemIncoming += item.value );

    budgetValueSelect.parentNode.removeChild(budgetValueSelect);

    addBudgetTemplate(itemIncoming, itemExpenses);
};

/**
 * add_income_template - функция для добавления елемента в HTML
 * @param {number} inc - значение массива incoming_todos
 * @param {number} exp - значение массива expenses_todos
 */

const addBudgetTemplate = (inc, exp) => document.querySelector('.budget__title').insertAdjacentHTML("afterend", budgetItemsTemplate(inc, exp));

/**
 * add_income_template - функция для создания елемента HTML
 * @param {number} itemInc - значение массива incoming_todos
 * @param {number} itemExp - значение массива expenses_todos
 */
const budgetItemsTemplate = (itemInc, itemExp) => `<div class="budget__value">${itemInc - itemExp}</div>`;