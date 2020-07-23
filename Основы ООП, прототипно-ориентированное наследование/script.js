'use strict';
//Устаревший формат наследования через __proto__
//Создаем родительский обьект
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function () {
        console.log('Hello');
    },
};
//Создаем дочерний обьект который будет наследовать от родительского
const john = {
    health: 100
};
//Наследуем джон от солдата. Все элементы становяться доступны john
john.__proto__ = soldier;
john.sayHello();
//=====================================================================

//Наследование если обьект создан методом Object.setPrototypeOf()
const car = {
    color: 'red',
    years: 2010,
}
const auto = {
    color: 'blue'
}
Object.setPrototypeOf(auto, car);
console.log(auto.years);
//=====================================================================

//Наследование при создании обькта методом Object.create()
const people = {
    age: 25,
    city: 'Moscow',
}
//Наследуем элементы от родительского обьета при создании
const person = Object.create(people);