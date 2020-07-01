"use strict";

const options = {
    name: 'text',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};
options.makeTest();
console.log(Object.keys(options));
console.log(Object.keys(options).length);
console.log(options['colors']['border']);

//======Дестрикруризация===========
const {border, bg} = options.colors;
console.log(border, bg);
//==================================


// delete options.name;
// console.log(options);

// for(let key in options){
//     if (typeof options[key] === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }


//Создаем счетчик свойств
let counter = 0;
for (let key in options){
    if (typeof options[key] === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
    counter++;
}

console.log(counter)


const objTest = {
    name: 'Trust',
    age: 23,
    city: 'Saratov',
    books: {
        azimov: 'founder',
        orwell: '1984',
        dokinz: 'gen',
    }
}

console.log(Object.keys(objTest).length);
for (let key in objTest){
    if (typeof objTest[key] === 'object'){
        for (let i in objTest[key]){
            console.log(`Свойство ${i} имеет значение ${objTest[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${objTest[key]}`);
    }
}

const{azimov, orwell, dokinz} = objTest.books;
console.log(azimov, orwell, dokinz);