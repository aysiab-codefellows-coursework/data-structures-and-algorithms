'use strict';

const Node = require('./node')

class Stack {
    constructor() {
        this.top = null;     
        this.length = 0;   
    }

    push(value) {
        let newNode = new Node(value);
        if(this.top) {
            newNode.next = this.top;
            this.top = newNode;
        } else {
            this.top = newNode;
        }
        this.length++;
    }

    pop() {
        if(!this.top) {
            throw new Error('Nothing to pop, the stack is empty')
        } else {
            let ret = this.top;
            this.top = this.top.next;
            this.length--;
            return ret.value;
        }
    }

    peek() {
        if(!this.top) {
            throw new Error('Nothing to peek, the stack is empty')
        } else {
            return this.top.value;
        }
    }

    isEmpty() {
        if(!this.top) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Stack;