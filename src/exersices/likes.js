function likes(names){
    if(names.length === 0){
        return "no one likes this"
    } else if(names.length === 1){
        const input = names[0] + ' likes this';
        return input;
    } else if(names.length === 2){
        const input = names[0] + " and " + names[1] + " like this";
        return input;
    }else if(names.length === 3){
        const input = names[0] + ', ' + names[1] + " and " + names[2] + ' like this';
        return input;
    }else {
        const input = names[0] + ", " + names[1] + " and " + (names.length - 2).toString() + " other like this";
        return input;
    }

}

console.log(likes([]));
console.log(likes(["Alex"]));
console.log(likes(["Alex", "Jacob"]));
console.log(likes(["Alex", "Jacob", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Bhvbgb"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Bhvbgb", "Bhvbgb"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Bhvbgb", "Bhvbgb", "Bhvbgb"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Bhvbgb", "Bhvbgb", "Bhvbgb", "Bhvbgb"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Bhvbgb", "Bhvbgb", "Bhvbgb", "Bhvbgb", "Bhvbgb"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Bhvbgb", "Bhvbgb", "Bhvbgb", "Bhvbgb", "Bhvbgb", "Bhvbgb"]));