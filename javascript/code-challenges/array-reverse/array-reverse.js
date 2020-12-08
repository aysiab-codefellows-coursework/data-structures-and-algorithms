// create a method that accepts an array as a parameter 
function reverseArray(input) {

    // initialize new array to be returned
    let ret = [];

    // max index number the input array has 
    let max_index = input.length - 1;

    // iterates through the length of input array
    for(let i = 0; i < input.length; i++) {
        // set current index of new array ret to the index of
        // input max array index minus current index
        ret[i] = input[max_index-i];
    }
    // return new array
    return ret;
}

