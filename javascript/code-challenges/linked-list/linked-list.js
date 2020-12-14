'use strict';

let Node = require('./node')

class LinkedList {
    constructor() { 
        this.head = null;
    }

    insert(value) {
        if(this.head == null) {
            let first = new Node(value);
            this.head = first;
        } else {
            const node = new Node(value);
            node.next = this.head;
            this.head = node;
        }
    }

    includes(value) {
        let curr = this.head;
        while(curr != null && curr.next != null) {
            if (curr.value == value || curr.next.value == value) {
                return true;
            }
            curr = curr.next.next;
        }
        return false;
    }

    toString() {
        let curr = this.head;    
        let ret = '';
        while(curr != null) {
            if(curr == this.head) {
                ret = `{ ${curr.value} } -> `
            } else  {
                ret = `${ret}{ ${curr.value} } -> `
            }
            curr = curr.next;
        } 
        ret = `${ret}NULL`
        return ret;
    }
    
}

module.exports = LinkedList;
