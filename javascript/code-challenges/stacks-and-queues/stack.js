'use strict';

const Node = require('./node')

class Stack {
    constructor() {
        this.top = null;        
    }

    push(value) {
        let newNode = new Node(value);
        if(this.top != null) {
            newNode.next = this.top;
            this.top = newNode;
        } else {
            this.top = newNode;
        }
    }

    pop() {
        if(this.top == null) {
            throw new Exception('Nothing to pop, the stack is empty')
        } else {
            let ret = this.top;
            this.top = this.top.next;
            return ret.value;
        }
    }

    peek() {
        if(this.top == null) {
            throw new Exception('Nothing to peek, the stack is empty')
        } else {
            return this.top.value;
        }
    }

    isEmpty() {
        if(this.top == null) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Stack;