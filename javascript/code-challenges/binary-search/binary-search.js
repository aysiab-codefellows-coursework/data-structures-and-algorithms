// initializing function 
const binarySearch = (arr, input) => {
    // mid to store midpoint index
    let mid = roundUp(arr.length / 2)
    // start to store starting index
    let start = 0;
    // end to store ending index 
    let end = arr.length - 1;

    // while arr at mid index is not equal to input value 
    // and start index is less than end index
    while(arr[mid] != input && start < end) {
        // if arr at mid index is less than input
         if(arr[mid] < input) {
            // update start value
            start = mid + 1;
        // if arr at mid index is greater than input
        } else if(arr[mid] > input) {
            // update end value
            end = mid - 1;
        }
        // update mid val between updated start/end values
        mid = roundUp((start + end) / 2);
    }

    // quick syntax for checking conditional, return -1 otherwise return mid
    return (arr[mid] != input) ? -1 : mid; 
}

// helper function to account for rounding values up
const roundUp = (num) => {
    if (num % 2 != 0) {
        num += 0.5
    }
}