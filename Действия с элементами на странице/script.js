'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');

//Альтернативный вызов со вложенностью от родителького элемента
// const wrapper = document.querySelector('.wrapper');
// const hearts = wrapper.querySelector('.heart')
// const oneHeart = wrapper.querySelector('.heart');


//Изменение CSS стилей через обращение к элементу с id = box
box.style.backgroundColor = 'blue';
box.style.width = '500px';

//Изменение css стилей через cssText
box.style.cssText = 'background-color: blue; width: 500px';
//Изменение элемента btns[1] с помощью css стилей
btns[1].style.borderRadius = '100%';

//При обращении к псевдомассиву а не к элементу будет получена ошибка
circles.style.backgroundColor = 'red'; // - Не правельное обращение
circles[0].style.backgroundColor = 'red'; // Правельное обращение к эелементу

//Перебор элементов циклом for и взамодействие с каждым из них
for (let i = 0; i < hearts.length; i++){
    hearts[i].style.backgroundColor = 'blue';
}

//Перебор элементов hearts методом forEach и замена стилей
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

// Добавление тега на страницу
const div = document.createElement('div');
// Добалние текста на страницу (Почти не используется)
const text = document.createTextNode('Hello mr trust');

//Взаимодействие с классами тега через js. Добаляем класс black в тег div . black создан в файлах со стилями
div.classList.add('black');

//Добавление элемента через DOM дерево на страницу в конец основного тега body
document.body.append(div);

//Еще один способ получения элементов
document.querySelector('.wrapper').append(div);

//Добавление тега div в тег с классом wrapper в кнец
wrapper.append(div);
wrapper.appendChild(div) //Устаревший вариант

//Для добавления в начало используется prepend
wrapper.prepend(div);
//Для вставки перед или после элементов  используются before и after
hearts[0].before(div);
hearts[0].after(div);
//Устаревший вариант добавления
wrapper.insertBefore(div, hearts[1]);

//Удаление элемента
circles[0].remove();
//Устаревший вариант
wrapper.removeChild(hearts[0]);

//Замена элементов . Заменяем элемент hearts на circles
hearts[0].replaceWith(circles[0]);
//Устаревший вариант замены
wrapper.replaceChild(circles[1], hearts[1]);

//Добавление html структуры или текста в элемент div
div.innerHTML = "<h1>Hello</h1>";
//Добавление только текста в элемент div
div.textContent = "Hello";

//Вставка html структуры методом insertAdjacentHTML
div.insertAdjacentElement("afterend","<h1>Hello</h1>");