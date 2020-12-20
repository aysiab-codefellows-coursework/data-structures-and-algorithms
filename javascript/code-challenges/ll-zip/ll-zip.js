'use strict';

function llzip(first, second) {
    let curr1 = first.head;
    let curr2 = second.head;
    if(curr1 == null) {
        return curr2;
    } else if(curr2 == null) {
        return curr1;
    } else {
        while(curr1.next == null && curr2 != null) {
            let temp = curr1.next;
            curr1.next = curr2;
            curr2 = temp;
            curr1 = curr1.next;
        }
        if(curr1.next == null) {
            curr1.next = curr2; 
        }
    }
    return first.head;
}

module.exports = llzip;