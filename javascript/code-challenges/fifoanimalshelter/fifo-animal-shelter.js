'use strict';

class AnimalShelter {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(animal) {
        if(!this.front) {
            this.front = animal;
            this.rear = this.front;
        } else {
            animal.next = this.rear;
            this.rear = animal;
        }

    }

    dequeue(pref) {
        // stretch goal: 
        // if there is a preference always check the front first
        // if there is no preference, return the front anyways
        // since it is the one that was added the longest time ago aka first
        if (this.front.type == pref || !pref) {
            return this.front;
        }
        let ret = this.front;
        let curr = this.rear;
        while(curr != null) {
            if(curr.type == pref && curr.next) {
                ret = curr;
            }
            curr = curr.next;
        }
        return ret;
    }
}

module.exports = AnimalShelter;