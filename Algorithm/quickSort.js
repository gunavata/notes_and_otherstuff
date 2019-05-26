function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr.pop();
    const left = [];
    const right = [];
    arr.forEach(function(item) {
        if (item < pivot) {
            left.push(item);
        } else {
            right.push(item);
        }
    })
    return quickSort(left).concat(pivot).concat(quickSort(right));
}

console.log(quickSort([1,4,53,2,98,6,24,2,34]))