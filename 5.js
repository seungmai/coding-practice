'use strict'

const obj1 = {};
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'ago');

// const person1 = {name: 'bob', age: 2};
// const person2 = {name: 'steve', age: 3};
// const person3 = {name: 'dave', age: 4};
// const person4 = new Person('ellie', 30);
// console.log(person4);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

 console.log('name' in ellie);
 console.log('age' in ellie);
 console.log('dasd' in ellie);
 console.log(ellie.daasd);

 console.clear();
 for (let key in ellie) {
     console.log(key);
 }

 const array = [1, 2, 3, 5];
 for (let value of array) {
     console.log(value);
 }

 const user = {name: 'ellie', age: '20'};
 const user2 = user;
 console.log(user);
 console.log(user2);

 const user3 = {};
 for (let key in user) {
     user3[key] = user[key];
 }
 console.clear();
 console.log(user3);

 const user4 = Object.assign({}, user);
 console.log(user4);

 const fruit1 = {color: 'red'};
 const fruit2 = {color: 'blue', size: 'big'};
 const mixed = Object.assign({}, fruit1, fruit2);
 console.log(mixed.color);
 console.log(mixed.size);
