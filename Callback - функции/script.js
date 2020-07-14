'use strict';

//Если функции идут в коде одна за другой не значит что они
//будут выполняться одна за другой
//Callback  функция  которая должна быть выполнена после того
// как другая функция закончит свое выполнение
// function first() {
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }
//
// function second() {
//     console.log(2);
// }
//
// first();
// second();

//Callback функция
function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback(); //Сначала выполняется строка консоль а потом функция callback
}

learnJS('JavaScript', function() {
    console.log('JS after first line'); //Вызов колбек функции
});

//Передача функции в callback
function learnJava(lang, callback) {
    console.log(`I learn ${lang}`);
}
function done() {
    console.log('Java the best');

}

learnJS('Java', done);