function cube_checker(volume, side) {

    if (volume <= 0 || side <= 0) {
        return false;
    }

    return volume === Math.pow(side, 3);
}


console.log(cube_checker(8, 2));