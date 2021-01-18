'use strict';

const HashTable = require('../hashTable');

describe('HashTable', () => {
    let hashTable;

    beforeEach(() => {
        hashTable = new HashTable;
    })

    it('Can instantiate a new hash table', () => {
        expect(hashTable.buckets[0]).toBe(undefined);
    });

    it('Can add a new key/value pair', () => {
        hashTable.add('midna','the twilight princess');
        expect(hashTable.contains('midna')).toBeTruthy();
    })

    it('Can return a value to a specified key', () => {
        hashTable.add('midna','the twilight princess');
        expect(hashTable.get('midna')).toBe('the twilight princess');
    })

    it('Will return null for a key that does not exist in the hashtable', () => {
        hashTable.add('midna', 'the twilight princess');
        expect(hashTable.get('simba')).toBe(null);
    })

    it('Can handle a collision within the HashTable', () => {
        hashTable.add(25, 'foo');
        hashTable.add(52, 'bar');
        expect(hashTable.contains(25)).toBeTruthy();
        expect(hashTable.contains(52)).toBeTruthy();
    })

    it('Can successfully retrieve a value from a bucket within a hashtable that has a collision',() => {
        hashTable.add(25, 'foo');
        hashTable.add(52, 'bar');
        expect(hashTable.get(52)).toBe('bar');
    })
    
});