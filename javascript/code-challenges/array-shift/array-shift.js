'use strict';

function insertShiftArray(arr, input) {
    let ret = [];
    let count = 0;
    let midpoint = arr.length / 2;
    if(midpoint % 2 != 0) {
        midpoint += .5;
    }
    do {
        if(count < midpoint) {
            ret[count] = arr[count];
        } else if (count == midpoint) {
            ret[count] = input;
        } else {
            ret[count] = arr[count - 1]
        }
        count++;
    } while (count <= arr.length);
    return ret;
}

module.exports = {
    insertShiftArray: insertShiftArray
}

