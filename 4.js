'use strict'

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 25);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);    

class Experiment {
    publicField = 2;
    #privateField = 0; 
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

class Article {
    static publisher = 'Dream Coding'; 
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
      }
    
      static printPublisher() {
        console.log(Article.publisher);
      }
    }
    const article1 = new Article(1);
    const article2 = new Article(2);
    console.log(Article.publisher);
    Article.printPublisher(); 

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

class Rectangle extends Shape{}
class Triangle extends Shape {}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

class User {
    constructor(firstName, lastName ,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ago = ago;
    }

    get age() {
        return this._ago;
    }

    set age(value) {
        this._ago = value < 0 ? 0 : value;
    }
}

const user1 = new User(st)