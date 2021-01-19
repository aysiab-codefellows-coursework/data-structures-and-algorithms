'use strict';
const repeatedWords = require('../repeated-words');

describe('Repeated words function', () => {
    let sentence;
    let paragraph;
    let blurb;
    
    beforeAll(() => {
       sentence = "Once upon a time, there was a brave princess who...";
       paragraph = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
       blurb = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
    })

    it('Can find the first repeated word of a sentence', () => {
        expect(repeatedWords(sentence)).toBe('a');
    })

    it('Can find the first repeated word of a paragraph', () =>{
        expect(repeatedWords(paragraph)).toBe('it');
    })
    
    it('Can find the first repeated word of a blurb', () => {
        expect(repeatedWords(blurb)).toBe('summer');
    })

    it('Will return null if the entire string is unique', () => {
        expect(repeatedWords('My cat is named Midna.')).toBe(null);
    })
})