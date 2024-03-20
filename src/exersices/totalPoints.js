function points(games) {
    let totalPoints = 0;
    for (let i = 0; i < games.length; i++) {
        const [ourScore, opponentScore] = games[i].split(":").map(Number);
        if (ourScore > opponentScore) {
            totalPoints += 3;
        } else if (ourScore === opponentScore) {
            totalPoints += 1;
        }

    }
    return totalPoints;
}


const matches = ["3:1", "2:2", "0:1", "4:0", "1:0", "2:3", "1:1", "2:1", "0:4", "4:3"];
console.log(points(matches));

export default points;