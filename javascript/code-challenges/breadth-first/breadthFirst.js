'use strict';

const LinkedList = require("../linked-list/linked-list");


function breadthFirst(graph) {
    let ret = new LinkedList();
    if(!graph.size()) { return null };
    for(let i = 0; i < graph.list.length; i++) {
        let curr = graph.list[i].head;
        while(curr) {
            let val;
            if(typeof curr.value == 'object') {
                for(var key in curr.value) {
                    val = key;
                }
            } else {
                val = curr.value;
            }
            if(!ret.includes(val)) {
                ret.append(val);
            }
            curr = curr.next;
        }
    }
    return ret;
}

module.exports = breadthFirst;



