function uniqueInOrder(iterable){
    if (!iterable) return [];
    const uniqueList = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i - 1]) {
            uniqueList.push(iterable[i]);
        }
    }

    return uniqueList;
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));