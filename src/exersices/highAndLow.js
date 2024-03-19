function highAndLow(numbers) {
    const numsArray = numbers.split(' ').map(parseFloat);
    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < numsArray.length; i++) {
        const num = numsArray[i];

        if (!isNaN(num)) {
            if (num > max) {
                max = num;
            }

            if (num < min) {
                min = num;
            }
        }
    }

    return `${max} ${min}`;
}

console.log(highAndLow('1 2 3 -4 5'));