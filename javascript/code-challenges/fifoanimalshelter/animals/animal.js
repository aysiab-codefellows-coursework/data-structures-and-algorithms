'use strict';

class Animal {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.next = null;
    }
}

module.exports = Animal;