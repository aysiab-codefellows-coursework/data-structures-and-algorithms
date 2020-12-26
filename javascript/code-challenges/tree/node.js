'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.count = 1;
        this.leftChild = null;
        this.rightChild = null;
    }
}

module.exports = Node;