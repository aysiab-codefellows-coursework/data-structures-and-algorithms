# Insertion Sort


### Definition 
Simply put, Insertion Sort is a function that takes a single argument of an array of integers and returns an array sorted in ascending order.

### Pseudocode
Consider the following pseudocode:
```
InsertionSort(arr)
     for i = 1 where i <= arr.length
        let j = i - 1
        let temp = arr[i]

        while j >= 0 AND temp < arr[j]
           arr[j + 1] = arr[j]
           j = j - 1

        arr[j + 1] = temp
    
    return arr

```

### Algorithm Verification 

Let's say we call `InsertionSort([8,4,23,42,16,14])`

On the first pass through our for loop, we will have:
- `arr = [8,4,23,42,16,14]`
- `j = 0`
- `temp = 4`
- We will enter our while loop since `0 >= 0 AND 4 < 8` is true
    - `arr[1] = arr[0]` --> `arr[1] = 8`
    - `j = -1`
- `arr[-1 + 1] = temp` --> `arr[0] = 4`     

On our second pass through the for loop we will have:
- `arr = [4,8,23,42,16,14]`
- `j = 1`
- `temp = 23`
- We will not enter our while loop since `1 >= 0 AND 23 < 8` is false

On the thihrd pass through our for loop, we will have:
- `arr = [8,4,23,42,16,14]`
- `j = 2`
- `temp = 42`
- We will not enter our while loop since `0 >= 0 AND 42 < 23` is false


On the fourth pass through our for loop, we will have:
- `arr = [8,4,23,42,16,14]`
- `j = 3`
- `temp = 16`
- We will enter our while loop since `3 >= 0 AND 16 < 42` is true
    - `arr[4] = arr[3]` --> `arr[4] = 42`
    - `j = 2`
    - we will keep looping because `2 >= 0 AND 16 < 23`
    - `arr[3] = arr[2]` --> `arr[3] = 23`
    - `j = 1`
    - exit loop because `1 >= 0 AND 16 < 8` is false
- `arr[1 + 1] = temp` --> `arr[2] = 16`

On the fifth pass through our for loop, we will have:
- `arr = [8,4,16,23,42,14]`
- `j = 4`
- `temp = 14`
- We will enter our while loop since `3 >= 0 AND 14 < 42` is true
    - `arr[5] = arr[4]` --> `arr[5] = 42`
    - `j = 3`
    - we will keep looping because `3 >= 0 AND 14 < 23`
    - `arr[4] = arr[3]` --> `arr[4] = 23`
    - `j = 2`
     - we will keep looping because `2 >= 0 AND 14 < 16`
    - `arr[3] = arr[2]` --> `arr[4] = 16`
    - `j = 1`
    - exit loop because `1 >= 0 AND 14 < 8` is false
- `arr[1 + 1] = temp` --> `arr[2] = 14`

We exit our for loop:
- `return [4,8,14,16,23,42]`

### Efficiency
- Time: O(n^2)
    - There is potential to loop the entire length of the array backwards as well as forwards: n * n 
