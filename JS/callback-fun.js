"use strict";

function first() {
    setTimeout(function () {
        console.log(1)
    }, 500);
}

function second() {
    console.log(2);

}
first();
second();

//Callback

function learnJs(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}
function done() {
    console.log('I finish js');
}

learnJs('JavaScript',done);
