'use strict';

const Animal = require('./animal')

class Dog extends Animal {
    constructor(name, breed, age) {
        super(name, breed, age);
        this.type = 'dog';
        this.sound = 'Woof!';
    }
}

module.exports = Dog;