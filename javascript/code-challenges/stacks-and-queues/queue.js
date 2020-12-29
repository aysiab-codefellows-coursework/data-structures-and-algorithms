'use strict';

const Node = require('./node');


class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(value) {
        if(this.front == null) {
            this.front = new Node(value);
            this.back = this.front;
        } else {
            let newNode = new Node(value);
            newNode.next = this.back;
            this.back = newNode;
        }
        this.length += 1;
    }

    dequeue() {
        if(this.front == null) {
            throw new Error('Nothing to dequeue, queue is empty')
        } else {
            let ret = this.front;
            let curr = this.back;
            while(curr != ret) {
                if(curr.next == ret) {
                    this.front = curr;
                }
                curr = curr.next;
            }
            this.length -= 1;
            return ret.value;
        }
    }

    peek() {
        if(this.front == null) {
            throw new Error('Nothing to peek, queue is empty')
        } else {
            return this.front.value;
        }
    }

    isEmpty() {
        if(this.length == 0) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Queue;