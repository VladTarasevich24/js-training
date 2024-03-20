function multiplyByFiveRaisedToDigits(number) {

    const absNumber = Math.abs(number);


    const numDigits = absNumber === 0 ? 1 : Math.floor(Math.log10(absNumber)) + 1;


    const result = number * Math.pow(5, numDigits);

    return result;
}

// Test cases
console.log(multiplyByFiveRaisedToDigits(3));
console.log(multiplyByFiveRaisedToDigits(10));
console.log(multiplyByFiveRaisedToDigits(200));
console.log(multiplyByFiveRaisedToDigits(0));
console.log(multiplyByFiveRaisedToDigits(-3));