'use strict';

const HashTable = require('../../hashTable/hashTable');
const leftJoin = require('../left-join');

describe('leftJoin', () =>{
    let synonyms;
    let antonyms;

    beforeEach(() => {
        synonyms =  new HashTable();
        antonyms = new HashTable();
    })

    it('Can left join a single same key' ,() => {
        synonyms.add('cat','feline');
        synonyms.add('happy','content');
        antonyms.add('dog','cat');
        antonyms.add('happy', 'gloomy');
        let same = leftJoin(synonyms, antonyms);
        expect(same.get('happy')).toEqual(['content', 'gloomy']);
    });

    it('Can left join two seperate hash tables' ,() => {
        synonyms.add('cat','feline');
        synonyms.add('happy','content');
        synonyms.add('angry','wrathful');
        synonyms.add('sad','melancholy');
        antonyms.add('dog','cat');
        antonyms.add('happy', 'gloomy');
        antonyms.add('cat', 'mouse');
        antonyms.add('angry', 'cheerful');
        let same = leftJoin(synonyms, antonyms);
        expect(same.get('happy')).toEqual(['content', 'gloomy']);
        expect(same.get('cat')).toEqual(['feline', 'mouse']);
        expect(same.get('angry')).toEqual(['wrathful', 'cheerful']);
        
    });

    it('Will return null if one or both hash tables do not exist' ,() => {
        synonyms.add('cat','feline');
        synonyms.add('happy','content');
        let same = leftJoin(synonyms, antonyms);
        expect(same).toEqual(null);
    });
})