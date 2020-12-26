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
})
