function binarySearch(arr, value) {
    var sorted = arr.sort(function(a,b) {return a-b});
    console.log(sorted);
    var high = sorted.length - 1;
    var low = 0;
    var mid = 0;

    while(low <= high) {
        mid = Math.floor((high + low) / 2);
        if (value === sorted[mid]) {
            return sorted[mid];
        } else if (value > sorted[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1,4,7,2,8,3], 2))