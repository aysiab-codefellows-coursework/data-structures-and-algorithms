'use strict';
const e = require('express');
const LinkedList = require('../linked-list/linked-list');

class HashTable {
    constructor() {
        this.buckets = [];

    }

    hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        hash = hash * 599;
        hash = hash % 1024;
        return hash;

    }

    add(key, value) {
        let index = this.hash(key);
        let exists = false;
        if(!this.buckets[index]) {
            this.buckets[index] = new LinkedList();
        } else {
           let curr = this.buckets[index].head;
           while(curr) {
               if(curr.value[key]) {
                   exists = true;
               }
               curr = curr.next;
           } 
        }
        if(!exists) {
            this.buckets[index].insert({[key]: value});
        }
    }

    get(key) {
        let index = this.hash(key);
        if(this.buckets[index]) {
            let curr = this.buckets[index].head;
            while(curr) {
                 if(curr.value[key]) {
                    return curr.value[key];
                 }
                 curr = curr.next;
            }
        } 
            return null;
    }

    update(key, value) {
        let index = this.hash(key);
        if(this.buckets[index]) {
            let curr = this.buckets[index].head;
            while(curr) {
                if(curr.value[key]) {
                    curr.value[key] = value;
                }
                curr = curr.next;
            }
        }
    }

    contains(key) {
        if(this.get(key)) {
            return true;
        }
        return false;
    }
}

module.exports = HashTable;