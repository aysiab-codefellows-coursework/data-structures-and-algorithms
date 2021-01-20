'use strict';
const BinaryTree = require('../tree/tree')


function treeIntersection(tree1, tree2) {
    if(!tree1.root || !tree2.root) { return null; }
    let newTree1 = tree1.preOrder();
    let newTree2 = tree2.preOrder();
    let ret = [];
    for(let i = 0; i < newTree1.length; i++) {
        for(let j = 0; j < newTree2.length; j++) {
            if(newTree1[i] == newTree2[j]){
                console.log(newTree1[i]);
                ret.push(newTree1[i]);
                break;
            }
        }
    }
    if(!ret.length) { return null }  
    return ret;
    
}

module.exports = treeIntersection;