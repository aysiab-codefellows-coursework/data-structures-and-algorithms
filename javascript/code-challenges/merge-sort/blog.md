# Merge Sort 

### Definition
In order to perform a MergeSort, the array is split into two roughly equal halves. Each subarray keeps being split into smaller and smaller arrays in half until the algorithm is left with nothing but a single element array. With those single element arrays, begin merging the subarrays until each merge is sorted. This final step is recursive until there is a single sorted array. 

### Pseudocode
Consider the following pseudocode:

```
ALGORITHM MergeSort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      left = Mergesort(left)
      // sort the right side
      right = Mergesort(right)
      // merge the sorted left and right sides together
      arr = Merge(left, right, arr)

      return arr

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
    
    return arr
```

### Algorithm Verification
We will step through the algorithm similarily to a mathematical equation. If we call `MergeSort([8,4,23,42,16,15])` our algorithm will run accordingly:

1. A) `let n = arr.length` --> `n = 6`
- `if n > 1` --> `6 > 1` is true so we will enter the conditional 
    - `let mid = n / 2` --> `mid = 6 / 2` --> `mid = 3`
    - `let left = arr[0...mid]` --> `left = [8,4,23]`
    - `let right = arr[mid...n]` --> `right = [42,16,15]`
    - `MergeSort(left)` --> `MergeSort([8,4,23])`
    - `MergeSort(right)` --> `MergeSort([42,16,15])`
    - `Merge(left, right, arr)` --> `Merge([4,8,23],[15,16,42],[8,4,23,42,16,15])`
    1. B)  Starting with the recurisve call of `MergeSort(left)` --> `MergeSort([8,4,23])`:
        - `let n = arr.length` --> `n = 3`
        - `if n > 1` --> `3 > 1` is true so we will enter the conditional 
            - `let mid = n / 2` --> `mid = 3 / 2` --> `mid = 1`
            - `let left = arr[0...mid]` --> `left = [8]`
            - `let right = arr[mid...n]` --> `right = [4, 23]`
            - `MergeSort(left)` --> `MergeSort([8])`
            - `MergeSort(right)` --> `MergeSort([4,23])`
            - `Merge(left, right, arr)` --> `Merge([8],[4,23],[8,4,23])`
            1. C) With the second recursive call of `MergeSort(left)` --> `MergeSort([8])`
                - `let n = arr.length` --> `n = 1`
                - `if n > 1` --> `1 > 1` is false so we will exit this recursive call returning `[8]`
            2. C) With the second recursive call of `MergeSort(right)` --> `MergeSort([4,23])`
                - `let n = arr.length` --> `n = 2`
                - `if n > 1` --> `2 > 1` is true so we will enter the conditional 
                    - `let mid = n / 2` --> `mid = 2 / 2` --> `mid = 1`
                    - `let left = arr[0...mid]` --> `left = [4]`
                    - `let right = arr[mid...n]` --> `right = [23]`
                    - `MergeSort(left)` --> `MergeSort([4])`
                    - `MergeSort(right)` --> `MergeSort([23])`
                    - `Merge(left, right, arr)` --> `Merge([4],[23],[4,23])`
                    1. & 2D) As noted in 1C, `MergeSort(left)` and `MergeSort(right)` will exit these recursive calls because they are single element arrays
                    3. D) We will start with this level call of `Merge([4],[23],[4,23])`
                        - `let i = 0`
                        - `let j = 0`
                        - `let k = 0`
                        - `while i < left.length && j < right.length` --> `while 0 < 1 && 0 < 1` is true so we enter the loop
                            - `if left[i] <= right[j]` --> `if 4 < 23` is true so we enter the conditional 
                                - `arr[k] = left[i]` --> `arr[0] = left[0] = 4`
                                - `i++` --> `i = 1`
                            - we will skip over the else statement
                            - `k++` --> `k = 1`
                            - since `i < 0` is now `1 < 0` and is false, we will exit the while loop 
                        - `if i = left.length` --> `1 = 1` is true so we will enter the conditional 
                            - set remaining elements in the array to the right of right --> `[4, 23]`
                        - we will skip over the else statement 
                        - return the merged array `[4,23]`
                3. C)  We will start with this level call of `Merge([8],[4, 23],[8,4,23])`
                    - `let i = 0`
                    - `let j = 0`
                    - `let k = 0`
                    - `while i < left.length && j < right.length` --> `while 0 < 1 && 0 < 2` is true so we enter the loop
                        - `if left[i] <= right[j]` --> `if 8 < 4` is false so we do not enter the conditional 
                        - we will enter the else statement
                            - `arr[k] = right[j]` --> `arr[0] = right[0] = 4`
                            - `j++` --> `j=1`
                        - `k++` --> `k = 1`
                        - since `i < left.length` --> `0 < 1` && `j < right.length` --> `1 < 2` is true we will run through the loop logic again 
                        - `if left[i] <= right[j]` --> `if 8 < 23` is true so we will enter the conidtional 
                            - `arr[k] = left[i]` --> `arr[1] = left[0] = 8`
                            - `i++` --> `i = 1`
                        - we will skip over the else statement
                        - `k++` --> `k = 2`
                        - since `i < left.length` --> `1 < 1` && `j < right.length` --> `1 < 2` is now false, we will exit the loop
                    - `if i = left.length` --> `1 = 1` is true so we will enter the conditional 
                        - set remaining elements in the array to the right of right --> `[4, 8, 23]`
                    - we will skip over the else statement 
                    - return the merged array of `[4,8,23]` as the new `left`
    2. B) Will process the right side similarily, until it returns a sorted half of `[15,16,42]` as the new `right` 
2. A) We will finally process `Merge([4,8,23],[15,16,42],[8,4,23,42,16,15])` reiterating through the while loop before returning `[4,8,15,16,23,42]` and setting it to `arr`
3. A) We will return the final sorted array of `[4,8,15,16,23,42]` from `MergeSort([8,4,23,42,16,15])`

### BigO Complexity
- O(nlogn) time complexity due to the nature of halving the array. 
- This has a higher space complexity than some of the other sorts since we are utilizing helper arrays. 
     
