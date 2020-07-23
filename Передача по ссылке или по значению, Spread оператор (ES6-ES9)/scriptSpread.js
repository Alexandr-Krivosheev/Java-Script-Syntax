'use strict';
//Передача по ссылке
//Создаем обьект obj
 const obj = {
    a: 5,
    b: 1,
 };
//Создаем копию обьекта 
 const copy = obj;
//Измением значение элемента a на 10
 copy.a = 10;
//Значение езменится в обоих обьктах т.к при копирование не создается новый
// обьект. А создается лишь привязка к старому обькту
 console.log(copy);
 console.log(obj);

 //Поверхностное копирование обьекта
 //Функция copyFan принимает объект и копирует в первичной вложеености
 // т.е a и b  буду скопированы по значению а обьект c по ссылке
 function copyFun(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
 }

 const numbers = {
     a: 2,
     b: 5,
     c: {
         x: 7,
         y: 4
     }
 }

 const newNumbers = copyFan(numbers);
 newNumbers.a = 10;
 console.log(newNumbers);

 //Слияние объектов методом Object.assign
 const add = {
     d: 17,
     e: 20
 };

 Object.assign(numbers, add)
 //Копирование обьектов методом Object.assign (поверхностно)
 const clone = Object.assign({}, add); 

 //Копирование массива методом slice() (поверхностно)
 const oldArray = ['a', 'b', 'c'];
 const newArray = oldArray.slice();

 //Spread оператор или оператор разворота (ES6 для массивов ES8 для объектов)
 //Он разворачивает структуру и превращая ее в набор каких либо данных
 const video = ['youtube', 'vimeo', 'rutube'];
 const blogs = ['wordpress', 'livejournal', 'blogger'];
 const internet = [...video, ...blogs, 'vk', 'facebook'];
 //Еще один вариант использования spread оператора
 function log(a, b, c){
     console.log(a);
     console.log(b);
     console.log(c);
 }
const num = [2, 5, 7];
log(...num);
//Копирование массива spread
const arr = ['a','b'];
const newArr = [...arr];
//Копирование объекта spread
const objC = {
    one: 1,
    two: 2
};
const newObjC = {...objC};


