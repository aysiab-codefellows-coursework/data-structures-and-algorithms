'use strict';

const insertionSort = require('../insertion-sort');


describe('insertionSort', () => {
    let nums;
    it('Can sort the blog post array ', () => {
        nums = [8,4,23,42,16,15];
        expect(insertionSort(nums)).toEqual([4,8,15,16,23,42]);
    })

    it('Can sort a reverse sorted array ', () => {
        nums = [20,18,12,8,5,-2];
        expect(insertionSort(nums)).toEqual([-2,5,8,12,18,20]);
    })

    it('Can sort an array with few unique integers', () => {
        nums = [5,12,7,5,7,5,5,10];
        expect(insertionSort(nums)).toEqual([5,5,5,5,7,7,10,12]);
    })

    it('Can sort a nearly sorted array ', () => {
        nums = [2,4,6,10,8,12];
        expect(insertionSort(nums)).toEqual([2,4,6,8,10,12]);
    })
})