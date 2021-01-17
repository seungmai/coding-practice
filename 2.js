'use strict'
console.log('my' + 'cat');
console.log('1' + 2);
console.log(1 + 3);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(1 % 1); 
console.log(1 ** 1);

let counter = 5;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${preDecrement}, counter: ${counter}`);

let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

const value1 = false;
const value2 = 4 < 2;

function check() {
    for(let i = 0; i < 10; i++){
    console.log('#');
    }
    return true;
}

console.log(`or: ${value1 || value2 || check()}`)
console.log(`and: ${value1 && value2 && check()}`);
console.log(!value1);
console.log(!value2);
console.log(!check);

const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive); //문자열이든 숫자든 똑같다고 판단.
console.log(stringFive != numberFive); //문자열이든 숫자든 똑같지 않다고 판단.
console.log(stringFive === numberFive); //문자열이든 숫자든 똑같이 않다고 판단.
console.log(stringFive !== numberFive); //문자열이든 숫자든 똑같다고 판단.

const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); // true
console.log('' === false); //false 
console.log(null == undefined);
console.log(null === undefined);

const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwon');
}

console.log(name === 'ellie' ? 'yes' : 'no');

const browser = 'Chrome';
switch (browser) {
    case 'IE':
        console.log('a');
        break;
    case 'Chrome':
        console.log('b');
        break;
    case 'Firefox':
        console.log('c');
        break;
        default:
            console.log('abc');
            break;
}

let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

do {
    console.log(`do while: ${i}`);
    i--;
} while ( i > 0);

for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

for(i = 0; i < 11; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(`q1. ${i}`);
}

for(i = 0; i < 11; i++){
    if(i > 8){
        break;
    }
    console.log(`q2. ${i}`);
}