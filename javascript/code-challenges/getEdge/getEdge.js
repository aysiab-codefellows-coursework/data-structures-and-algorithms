'use strict';

function getEdge(graph, cities) {
    let trip = false;
    let cost = 0;
    if(!graph.size() || !cities.length) { return null };
    for(let i = 0; i < cities.length; i++ ) {
        for(let vertex of graph.list) {
            if(vertex.head.value == cities[i]) {
                let curr = vertex.head.next;
                while(curr) {
                    if(curr.value[cities[i+1]]) {
                        trip = true;
                        cost += curr.value[cities[i+1]];
                    } else if(curr.next == null && !true) {
                        return [false, '$0'];                       
                    }
                    curr = curr.next;
                }
            }
        }
    }
    return [trip, `$${cost}`];
}

module.exports = getEdge;