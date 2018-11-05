// * bind
let user = {
    name: "Denis",
    age: 29,
    // getName: function () {
    //     console.log(this.name);
    // },
    getName() {
        console.log(this.name);
    },
    getAge: function () {
        console.log(this);
        console.log(this.age);
    }
}

let user2 = {
    name: "Ivan",
    age: 33
}

// user.getAge();

user.getAge = user.getAge.bind(user);

// user.getAge.call(user2);

// setTimeout(user.getAge, 2000);

// document.addEventListener("click", function(e) {
//     console.log(this);
// });

// document.addEventListener("click", (e) => {
//     console.log(this);
// });

let obj = {
    info: "Some info",
    setEvent: function () {
        document.addEventListener("click", (e) => {
            console.log(this);
        });
    }
}

// obj.setEvent();

// closures

// leGloba = {
//     value: 10,
//     text: "Hello",
//     getName: function() {},
//     scope: null
// }

let val = 10;
let text = "Hello";

function getName(name) {
    // le1 = {
    //     startText: "My name is ",
    //     name: "Denis",
    //     args: arguments,
    //     getValue: function (value) {},
    //     scope: leGloba
    // }
    let startText = "My name is ";

    function getValue(value) {
        // le2 = {
        //     value: "more text",
        //     args: arguments,
        //     scope: le1
        // }
        return value + "some text";
    }

    return startText + name + getValue("more text");
}

// getName("Denis");


function makeCounter() {
    let counter = 0;

    return function () {
        return ++counter;
    }
}

const counter1 = makeCounter();
const counter2 = makeCounter();

function getHello(text = "Hello ") {
    return function(name) {
        return text += name;
    } 
}

// let hello = getHello();


// Modules
// const counter = {
//     i: 0,
//     inc() {
//         return ++this.i;
//     }
// }


// const counter = (function () {
//     let i = 0;

//     function inc() {
//         return ++i;
//     }

//     return {
//         inc
//     }
// }());


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

    return {
        setValue,
        getValue,
        plusValue
    }
}());





















