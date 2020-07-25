'use strict';

//Обравзение к элементу body (работает со всеми элементами)
document.body;

//Получение всего содержимого html страницы
console.log(document.documentElement);

//Получение элементов из родительского элемента body
//Получим nodeList из псевдомассива элементов
console.log(document.body.childNodes);

//Получение первого элемента body
console.log(document.body.firstChild);

//Получение послежнего эелемента body
console.log(document.body.lastChild);

//Получение родительского элемента
console.log(document.querySelector('#current').parentNode.parentNode);

//Получение data атрибута в html
console.log(document.querySelector('[data-current="3"]'));
//Получение следующего за ним элемента
console.log(document.querySelector('[data-current="3"]').nextSibling);

//Перебор всех дочерних нод из бади и удаление текстовых нод
for (let node of document.body.childNodes){
    if (node.nodeName === '#text'){
        continue;
    }
    console.log(node);
}