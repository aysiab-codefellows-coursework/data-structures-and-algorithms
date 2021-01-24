'use strict';
const Graph = require('../graph');


describe('Graph Adjacency List', () => {
    let graph;

    beforeEach(() => {
        graph = new Graph();
    });

    it('Can successfully add a new noed to the graph', () => {
        graph.addNode('SEA');
        expect(graph.list[0].head.value).toBe('SEA');
    });

    it('Can successfully add an edge between two nodes in the graph', () => {
        graph.addNode('SEA');
        graph.addNode('LAX');
        graph.addEdge('SEA','LAX');
        expect(graph.list[0].head.next.value).toBe('LAX');
    });

    it('Can successfully retrieve all nodes from the graph', () => {
        graph.addNode('SEA');
        graph.addNode('LAX');
        graph.addNode('ATL');
        graph.addNode('DXB');
        expect(graph.getNodes().length).toBe(4);
    });

    it('Can successfully retrieve neighbors of a given node', () => {
        graph.addNode('SEA');
        graph.addNode('LAX');
        graph.addNode('ATL');
        graph.addNode('DXB');
        graph.addEdge('SEA', 'LAX');
        graph.addEdge('SEA','ATL');
        expect(graph.getNeighbors('SEA')).toEqual(graph.list[0]);
    });

    it('Can successfully return neighbors with their weighted value',() => {
        graph.addNode('SEA');
        graph.addNode('LAX');
        graph.addEdge('SEA','LAX',100);
        expect(graph.getNeighbors('SEA').head.next.value).toEqual({'LAX': 100});
    });

    it('Can properly return the size aka the number of nodes in the graph', () =>{
        graph.addNode('SEA');
        graph.addNode('LAX');
        graph.addNode('ATL');
        graph.addNode('DXB');
        expect(graph.size()).toBe(4);
    });

    it('Will return null for an empty graph', () => {
        expect(graph.getNodes()).toBe(null);
    })

});