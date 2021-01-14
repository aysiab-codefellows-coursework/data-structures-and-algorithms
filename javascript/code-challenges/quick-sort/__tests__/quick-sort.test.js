'use strict';

const QuickSort = require('../quick-sort');

describe('QuickSort behavior', () => {
    it('Can sort an array of numbers', () => {
        expect(QuickSort([8,4,23,42,16,15],1, 5)).toEqual([4,8,15,16,23,42]);
    })

    it('Can sort an reversed sorted array of numbers', () => {
        expect(QuickSort([20,18,12,8,5,-2],1,5)).toEqual([-2,5,8,12,18,20]);
    })

    it('Can sort an array of numbers with few uniques', () => {
        expect(QuickSort([5,12,7,5,5,7],1,5)).toEqual([5,5,5,7,7,12]);
    })

    it('Can sort a nearly sorted array of numbers', () => {
        expect(QuickSort([2,3,5,7,13,11],1,5)).toEqual([2,3,5,7,11,13]);
    })  
})