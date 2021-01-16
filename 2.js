console.log(1+1);
console.log(2*2);
console.log(2/2);

let counter = 2;
const proIncrement = ++counter;
console.log(`preIncrement: ${proIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

let x = 3;
let y =6;
x += y;

const value1 = false;
const value2 = 4 < 2; // fales

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('#');
    }
    return true;
}

console.log(`or: ${value1 || value2 || check()}`);
console.log(`and: ${value1 && value2 && check()}`);

const stringFive = '5';
const numberFive = 5;

console.log(stringFive == numberFive); 
console.log(stringFive != numberFive);
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

const name = '김범수';
console.log(name === '김범수' ? 'yes' : 'no');
