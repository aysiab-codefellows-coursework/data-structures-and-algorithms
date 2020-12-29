'use strict';

const BST = require('../tree');

describe('Binary Search Tree', () => {
    let tree;
    
    beforeEach(() => {
        tree = new BST();
    })

    it('Can successfully instantiate an empty tree', () => {
        expect(tree.root).toBe(null);
    })

    it('Can successfully instantiate a tree with a single root node', () => {
        tree.add(10, tree.root);
        expect(tree.root.value).toBe(10);
        expect(tree.root.rightChild).toBe(null);
        expect(tree.root.leftChild).toBe(null);
    })

    it('Can sucessfully add a left and right child to a single root node', () => {
        tree.add(10, tree.root);
        tree.add(5, tree.root);
        tree.add(18, tree.root);
        expect(tree.root.value).toBe(10);
        expect(tree.root.rightChild.value).toBe(18);
        expect(tree.root.leftChild.value).toBe(5);
    })

    it('Can successfully have a multi leveled tree', () => {
        tree.add(10, tree.root);
        tree.add(5, tree.root);
        tree.add(18, tree.root);
        tree.add(11, tree.root);
        tree.add(2, tree.root);
        tree.add(7, tree.root);
        expect(tree.root.value).toBe(10);
        expect(tree.root.rightChild.value).toBe(18);
        expect(tree.root.leftChild.value).toBe(5);
        expect(tree.root.leftChild.leftChild.value).toBe(2);
        expect(tree.root.leftChild.rightChild.value).toBe(7);
        expect(tree.root.rightChild.leftChild.value).toBe(11);
    })

    it('Can return a collection from a preorder traversal', () => {
        tree.add(10, tree.root);
        tree.add(5, tree.root);
        tree.add(18, tree.root);
        expect(tree.preOrder([],tree.root)).toEqual([10, 5, 18]);
    })

    it('Can return a collection from a inorder traversal', () => {
        tree.add(10, tree.root);
        tree.add(5, tree.root);
        tree.add(18, tree.root);
        expect(tree.inOrder([],tree.root)).toEqual([5, 10, 18]);
    })

    it('Can return a collection from a postorder traversal', () => {
        tree.add(10, tree.root);
        tree.add(5, tree.root);
        tree.add(18, tree.root);
        expect(tree.postOrder([],tree.root)).toEqual([5, 18, 10]);
    })
    
    it('Can return a max value from the tree', () => {
        tree.add(10, tree.root);
        tree.add(5, tree.root);
        tree.add(18, tree.root);
        expect(tree.findMaximumValue()).toBe(18);
    })

    it('Can return the root value if its the only node', () => {
        tree.add(2);
        expect(tree.findMaximumValue()).toBe(2);
    })

    // this test fails because it recieves [5, 2, 11, 11, 7]
    // am currently unsure why
    it('Can successfully perform a breadth first search', () => {
        tree.add(5);
        tree.add(11);
        tree.add(2);
        tree.add(7);
        expect(tree.breadthFirst()).toEqual([5,2,11,7]);
    })

    it('Can successfully perform a breadth first search with only one node', () => {
        tree.add(5);
        expect(tree.breadthFirst()).toEqual([5]);
    })

    it('Will throw an error on a breadth first search on an empty tree', () => {
        expect(() => tree.breadthFirst()).toThrow('The tree is empty');
    })
    
})
