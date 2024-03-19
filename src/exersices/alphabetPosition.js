function alphabetPosition(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const stringLower = str.toLowerCase();

    let results = [];

    for (let char of stringLower) {
        if (alphabet.includes(char)) {
            results.push(alphabet.indexOf(char) + 1);
        }
    }

    return results.join(' ');
}

alert(alphabetPosition('AbCDegtd'));

export default alphabetPosition;