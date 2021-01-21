'use strict';
const HashTable = require('../hashTable/hashTable');


function leftJoin(synonyms, antonyms) {
    let s_exists = false;
    let a_exists = false;
    for(var index of synonyms.buckets) {
        if(index) {
            s_exists = true;
            let curr = index.head;
            let key;
            while(curr) {
                for(var keys in curr.value) {
                    key = keys;
                } 
                if(antonyms.contains(key)) {
                    a_exists = true;
                    synonyms.update(key, [synonyms.get(key),antonyms.get(key)])
                } else {
                    synonyms.update(key, [synonyms.get(key), 'NULL']);
                }
                curr = curr.next;
            }
        }
    }
    if(s_exists && a_exists) {return synonyms;}
    return null;
}


module.exports = leftJoin;