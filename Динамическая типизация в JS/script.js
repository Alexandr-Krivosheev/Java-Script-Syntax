"use strict";

//1) Преобразование в строку
console.log(typeof String(null)); //string

//2) При сложении null и строки получим строку
console.log(typeof(null + '')); // string

//Преобразование к number
//1)
console.log(typeof Number('4'));//number
//2)
console.log(typeof  +'4'); //number
//3)
console.log(typeof(parseInt('15px', 10))); //number

//To boolean
//false: 0, '', null, undefined, NaN;

let switcher = null;
if (switcher) {
    console.log('Working...');
}
switcher = 1;
if (switcher){
    console.log('Working...');
}

//2)
console.log(typeof Boolean('4'));

//3) !! - преобразуют к булинову типу
console.log(typeof (!!"4444"));//Boolean