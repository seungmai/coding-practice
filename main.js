'use strict'

let globalName = 'global name';
{
let name = 'seungmin';
console.log(name);
name = 'hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

let age = 4;
console.log(age);

const dayInWeek = 7;
console.log(dayInWeek);

const count = 25;
console.log(`value: ${count}, type: ${typeof count}`);
const size = 25.1;
console.log(`value: ${size}, type: ${typeof size}`);


const infinity = 1 / 0;
console.log(infinity);
const negativeInfinity = -1 / 0;
console.log(negativeInfinity);
const nAn = 'not a number'/ 2;
console.log(nAn);

const bigInt = 121213123123213123123123123123123n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

const char = 'c';
console.log(char);
const brendan = 'brendan';
console.log(`bendan`);
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type ${typeof helloBob}`)

const a = true;
console.log(`value: ${a}, type: ${typeof a}`);

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);


let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '5' / 2;
console.log(`value: ${text}, type: ${typeof text}`);
text = '5' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

const seungmin = {name: 'lee seungmin', age:'25'};
seungmin.age = 24;