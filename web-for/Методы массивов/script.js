"use strict";
//Создаем строчный елемент
const str = '1,2,3,4,5,6,7,8';
//Преобразуем строку в массив строковых чисел методом split()
const array = str.split(',');
//Обратное преобразования массива в строку
//console.log(array.join(';'));
//Переворачиваем массив
//console.log(array.reverse());

//Работа с методом splice() первый индекс - индекс эл массива, второй - удаление или добавление кол-во элементов , 
// третий и последующие добавление элементовза место удаленных или за указанным индексом
array.splice(1, 0, '44', '22', '76');
console.log(array);

//Метод concat() копирует массив и (или) добавляет в него элементы нового массива
const arr = array.concat([1, 5, 7]);
console.log(arr);

const objArr = [
    {name: 'Max', age: 25},
    {name: 'Alex', age: 27},
    {name: 'Elena', age: 35}
];
//Перебор елементов массива методом find()
let foundPerson = objArr.find( (person) => {
    console.log(person);
});

let foundPer = objArr.find( (person) => {
    return person.age === 25;
});

console.log(foundPer);
//Получение из массива только четных чисел методом filter()
const oddArr = [1, 2, 3, 4, 5, 6, 7, 8].filter( (i) =>{
    return i % 2 === 0;
});
console.log(oddArr);

//Преобразование массива из строк в числа

const numArr = array.map( (i) => {
    return parseInt(i);
});
console.log(numArr);