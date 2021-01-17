'use strict'

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);

function showMessage(messge, from = 'unknown'){
    console.log(`${messge} by ${from}`);
}
showMessage('Hi!');

function printAll(...args) {
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();

function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

function upgradeUser(user) {
    if (user.point > 10) {
    }
}

const print = function() {
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
const printYes = function () {
    console.log('yes!');
  };

const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

const simplePrint = function () {
    console.log('simplePrint!');
};

//const simplePrint = () => console.log('simplePrint!');
//const add = (a, b) => a + b;
//const simpleMultiply = (a, b) => {
//    return a*b;
//};

(function hello(){
    console.log('IIFE');
}());

function calculate(command, a, b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a * b;
        case 'multiply':
            return a / b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unkonwn command');         
    }
}
console.log(calculate('multiply', 2, 3));