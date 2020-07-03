'use strict'; // Информация с https://learn.javascript.ru/object |  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Working_with_Objects |
//Объявление обьектов
const objO = new Object(); // Устаревший вариант
const objNew = {} // Такое обьвление называется литеральной натацией

const obj = {
    name: 'Trust',
    age: 23,
    isAdmin: true,
    "like animals": true, //Имя свойства состоящее из 2 слов записывается в кавычки
    citys: ['Moscow', 'Saratov', 'Ekb'],
    books: {
        Orwell: '1984',
        Azimov: 'Goods',
    },
    fun: function () {
        console.log('Hello mr. Trust');
    },
};
//Для обращения к свойства используется запись через точку
console.log(obj.name);
//Для удаления свойства используется оператор delete
delete obj.isAdmin;
//Вызов через точку не работает для имен состоящих из 2 слов
// console.log(objInfo.like animal)
//Для этого используется вызов через кавычки
console.log(obj["like animals"]);

//Квадратные скобки также позволяют обратиться к свойству, имя которого может быть результатом выражения.
// Например, имя свойства может храниться в переменной:
let key = "like animals";
console.log(obj[key]);
//================================================================================================
//Мы можем использовать квадратные скобки в литеральной нотации для создания вычисляемого свойства
const fruit = 'apple';
const objFruit = {
    [fruit]: 10,
    [fruit + "Computers"]: 5,
};
console.log(objFruit.apple);
console.log(objFruit.appleComputers);
//Смысл вычисляемого свойства прост: запись [fruit] означает, что имя свойства необходимо взять из переменной fruit.
//И если посетитель введёт слово "apple", то в объекте objFruit теперь будет лежать свойство {apple: 10}.
//================================================================================================
//=================================Свойство из переменной=========================================
//В реальном коде часто нам необходимо использовать существующие переменные как значения для свойств с тем же именем.
function makeUser(name, age) {
    return {
        name: name,
        age: age,
    }
}

const user = makeUser('Trust', 25);
console.log(user.name);
//В примере выше название свойств name и age совпадают с названиями переменных,
//которые мы подставляем в качестве значений этих свойств.
//Такой подход настолько распространён, что существуют специальные короткие свойства для упрощения этой записи.
//Вместо name:name мы можем написать просто name
function  makeUser1(name, age) {
    return {
        name,
        age
    }
}
const user1 = makeUser1('Max',20);
console.log(user1.name);