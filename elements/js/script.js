'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
box.style.cssText = `background-color: blue; width: 500px;`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Hello');

div.classList.add('black');

document.body.append(div);