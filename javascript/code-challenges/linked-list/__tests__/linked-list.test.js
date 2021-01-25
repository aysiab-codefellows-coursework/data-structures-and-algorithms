'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list');

describe('Linked List', () => {
  let ll;

  beforeEach(() => {
    ll = new LinkedList();
  })

  it('Can successfully instantiate an empty linked list', () => {
    expect(ll.toString()).toBe('NULL');
  });

  it('Can properly insert into the linked list', () => {
    ll.insert('cat');
    expect(ll.toString()).toBe('{ cat } -> NULL');
  })

  it('The head property will properly point to the first node in the linked list', () => {
    ll.insert('cat');
    ll.insert('dog');
    expect(ll.head.value).toBe('dog');
  })

  it('Can properly insert multiple nodes into the linked list', () => {
    ll.insert('cat');
    ll.insert('dog');
    ll.insert('mouse');
    expect(ll.toString()).toBe('{ mouse } -> { dog } -> { cat } -> NULL');
  })

  it('Will return true when finding a value within the linked list that exists', () => {
    ll.insert('cat');
    ll.insert('dog');
    ll.insert('mouse');
    expect(ll.includes('snake')).toBeFalsy();
  })

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    ll.insert('cat');
    ll.insert('dog');
    ll.insert('mouse');
    ll.insert('snake');
    expect(ll.toString()).toBe('{ snake } -> { mouse } -> { dog } -> { cat } -> NULL');
  })

  it('Can successfully add a node to the end of the linked list',()=> {
    ll.insert('cat');
    ll.insert('dog');
    ll.insert('mouse');
    ll.append('snake');
    expect(ll.toString()).toBe('{ mouse } -> { dog } -> { cat } -> { snake } -> NULL');
  })

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    ll.insert('cat');
    ll.append('dog');
    ll.append('mouse');
    ll.append('snake');
    expect(ll.toString()).toBe('{ cat } -> { dog } -> { mouse } -> { snake } -> NULL')
  })

  it('Can successfully insert a node before a node located in the middle of a linked list',() => {
    ll.insert('cat');
    ll.insert('dog');
    ll.insert('mouse');
    ll.insertBefore('dog','snake');
    expect(ll.toString()).toBe('{ mouse } -> { snake } -> { dog } -> { cat } -> NULL');
  })

  it('Can succesffuly insert a node before the first node of a linked list', () => {
    ll.insert('cat');
    ll.insertBefore('cat','mouse');
    expect(ll.toString()).toBe('{ mouse } -> { cat } -> NULL');
  })

  it('Can successfully insert after a node in the middle of a linked list', () => {
    ll.insert('cat');
    ll.insert('dog');
    ll.insert('mouse');
    ll.insert('snake');
    ll.insertAfter('mouse','parakeet');
    expect(ll.toString()).toBe('{ snake } -> { mouse } -> { parakeet } -> { dog } -> { cat } -> NULL')
  })

  it('Can successfully insert a node after the last node of a linked list', () => {
    ll.insert('cat');
    ll.insert('dog');
    ll.insert('mouse');
    ll.insertAfter('cat','parakeet');
    expect(ll.toString()).toBe('{ mouse } -> { dog } -> { cat } -> { parakeet } -> NULL')
  })

  it('Where k is greater than the length of the linked list', () => {
    ll.insert('cat');
    ll.insert('dog')
    ll.insert('mouse')
    expect(() => {
      ll.kthFromTheEnd(4)
    }).toThrow()
  })

  it('Where k and the length of the list are teh same', () => {
    ll.insert('cat')
    ll.insert('dog')
    ll.insert('mouse')
    expect(ll.kthFromTheEnd(3)).toBe(undefined)
  })

  it('Where k is not a positive integer', () => {
    ll.insert('cat');
    ll.insert('dog')
    ll.insert('mouse')
    expect(() => {
      ll.kthFromTheEnd(-1)
    }).toThrow()
  })
  
  it('Where the linked list is a size of 1', () => {
    ll.insert('cat')
    expect(() => {
      ll.kthFromTheEnd(2)
    }).toThrow()
  })

  it('Happy path: where the value of k is returned', () => {
    ll.insert('cat')
    ll.insert('dog')
    ll.insert('mouse')
    expect(ll.kthFromTheEnd(2)).toBe('mouse')
  })

  it('Testing includes', () => {
    ll.insert('cat')
    ll.insert('dog')
    ll.insert('mouse')
    expect(ll.includes('cat')).toBe(true);
  })


});




// Where the linked list is of a size 1
// “Happy Path” where k is not at the end, but somewhere in the middle of the linked list




    // given 
    // when
    // then



