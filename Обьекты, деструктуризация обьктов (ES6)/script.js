'use strict';
//Обьекты в JS это ассиотивные массивы
const obj = new Object(); //Старый способ не используется
//Создание обьекта
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};
console.log(options.name); // Вызов элемента обьекта

delete options.name; // Удаление элемента обьекта
console.log(options);

//Перебор свойств обьекта for in
//Вывод в консоль все пары ключь значение
for (let key in options){
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}
//Перебор если в нутри обьекта ключи являются обьектами
for (let key in options){
    if(typeof options[key] === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}
//Подсчет количества свойств с помощью цикла
let counter = 0;
for (let key in options){
    if (typeof options[key] === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    }
    else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

//Классический вариант вывода кол-во свойств в обьекте через цикл
let count = 0
for (let key in options){
    count++;
}
console.log(count);
//Вывод кол-ва свойсв в обьекте через метод  keys()
console.log(Object.keys(options).length);
//Деструктуризация обьктов - вызов вложенных свойств
// вытаскивание элементов в качестве отдельных структур
const {border, bg} = options.colors;
//           ^               ^
//           |               |
//То что хотим вытащить | Структура откуда хотим вытащить