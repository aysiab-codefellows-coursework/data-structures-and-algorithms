'use strict';

// Calling dequeue or peek on empty queue raises exception

const Queue = require('../queue');

describe('Queue', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    })

    it('Can successfully enqueue into a queue', () => {
        queue.enqueue('bojack');
        expect(queue.isEmpty()).toBeFalsy();
    })

    it('Can successfully enqueue multiple values into a queue',() => {
        queue.enqueue('bojack');
        queue.enqueue('todd');
        queue.enqueue('hollyhock');
        expect(queue.peek()).toBe('bojack');
    })

    it('Can successfully dequeue out of a queue and return the expected value', () => {
        queue.enqueue('bojack');
        queue.enqueue('todd');
        queue.enqueue('hollyhock');
        expect(queue.dequeue()).toBe('bojack');
        expect(queue.dequeue()).toBe('todd');
    })

    it('Can successfully peek into a queue and seek the expected value', () => {
        queue.enqueue('judah');
        queue.enqueue('mr. peautbutter');
        queue.enqueue('herb');
        expect(queue.peek()).toBe('judah');
    })

    it('Can successfully empty a queue after multiple dequeues', () => {
        queue.enqueue('judah');
        queue.enqueue('mr. peautbutter');
        queue.enqueue('herb');
        queue.dequeue();
        queue.dequeue();
        queue.dequeue();
        expect(queue.isEmpty()).toBeTruthy();
    })

    it('Can successfully instantiate an empty queue', () => {
        expect(queue.isEmpty()).toBeTruthy();
    })

    it('Will raise an exception when trying to dequeue from an empty queue', () => {
        expect(() => {
            queue.dequeue();
        }).toThrow();
    })

    it('Will raise an exception when trying to peek from an empty queue', () => {
        expect(() => {
            queue.peek();
        }).toThrow();
    })
})