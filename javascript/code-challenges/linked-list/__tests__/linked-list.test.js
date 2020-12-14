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
});




// Can successfully insert a node after the last node of the linked list




    // given 
    // when
    // then



