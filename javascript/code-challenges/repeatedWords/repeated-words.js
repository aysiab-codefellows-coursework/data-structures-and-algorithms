'use strict';
const HashTable = require('../hashTable/hashTable');


const repeatedWords = (str) => {
    let words = str.split(' ');
    let wordCount = new HashTable();
    for(var word of words) {
        word = word.toLowerCase();
        var regex = /[!".,]/g;
        word = word.replace(regex, '');
        console.log(word);
        if(wordCount.contains(word)) {
            return word;
        } else {
            wordCount.add(word, 1);
        }
    }
    return null;
}

module.exports = repeatedWords;