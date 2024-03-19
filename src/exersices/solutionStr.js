function solutionStr(str) {
    let arr = [];



    for (let i = 0; i <= str.length; i+=2) {
        let result = str.slice(i,i+2);
        if (result.length > 0) {
            if (result.length < 2) {
                result = `${result}_`;
            }
            arr.push(result);
        }

    }
    return arr;

}

console.log(solutionStr('abcdefg'));