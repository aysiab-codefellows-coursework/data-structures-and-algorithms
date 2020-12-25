'use strict';


const Stack = require('../stacks-and-queues/stack')

function multiBracketValidation(string) {
    let stack = new Stack();
    for(let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if(char == '(' || char == '[' || char == '{') {
            stack.push(char);
        } else if(char == ')') {
            if(stack.top.value == '(') {
                stack.pop();
            } else {
                return false;
            }
        } else if(char == ']') {
            if(stack.top.value == '[') {
                stack.pop();
            } else {
                return false;
            }
        } else if(char == '}') {
            if(stack.top.value == '{') {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if(stack.top) {
        return false;
    }
    return true;
}

module.exports = multiBracketValidation;