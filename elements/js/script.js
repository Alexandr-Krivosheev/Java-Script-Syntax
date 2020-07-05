'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');

//Изменение CSS стилей через обращение к элементу с id = box
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

//Изменение css стилей через cssText
box.style.cssText = 'background-color: blue; width: 500px';
//Изменение элемента btns[1] с помощью css стилей
btns[1].style.borderRadius = '100%';

//При обращении к псевдомассиву а не к элементу будет получена ошибка
//circles.style.backgroundColor = 'red'; - Не правельное обращение
circles[0].style.backgroundColor = 'red'; // Правельное обращение к эелементу
