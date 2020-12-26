'use strict';

const Node = require('./node')

class BinaryTree {
    constructor() {
        this.root = null;

    }

    // arr is the array to be returned, insantiate with empty array
    // instantiate current with this.root
    preOrder(arr, current){
        // root left right
        let ret = arr;
        if(current) {
            ret.push(current.value);
            ret = this.preOrder(ret, current.leftChild);
            ret = this.preOrder(ret, current.rightChild);
        }
        return ret;
    }

    // arr is the array to be returned, insantiate with empty array
    // instantiate current with this.root
    inOrder(arr, current){
        // left root right 
        let ret = arr;
        if(current) {
            ret = this.inOrder(ret, current.leftChild);
            ret.push(current.value);
            ret = this.inOrder(ret, current.rightChild);
        }
        return ret;
    }

    // arr is the array to be returned, insantiate with empty array
    // instantiate curret with this.root
    postOrder(arr, current) {
        // left right root
        let ret = arr;
        if(current) {
            ret = this.postOrder(ret, current.leftChild);
            ret = this.postOrder(ret, current.rightChild);
            ret.push(current.value);
        }
        return ret;
    }
}

class BinarySearchTree extends BinaryTree {
    constructor() {
        super();

    }

    // always instantiate current with this.root
    add(value, current) {
        if(current == this.root && !this.root) {
            this.root = new Node(value);
        } else if(value > current.value) { 
            if(!current.rightChild) {
                current.rightChild = new Node(value);
            } else {
                this.add(value, current.rightChild);
            }
        } else if(value < current.value) {
            if(!current.leftChild){
                current.leftChild = new Node(value);
            } else {
                this.add(value, current.leftChild)
            }
        } else if(value == current.value) {
            current.count += 1;
        }

    }

    // always instantiate current with this.root
    contains(value, current) {
        if(!current) {
            return false;
        } else {
            if(current.value == value) {
                return true;
            } else if(value > current.value) {
                this.contains(value, current.right);
            } else if(value < current.value) {
                this.contains(value, current.left);
            }
    
        }
    }
}

module.exports = BinarySearchTree;