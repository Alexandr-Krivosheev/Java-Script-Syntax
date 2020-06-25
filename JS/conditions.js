"use strict";

//Оператор if(...) вычисляет условие в скобках и, если результат true, то выполняет блок кода.
const age = 77;
let info;
if (age < 18){
    info = 'You are small';
}else if (age > 18 && age < 30){
    info = 'You are ok';
}else if (age >= 30){
    info = 'You are old';
} else {
    info = 'You are dead';
}
console.log(info);

//Оператор if (…) вычисляет выражение в скобках и преобразует результат к логическому типу.
//Число 0, пустая строка "", null, undefined и NaN становятся false. Из-за этого их называют «ложными» («falsy») значениями.
// Остальные значения становятся true, поэтому их называют «правдивыми» («truthy»).

const year = 2018;
let yearNow = (year < 2020)? 'past' : 'future';
console.log(yearNow);

//Конструкция switch заменяет собой сразу несколько if.
//Она представляет собой более наглядный способ сравнить выражение сразу с несколькими вариантами.
const nums = 4;

switch (nums) {
    case 1:
        console.log('It is 1');
        break;
    case 2:
        console.log('It is 2');
        break;
    case 3:
        console.log('It is 3');
        break;
    case 4:
        console.log('It is 4');
        break;
    default:
        console.log('Error');

}

//Без break в ряд выводятся три лога
const j = 1;
switch (j) {
    case 1:
        console.log('Hello');
    case 2:
        console.log('Freak');
    case 3:
        console.log('beaches');
}
// Групприровка case

const a = 2 + 2;
switch (a) {
    case 4:
        console.log('Yes');
        break;
    case 3:
    case 5:
        console.log('No no no');
        console.log('Go learn math');
        break;
    default:
        console.log('Oh my god');
}
//Нужно отметить, что проверка на равенство всегда строгая. Значения должны быть одного типа, чтобы выполнялось равенство.

let hi = prompt('Enter a number','');
switch (hi) {
    case '1':
        console.log('It is 1');
        break;
    case '2':
        console.log('It is 2')
        break;
    case 3:
        console.log('Нмкогда не заработает');
        break;
    default:
        console.log('Infinity');

}