function sumExcludingMinMax(arr) {
    if (!arr || !Array.isArray(arr) || arr.length <= 1) {
        return 0;
    }

    const sortedArr = arr.slice().sort((a, b) => a - b);
    const sum = sortedArr.slice(1, -1).reduce((acc, num) => acc + num, 0);
    return sum;
}

// Test cases
console.log(sumExcludingMinMax([6, 2, 1, 8, 10]));
console.log(sumExcludingMinMax([1, 1, 11, 2, 3]));