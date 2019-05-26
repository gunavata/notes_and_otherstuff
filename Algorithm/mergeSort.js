function mergeSort(arr) {                       // create function mergeSort that accepts an array argument
    if (arr.length < 2) return arr;             // if the array's length is less than 2, return it and end
    var middle = Math.floor(arr.length /2);     // set middle as array's length divided by 2 (rounded down)
    var left = arr.slice (0 , middle);          // set left as between index 0 and middle
    var right = arr.slice (middle, arr.length); // set right as between index middle and arr's length
    return merge(mergeSort(left), mergeSort(right));    // return a merge on mergeSort left and mergeSort right (entering recursive function)
}

function merge(left, right) {
    var result = [];                            // Initialize result with an empty array
    while (left.length && right.length) {       // check if there is anything in left AND right array
        if (left[0] <= right[0]) {              // if left array value is less than or equal to right array value
            result.push(left.shift());          // push the left array's first item into result array
        } else {                                // otherwise
            result.push(right.shift());         // push the right array's first item into result array
        }                                       // keep looping until either left or right array is empty
    }
    while (left.length) result.push(left.shift());      // if there is anything in left array, just keep pushing left array items into result
    while (right.length) result.push(right.shift());    // if there is anything in right array, just keep pushing right array items into result
    return result;                                      // return the result
}

console.log(mergeSort([1,4,7,2]))

// call 1
merge([1,4], [7,2])

//call 2
merge([1], [4])
// because merge is only 1, return same value

//call 3
result = [1, 4]

//call 4
merge([7], [2])

//call 5
result = [2, 7]

//call 6
merge([1, 4], [2, 7])

//call 7 while loop 1
result = [1]

//call 8 while loop 2
result = [1, 2]

//call 9 while loop 3
result = [1, 2, 4]

//call 10 while right.length
result = [1, 2, 4, 7]