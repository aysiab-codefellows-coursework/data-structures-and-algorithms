'use strict';

const Stack = require('../stacks-and-queues/stack')

class PseudoQueue {
    constructor() {
        this.stack = new Stack();
        this.temp = new Stack();
    }

    enqueue(value) {
        if(this.stack.isEmpty()) {
            this.temp.push(value);
            this.stack = this.temp;
        } else {
            this.stack = new Stack();
            this.temp.push(value)
            let curr = this.temp.top;
            while(curr) {
                this.stack.push(curr.value)
                curr = curr.next;
            }
        }
    }

    dequeue() {
        if(this.stack.isEmpty()) {
            throw new Error("Nothing to dequeue, the queue is empty.")
        } else {
            this.stack.pop()
        }
    }
}

module.exports = PseudoQueue;