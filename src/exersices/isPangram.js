function isPangram(str){
    let alpabet = 'abcdefghijklmnopqrstuvwxyz';
    let strLower = str.toLowerCase();

    for(let char of alpabet){
        if(strLower.indexOf(char) === -1){
            return false;
        }
    }
    return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Blablabla'));
