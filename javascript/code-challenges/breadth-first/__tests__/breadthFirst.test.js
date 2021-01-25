'use strict';

const Graph = require('../../graph/graph');
const LinkedList = require('../../linked-list/linked-list');
const breadthFirst = require('../breadthFirst');

describe('Breadth First Search of a Graph', () => {
    let graph;
    let ret;

    beforeEach(() => {
        graph = new Graph();
        ret = new LinkedList();
    });


    it('Can perform a proper breadth first search', () => {
        graph.addNode('SEA');
        graph.addNode('LAX');
        graph.addNode('ATL');
        graph.addNode('DBX');
        graph.addEdge('SEA','LAX');
        graph.addEdge('SEA','DBX');
        graph.addEdge('LAX','ATL');
        ret.append('SEA');
        ret.append('LAX');
        ret.append('DBX');
        ret.append('ATL');
        expect(breadthFirst(graph)).toEqual(ret);
    });

    it('Will return null if given an empty graph', () =>{
        expect(breadthFirst(graph)).toBe(null);
    });

    it('Can perform a proper breadth first search with weighted edges', () => {
        graph.addNode('SEA');
        graph.addNode('LAX');
        graph.addNode('ATL');
        graph.addNode('DBX');
        graph.addEdge('SEA','LAX',50);
        graph.addEdge('SEA','DBX');
        graph.addEdge('LAX','ATL',25);
        ret.append('SEA');
        ret.append('LAX');
        ret.append('DBX');
        ret.append('ATL');
        expect(breadthFirst(graph)).toEqual(ret);
    });
});