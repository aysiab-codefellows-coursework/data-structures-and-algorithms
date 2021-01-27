'use strict';

const Graph = require('../../graph/graph');
const getEdge = require('../getEdge');

describe('getEdge', () => {
    let graph;
    let cities;

    beforeEach(() => {
        graph = new Graph();
        graph.addNode('Seattle');
        graph.addNode('Bellevue');
        graph.addNode('Renton');
        graph.addNode('Tukwila');
        graph.addNode('Tacoma');
        graph.addEdge('Seattle','Bellevue', 10);
        graph.addEdge('Seattle','Renton', 15);
        graph.addEdge('Bellevue','Tacoma', 25);
        graph.addEdge('Renton', 'Tukwila', 10);
    })

    it('Happy case: will return true with the correct amount', () => {
        cities = ['Seattle', 'Bellevue','Tacoma'];
        expect(getEdge(graph, cities)).toEqual([true, '$35'])
    });

    it('Fail case: will return false with a zero dollar amount', () => {
        cities['Seattle','Tukwila'];
        expect(getEdge(graph,cities)).toEqual([false, '$0']);
    });

    it('Will return null if the graph or cities are empty', () => {
        cities = [];
        expect(getEdge(graph, cities)).toBe(null);
    })
})