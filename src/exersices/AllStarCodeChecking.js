function str_count(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}


console.log(str_count("Hello", 'o')); // returns 1
console.log(str_count("Hello", 'l')); // returns 2
console.log(str_count("", 'z'));