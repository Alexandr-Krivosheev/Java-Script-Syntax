"use strict";

const arr = [1, 2, 3, 6, 8];

// arr.pop(); //Удаление последнего элемента
arr.push(10); // Добавление последнего эл
console.log(arr);

//=========Перебор массива =======================
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
//================================================

//===============Перебор массива for of ===========
for (let value of arr){
    console.log(value);
}
//==================================================
//.length состоит из последнего индекса массива  + 1

//=============Перебор массива forEach======================
arr.forEach(function(item,i,arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});
//В основном используется перебор forEach но если требуется
//использовать break или continue по используется for of
//===========================================================

//============Сортировка числового массива методом sort() =========
const arrSec = [2, 13, 26, 8, 10];
arrSec.sort();
console.log(arrSec);
//Если мы отсортируем числовой массив через sort() просто то резульат
// будет [ 10, 13, 2, 26, 8 ] что бы избежать такой сортировки нужно
// использовать функцию
arrSec.sort(compareNum);
console.log(arrSec);

function compareNum(a, b) {
    return a - b;
} // Результат [ 2, 8, 10, 13, 26 ]
//===============================================================

//================ Методы массивов на практике ==============
const str = prompt('','');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));