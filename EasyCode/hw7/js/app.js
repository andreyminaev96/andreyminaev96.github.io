//1
const products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price:8},
    {title: 'prod7', price: 19}, {title: 'prod8', price:63},
];

let fillterArr = filterArrStr(15);

function filterArrStr(price){
    let arrNew = products.filter(num => num.price <= price);
    arrNew.sort((prev,next)=> prev.price - next.price);
    return arrNew
}
//2

let arrOld = [1,2,3,5,8,9,10];

let arrNew = arrOld.map(value => ({digit: value, odd : !!(value % 2)}));

//3

arrOld = [12,4,50,1,0,18,40];

let arrRes = arrOld.every(value =>  value === 0);

//4

arrOld = ['yes', 'hello', 'no', 'easycode', 'what'];

arrRes = arrOld.some(value => value.length === 3 );

let arrChar = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
               {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
               {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

    let newArrCharSort = arrChar.sort((prev,next)=> prev.index - next.index);
    let lenewArrCharStr = newArrCharSort.reduce((prev,item) => prev + item.char, "");



let storage = {
    current_todos: [],
    deleted_todos: []
};



/**
 * edit_todo_item - функция для редактирования елемента
 * @param {string} id
 * @param {string} title - новый заголовое
  * @param {string} text - новый текст необязательно
 */
const edit_todo_item = (id,title,text) => {

    if (!id) return console.log("Передайте id удаляемой задачи.");
    if (!title) return console.log("Введите заголовок задачи.");

    storage.current_todos = storage.current_todos.filter((todo) =>{
        if (id !== todo.id){
            todo.title = title
        }
    });
    return storage.current_todos;
};
