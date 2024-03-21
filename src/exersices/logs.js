function sumOfLogarithms(base, A, B) {

    const result = Math.log(A * B) / Math.log(base);

    return result;
}

// Test cases
console.log(sumOfLogarithms(10, 100, 1000));
console.log(sumOfLogarithms(2, 8, 16));
console.log(sumOfLogarithms(3, 9, 81));