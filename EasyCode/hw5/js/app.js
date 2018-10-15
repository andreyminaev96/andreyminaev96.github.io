
    let arr = ['my','name','is','Trinity'];

    function arrayHandlerCallbackFirst(array,secondItem) {
        for (let i = 0, max = array.length; i < max; i++ ){
            res = secondItem(array[i]);
        }
        return  res ;
    }
    let firsFun = arrayHandlerCallbackFirst(arr, function (item) {
        return arr.join('');
    });

    arr = [10,20,30];
    
    
    function arrayHandlerCallbackSecond(array,funSecond) {
        let res = [];
        for (let i = 0, max = arr.length; i < max; i++ ){
            let collbackRes = funSecond(array[i]);
            res.push(collbackRes);
        }
        return res
    }

    let secondFun = arrayHandlerCallbackSecond(arr,function (item) {
        return item * 10
    });
    
    arr = ['abc', '123'];


    let thirdFun = arrayHandlerCallbackSecond(arr, function (item) {
        return item .split("").reverse().join("") + ' ';
    });


    arr = [1,2,3];

     let fourthFun = arrayHandlerCallbackSecond(arr, function (number) {
        return number + 5
     });


//массивЫ

    let str = strFunction ('bcdaeflmjgkh1');

    function strFunction (str) {
        let strResult = str.split('').sort().reverse().join('');
        return strResult
    }


    let array = arraySort([2,4,7,1,-2,10,-9]);

    function arraySort(array) {
        let newArray = array.sort(function (prev, next) {
            return  next - prev
        });
        return newArray;
    }


    let arrayDuble = newArray(['one', 2, 'three', 4]);
    function newArray (array) {

        return array.concat(array);
    }


    let list = [1,2,3,4,5];
    let newList = list.splice(0,2,"three","four");

    const arrayObject = [
        {
            cpu:'intel',
            info:{
                cores:2,
                cache:3
            }},
        {
            cpu:'intel',
            info:{
                cores:4,
                cache:4
            }},
        {
            cpu:'intel',
            info:{
                cores:1,
                cache:1
            }},
        {
            cpu:'intel',
            info:{
                cores:3,
                cache:2
            }},
        {
            cpu:'intel',
            info:{
                cores:4,
                cache:2
            }}
    ];

    arrayObject.sort(function (prev,next) {
        return prev.info.cores - next.info.cores;
    });


    const products = [

        {
            title:'prod1',
            price:5.2
        },
        {
            title:'prod2',
            price:0.18
        },
        {
            title:'prod3',
            price:15
        },
        {
            title:'prod4',
            price:25
        },
        {
            title:'prod5',
            price:18.9
        },
        {
            title:'prod6',
            price:8
        },
        {
            title:'prod7',
            price: 19
        },
        {
            title:'prod8',
            price:63
        },


    ];

    products.sort(function (prev,next) {
        // for (let i = 0; i <= products.length; i ++){
        //
        // }
        // prev.price - next. price;

    });













