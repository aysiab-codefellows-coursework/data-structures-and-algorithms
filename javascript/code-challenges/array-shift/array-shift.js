'use strict';

// declare function insertArrayShift
function insertShiftArray(arr, input) {

    // declare empty array to be returned
    let ret = [];
    // declare index count & set to zero 
    let count = 0;
    // declare midpoint and set to arr.length / 2 
    let midpoint = arr.length / 2;

    // checks if midpoint is whole even number
    if(midpoint % 2 != 0) {
        // if not add 0.5 to account for rounding halves up
        midpoint += .5;
    }
    
    // regardless of conditonal loop, begin once 
    do {
        // conditionals for checking where index count and midpoint are
        if(count < midpoint) {
            // copies values prior to midnight
            ret[count] = arr[count];
        } else if (count == midpoint) {
            // inserts new value at midpoint 
            ret[count] = input;
        } else {
            // continues copying values past midpoint
            ret[count] = arr[count - 1]
        }
        // update index count 
        count++;
    } while (count <= arr.length);
    // return array 
    return ret;
}

module.exports = {
    insertShiftArray: insertShiftArray
}

