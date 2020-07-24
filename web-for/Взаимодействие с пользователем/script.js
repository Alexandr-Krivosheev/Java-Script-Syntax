"use strict";
//Обращаемся к кнопке с индексом alert задаем событие при нажатии
document.querySelector('#alert').addEventListener('click', function(){
    alert('He mr Trust');
});

document.querySelector('#confirm').addEventListener('click', () => {
    let deceseon = confirm('True or False?');

    if  (deceseon){
        alert('Hello trust');
    }
});

document.querySelector('#prompt').addEventListener('click', () => {
    let prom = prompt('Сколько тебе лет?', '');

    if (prom > 18){
        alert("Good job");
    }else {
        alert("You are very small");
    }
});

console.log('console.log');
console.warn('console.warn');
console.info('console.info');
console.error('console.error');

throw new Erron('Error');