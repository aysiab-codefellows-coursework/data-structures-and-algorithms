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

    append(value) {
        if(this.head == null) {
            this.head = new Node(value);
        } else {
            let curr = this.head;
            while(curr.next != null) {
                curr = curr.next;
            }
            curr.next = new Node(value); 
        }
    }

    insertBefore(value, newVal) {
        let curr = this.head;
        if(this.head == null) {
            throw new Exception('There is no head');   
        } else if(this.head.next == null) {
            let newNode = new Node(newVal);
            newNode.next = this.head;
            this.head = newNode;
        }
        while(curr.next != null) {
            if(curr.next.value == value) {
                let newNode = new Node(newVal);
                newNode.next = curr.next;
                curr.next = newNode;
                break;
            }
            curr = curr.next;
        }
    }

    insertAfter(value, newVal) {
        let curr = this.head;
        if(this.head == null) {
            throw new Exception('There is no head');
        }
        while(curr != null) {
            if(curr.value == value) {
                let newNode = new Node(newVal);
                newNode.next = curr.next;
                curr.next = newNode;
                break;
            }
            curr = curr.next;
        }
    }
    
}

module.exports = LinkedList;
