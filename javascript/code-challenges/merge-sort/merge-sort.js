'use strict';

function mergeSort(arr) {
    let n = arr.length;
    if(n > 1) {
        let mid = math.ceil(n/2);
        let left = arr.slice(0,mid);
        let right = arr.slice(mid, arr.length);
        left = mergeSort(left);
        right = mergeSort(right);
        arr = merge(left, right, arr);
    }
    return arr;
}

function merge(left, right, arr) {
    let i = 0;
    let j = 0;
    let k = 0;
    while(i < left.length && j < right.length) {
        if(left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }
    if(i = left.length) {
        for(let j = j; j < right.length; j++) {
            arr[k] = right[j];
            k++;
        }
    } else {
        for(let i = i; i < right.length; i++) {
            arr[k] = left[i];
            k++;
        }
    }
}