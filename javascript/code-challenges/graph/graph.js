'use strict';
const LinkedList = require('../linked-list/linked-list');
const Node = require('../linked-list/node');

class Graph {
    constructor() {
        this.list = [];
        this.count = 0;
    }

    addNode(value) {
        let edges = new LinkedList();
        this.list.push(edges);
        let index = this.list.length - 1;
        this.list[index].insert(value);
        this.count++;
        return this.list[index].head.value;
    }

    addEdge(start,end, weight) {
        let s_idx = this.findIndex(start);
        let e_idx = this.findIndex(end);
        if( s_idx == undefined || e_idx == undefined) {
            throw new Error('Cannot add edge, missing node.')
        } else {
            this.appendEdge(end,s_idx,weight);
            this.appendEdge(start, e_idx, weight);
        }
    }

    findIndex(node) {
        let index;
        for(let i = 0; i < this.list.length; i++) {
            if(this.list[i].head.value == node) {
                index = i;
            }
        }
        return index;
    }

    appendEdge(node, index, weight) {
        let edge;
        if(weight) {
            edge = {[node]: weight};
        } else {
            edge = node;
        }
        this.list[index].append(edge);
    }


    getNodes() {
        let all = [];
        if(!this.list.length) {
            return null;
        }
        for(var index of this.list) {
            all.push(index.head);
        }
        return all;
    }


    getNeighbors(node) {
        return this.list[this.findIndex(node)];
    }

    size() {
        return this.count;
    }


}

module.exports = Graph;