'use strict';

const Animal = require('./animal');

class Cat extends Animal {
    constructor(name, breed, age) {
        super(name, breed, age);
        this.type = 'cat';
        this.sound = 'Meow!';
    }
}

module.exports = Cat;