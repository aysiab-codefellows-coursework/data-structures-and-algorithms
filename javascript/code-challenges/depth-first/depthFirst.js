'use strict';
const LinkedList = require('../linked-list/linked-list');

    // where Seattle is the highest and Olympia is the deepest
    // graph.list[0] Head: Seattle --> Bellevue --> Renton
    // graph.list[1] Head: Bellevue --> Seattle --> Renton --> Tacoma
    // graph.list[2] Head: Olympia --> Tacoma 
    // graph.list[3] Head: Renton --> Seattle --> Bellevue --> Tukwila 
    // graph.list[4] Head: Tukwila --> Renton --> Tacoma 
    // graph.list[5] Head: Tacoma --> Bellevue --> Tukwila --> Olympia 


const depthFirst = (graph) => {
    let visited = new LinkedList();

    if(!graph.size()) { return null };

    // check every index of the adjacency list 
    for(let i = 0; i < graph.list.length; i++) {
        // if visited does not include the vertext value
        if(!visited.includes(graph.list[i].head.value)) {
            // call traversal of the Linked List of edges 
            visited = traversal(graph.list, graph.list[i].head, visited);
        }
    }
    return visited;
}

const traversal = (list, curr, visited) => {
    // append the vertex value to visited 
    visited.append(curr.value);
    // check the edges LinkedList until the current value is not included 
    while(curr && visited.includes(curr.value)) {
        curr = curr.next;
    }
    // if all edges have been added already
    if(!curr) {
        return visited;
    }
    // find the index of the current edge in the adjacency list 
    let index = findHead(list, curr.value);
    // recursively call traversal
    return traversal(list, list[index].head, visited);
}


const findHead = (list, value) => {
    // find the index which the value lives 
    for(let i = 0; i < list.length; i++) {
        if(list[i].head.value == value) {
            return i;
        }
    }
    // if does not exist 
    return -1;
}


module.exports = depthFirst;