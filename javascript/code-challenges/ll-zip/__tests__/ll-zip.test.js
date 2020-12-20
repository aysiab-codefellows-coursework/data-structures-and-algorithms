'use strict';

const LinkedList = require('../../linked-list/linked-list');
const llzip = require('../ll-zip')

describe('Linked List Zip', () => {
    let ll1;
    let ll2;

    beforeEach(() => {
        ll1 = new LinkedList();
        ll2 = new LinkedList();
        ll1.insert('cat')
        ll1.insert('dog')
        ll1.insert('mouse')
        ll2.insert(1)
        ll2.insert(2)
        ll2.insert(3)
    })

    it('Can zip two linked lists together of the same length', () => {
        expect(llzip(ll1, ll2)).toBe(ll1.head);
    })

    it('Can zip two linked lists together of the different lengths', () => {
        ll1.insert('snake')
        expect(llzip(ll1, ll2)).toBe(ll1.head);
        
    })

    it('Can return a linked list if one is empty', () => {
        let ll = new LinkedList();
        expect(llzip(ll,ll2)).toBe(ll2.head);
    })


})