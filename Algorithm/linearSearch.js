function linearSearch(arr, value) {
    for (i = 0; i < arr.length; i++)
        if(arr[i] === value) {
            return "The item " + arr[i] + " is located at index " + i;
        }
}

console.log(linearSearch([1,4,7,2,8,3], 2))