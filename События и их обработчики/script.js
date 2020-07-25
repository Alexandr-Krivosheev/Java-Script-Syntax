"use strict";

//События в JS выполняются в порядке очереди
//Обращение к тегу button
const btns = document.querySelectorAll('button');
const overlay = document.querySelector('overlay')
//Добавление события
// btn.addEventListener('click', () => {
//     alert('First click');
// });
// btn.addEventListener('click', () => {
//     alert('Second click');
// });

//Функция удаляющая элемент со страницы
const deleteElementSec = (e) => {
    e.target.remove();
}
 let i = 0
const deleteElement = (e) => {
    console.log(e.target);
    //console.log(e.type);
     i++;
    if (i === 0){
        //Удаление обработчика событий после клика
        btn.removeEventListener('click', deleteElement);
    }
}
//Создаем событие при клике вызываем функцию и она удаляет элемент
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});

//Изменение поведения элемента
//Вместо перехода по ссылке тега <a> будет выводится инофрмация в консоль
const link = document.querySelector('a');
link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target);
});