function printerError(str){
    const trueStr = 'abcdefghijklm';
    let result = '';
    let numerator = 0;
    let denominator = str.length;

    for( let char of str){
        if(trueStr.indexOf(char) === -1){
            numerator +=1;
        }

    }
    result = `${numerator}/${denominator}`;
    return result;

}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'))