"use strict";

//Цикл while имеет следующий синтаксис:
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

//Проверку условия можно разместить под телом цикла, используя специальный синтаксис do..while:
let a = 0
do {
    console.log(`Number ${a}`);
    a++;
}while (a < 4)
//Такая форма синтаксиса оправдана, если вы хотите, чтобы тело цикла выполнилось хотя бы один раз,
// даже если условие окажется ложным.
//На практике чаще используется форма с предусловием: while(…) {…}.

//Цикл for()
for (let i = 0; i < 3; i++){
    console.log(i);
}
//начало i = 0 Выполняется один раз при входе в цикл
//условие	i < 3	Проверяется перед каждой итерацией цикла. Если оно вычислится в false, цикл остановится.
// шаг	i++	Выполняется после тела цикла на каждой итерации перед проверкой условия.
// тело	console.log(i)	Выполняется снова и снова, пока условие вычисляется в true.

//Обычно цикл завершается при вычислении условия в false.
//Но мы можем выйти из цикла в любой момент с помощью специальной директивы break.
//Например, следующий код подсчитывает сумму вводимых чисел до тех пор, пока посетитель их вводит, а затем – выдаёт:
let sum = 0;
while(true){
    let value = +prompt('Enter a number', '');
    if(!value) break;
    sum += value;
}
alert('Sum: ' + sum);

//Директива continue – «облегчённая версия» break. При её выполнении цикл не прерывается, а переходит к
//следующей итерации (если условие все ещё равно true).
for(let i = 0; i < 10; i++){
    if (i % 2 === 0) continue;
    console.log(i)
}

//Бывает, нужно выйти одновременно из нескольких уровней цикла сразу.
// Например, в коде ниже мы проходимся циклами по i и j, запрашивая с помощью prompt координаты (i, j) с (0,0) до (2,2):
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        let input = prompt(`Значение на координатах (${i},${j})`, '');
        alert('Yes');
    }
}
alert('Yes');
//Нам нужен способ остановить выполнение если пользователь отменит ввод.
// Обычный break после input лишь прервёт внутренний цикл, но этого недостаточно. Достичь желаемого поведения можно с помощью меток.
// Метка имеет вид идентификатора с двоеточием перед циклом:
outer: for (let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        let input = prompt(`Значение на координатах (${i},${j})`, '');
        if(!input) break outer;
    }
}
alert('Yes');
//В примере выше это означает, что вызовом break outer будет разорван внешний цикл до метки с именем outer, и управление
// перейдёт со строки, помеченной (*), к alert('Yes').