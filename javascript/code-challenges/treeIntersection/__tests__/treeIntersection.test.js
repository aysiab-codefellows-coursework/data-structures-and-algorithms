'use strict';

const treeIntersection = require('../treeIntersection');
const BinaryTree = require('../../tree/tree');

describe('TreeIntersection', () => {
    let tree1;
    let tree2;

    beforeEach(() => {
        tree1 = new BinaryTree();
        tree2 = new BinaryTree();
    })

    it('Will return null if either tree is empty ', () => {
        expect(treeIntersection(tree1, tree2)).toBe(null);
    })

    it('Can return a an array of matching values with one tree only have one node', () => {
        tree1.add(5);
        tree2.add(7);
        tree2.add(5);
        tree2.add(11);
        expect(treeIntersection(tree1,tree2)).toEqual([5]);
    })

    it('Can return a an array of matching values', () => {
        tree1.add(5);
        tree1.add(7);
        tree1.add(6);
        tree1.add(1);
        tree2.add(7);
        tree2.add(5);
        tree2.add(11);
        tree2.add(1);
        expect(treeIntersection(tree1,tree2)).toEqual([5,1,7]);
    })

    it('Will return null if there are no matching values', () => {
        tree1.add(15);
        tree1.add(22);
        tree1.add(6);
        tree1.add(3);
        tree2.add(7);
        tree2.add(5);
        tree2.add(11);
        tree2.add(1);
        expect(treeIntersection(tree1,tree2)).toBe(null);
    })


})