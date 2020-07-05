"use strict";
//Получение элементов со страниц
//* Псевдо массивы - это коллекция массив без методов классического массива
const box = document.getElementById('box'); // Получение элемента со страницы через id
const btns = document.getElementsByTagName('button'); // Обращение к элементам через тег
//При обращении мы получаем не один элемен а псевдо массив
//Для получения одного элемента а не коллекции нужно обращаться к индексу элемента
const buttonEl = document.getElementsByTagName('button')[1]; //Обращение к элементу по индексу 1
//Либо можно получить один элемент из коллекции
console.log(btns[0]);

const circles = document.getElementsByClassName('circle'); //Обращение к элементу через class тега
//Получаем также псевдомассив

const hearts = document.querySelectorAll('.heart'); //Обращение к эелементам через селекторы css
//Получаем коллекцию (NodeList)
//.class, #id, tag, и т.д.

//Вывод всех элементов которые находятся в этом псевдомассиве
hearts.forEach(item =>{
    console.log(item);
});

//Для получения одного элемента а не коллекции нужно использовать querySelector()
const oneHeart = document.querySelector('.heart');