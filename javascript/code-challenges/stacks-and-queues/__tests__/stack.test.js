'use strict';

const Stack = require('../stack');

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    })

    it('Can successfully push onto a stack', () => {
        stack.push('cat')
        expect(stack.isEmpty()).toBeFalsy();
    })

    it('Can successfully pus multiple values onto a stack', () => {
        stack.push('cat');
        stack.push('dog');
        stack.push('mouse');
        expect(stack.peek()).toBe('mouse');
    })

    it('Can successfully pop off the stack',() => {
        stack.push('cat');
        stack.push('dog');
        stack.push('mouse');
        stack.pop();
        expect(stack.peek()).toBe('dog');
    })

    it('Can successfully empty a stack after multiple pops',() => {
        stack.push('cat');
        stack.push('dog');
        stack.push('mouse');
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.isEmpty()).toBeTruthy();
    })

    it('Can successfuly peek the next item in the stack', () => {
        stack.push('mouse');
        stack.push('cat');
        stack.push('dog');
        expect(stack.peek()).toBe('dog');
    })

    it('Can successfully instantiate an empty stack', () => {
        expect(stack.isEmpty()).toBeTruthy();
    })

    it('Will raise exceptions when calling pop on an empty stack', () => {
        expect(() =>  {
            stack.pop();
        }).toThrow();
    })

    it('Will raise exceptions when calling peek on an empty stack', () => {
        expect(() =>  {
            stack.peek();
        }).toThrow();
    })

})