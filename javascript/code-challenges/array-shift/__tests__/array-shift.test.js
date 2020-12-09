'use strict';

const { insertShiftArray } = require('../array-shift');

jest.spyOn(global.console, 'log');

describe('insertShiftArray()',() => {

    // happy path
    test('It can add a value to the middle index of the array, & shift the rest of the array', () => {
        console.log(insertShiftArray);
        let arr = [1,2,4,5];
        let val = 3;
        expect(insertShiftArray(arr, val)).toStrictEqual([1,2,3,4,5]);
    })

    // edge case
    test('It handles empty arrays by inserting the value anyways', () => {
        let arr = [];
        let val = true;
        expect(insertShiftArray(arr,val)).toStrictEqual([true]);
    })

    // expected failure
    test('Expected failure by passing NULL value for the array parameter', () => {
        let arr = null;
        let val = "cat";
        expect(() => {
            insertShiftArray(arr, val)
        }).toThrowError();
    })
})
