'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list');

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    let ll = new LinkedList();
    expect(ll.toString()).toBe('NULL');
  });

  it('Can properly insert into the linked list', () => {
    let ll = new LinkedList();
    ll.insert('cat');
    expect(ll.toString()).toBe('{ cat } -> NULL');
  })

  it('The head property will properly point to the first node in the linked list', () => {
    let ll = new LinkedList();
    ll.insert('cat');
    ll.insert('dog');
    expect(ll.head.value).toBe('dog');
  })

  it('Can properly insert multiple nodes into the linked list', () => {
    let ll = new LinkedList();
    ll.insert('cat');
    ll.insert('dog');
    ll.insert('mouse');
    expect(ll.toString()).toBe('{ mouse } -> { dog } -> { cat } -> NULL');
  })

  it('Will return true when finding a value within the linked list that exists', () => {
    let ll = new LinkedList();
    ll.insert('cat');
    ll.insert('dog');
    ll.insert('mouse');
    expect(ll.includes('snake')).toBeFalsy();
  })

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let ll = new LinkedList();
    ll.insert('cat');
    ll.insert('dog');
    ll.insert('mouse');
    ll.insert('snake');
    expect(ll.toString()).toBe('{ snake } -> { mouse } -> { dog } -> { cat } -> NULL');
  })

});








    // given 
    // when
    // then



