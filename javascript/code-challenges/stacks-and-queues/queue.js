'use strict';

const Node = require('./node');


class Queue {
    constructor() {
        this.front = null;
        this.back = null;
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
    }

    dequeue() {
        if(this.front == null) {
            throw new Exception('Nothing to dequeue, queue is empty')
        } else {
            let ret = this.front;
            let curr = this.back;
            while(curr != ret) {
                if(curr.next == ret) {
                    this.front = curr;
                }
                curr = curr.next;
            }
            return ret.value;
        }
    }

    peek() {
        if(this.front == null) {
            throw new Exception('Nothing to peek, queue is empty')
        } else {
            return this.front.value;
        }
    }

    isEmpty() {
        if(this.front == null) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Queue;