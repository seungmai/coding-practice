'use strict'

function calculate(command, a, b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'substract':
            return a = b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error(`unkonwn command`);     
    }
}
console.log(calculate(`add`, 5, 3));

