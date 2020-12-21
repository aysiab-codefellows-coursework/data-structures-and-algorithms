'use strict';

const PseudoQueue = require('../queue-with-stacks');

describe('A PseudoQueue uses stacks to act as a queue', () => {
    let pq;

    beforeEach(() => {
        pq = new PseudoQueue();
    })

    it('Can successfully enqueue an item into the PseuduQueue', () => {
        pq.enqueue(1)
        expect(pq.stack.top.value).toBe(1);
    })

    it('Can successfully enqueue multpile items into the PseudoQueue', () => {
        pq.enqueue(1)
        pq.enqueue(2)
        pq.enqueue(3)
        expect(pq.stack.top.value).toBe(1);
    })

    it('Can successfully dequeue items from the PseudoQueue', () =>{
        pq.enqueue(1)
        pq.enqueue(2)
        pq.enqueue(3)
        pq.dequeue();
        expect(pq.stack.top.value).toBe(2);
    })

    it('Can successfully dequeue everything from the PseudoQueue', () => {
        pq.enqueue(1)
        pq.enqueue(2)
        pq.enqueue(3)
        pq.dequeue();
        pq.dequeue();
        pq.dequeue();
        expect(pq.stack.isEmpty()).toBeTruthy();
    })
})

