const Graph = require('../../graph/graph');
const LinkedList = require('../../linked-list/linked-list');
const depthFirst = require('../depthFirst')

describe('Graph Depth First Search', () => {
    let graph;
    let expected;

    beforeEach(() => {
        graph = new Graph();
        graph.addNode('Seattle');
        graph.addNode('Bellevue');
        graph.addNode('Renton');
        graph.addNode('Tacoma');
        graph.addNode('Portland');
        graph.addEdge('Seattle','Bellevue');
        graph.addEdge('Seattle','Renton');
        graph.addEdge('Bellevue', 'Renton');
        graph.addEdge('Renton', 'Tacoma');
        expected = new LinkedList();
        expected.append('Seattle');
        expected.append('Bellevue');
        expected.append('Renton');
        expected.append('Tacoma');
        expected.append('Portland');
    })

    it('Can successfully depth first traverse a grpah', () => {
        expect(depthFirst(graph)).toEqual(expected);
    })

    it('Will return null to an empty graph', () => {
        expect(depthFirst(new Graph())).toEqual(null)
    })
})
