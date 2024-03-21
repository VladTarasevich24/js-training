function distanceBetweenPillars(numPillars, distance, width) {

    const totalDistance = (numPillars - 1) * distance * 100;


    const distanceWithoutWidth = totalDistance - (width * 2);

    return distanceWithoutWidth;
}

// Test cases
console.log(distanceBetweenPillars(5, 20, 30));
console.log(distanceBetweenPillars(10, 15, 40));