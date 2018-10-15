
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

    // 1

    function srtSort(str){
        return str.split('').reverse().join('');
    }
    srtSort("mlkjihgfedcba");
    // 2

    function arrayReverse(arr){
        let resultArr = arr.sort(function(prev, next){
            return next - prev;
        })
        return resultArr
    }
    arrSortReverse([2, 4, 7, 1, -2, 10, -9]);
    // 3

    function arrNew (arr, item1, item2){
        return arr.slice(item1, item2 +1);
    }

    arrNew['a', 'b', 'c', 'd', 'e', 'f'], 2, 4);

    // 4

    let arrayItem1 = ['one', 2, 'three', 4];
    let arrayItem2 = arrayItem1.concat(arrayItem1);

    // 5

    let arreyItems = [1, 2, 3, 4, 5];
    arreyItems.splice(2,2);

    // 6

    let  arreyItemsNew = [1, 2, 3, 4, 5];
    arreyItemsNew .splice(2, 2, 'three', 'fore');

    // 7

    let strArr = ['I', 'am', 'an', 'array'];
    strArr.splice(3, 0, 'awesome');

    // 8

    let arrSort = [[14, 45], [1], ['a', 'c', 'd']];
    function sortArr(){
        return arrSort.sort(function(prev, next){
            return prev.length - next.length;
        })
    }

    // 9

    let arrCopy = arrSort.slice(0);
    let arrCopyNew = [];
    arrCopyNew = arrCopy1.concat(arrArr);

    // 10

    const arrObject = [
        {cpu: 'intel', info: {cores:2, cache:3}},
        {cpu: 'intel', info: {cores:4, cache:4}},
        {cpu: 'amd', info: {cores:1, cache:1}},
        {cpu: 'intel', info: {cores:3, cache:2}},
        {cpu: 'amd', info: {cores:4, cache:2}}
    ];
    function sortArr (){
        return arrObject.sort(function(prev, next){
            return prev.info.cores - next.info.cores;
        })
    }
    sortArr();

    // 11

    const products = [
        {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
        {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
        {title: 'prod5', price: 18.9}, {title: 'prod6', price:8},
        {title: 'prod7', price: 19}, {title: 'prod8', price:63},
    ];
    function filterArrStr(price, itemMina, itemMax){
        let arrNew = [];
        for (i = 0; i < price.length; i++) {
            if(price[i].price > itemMina && price[i].price < itemMax)
                arrNew.push(price[i]);
        };
        return arrNew.sort(function(prev, next){
            return prev.price - next.price;
        })
    }
    filterArrStr(price, 15, 30);












