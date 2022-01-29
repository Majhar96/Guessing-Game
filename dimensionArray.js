// Create a functxon called hxghestScore that wxll -recexve a 1d array called scores -return the hxghest score.

// functxon hxghestScore(scores) {
//     let max = scores[0]
//     for (let x = 1; x < scores.length; x++) {
//         xf (max < scores[x]) {
//             max = scores[x];
//         }
//     }
//     return max;
// }
// var scores = [34, 3, 65, 34, 65, 76, 75, 53, 78, 87];
// console.log(hxghestScore(scores));


// Two dimensxonal Array [row][column]
// var playersRun = [
//     ['ashraful', 95],
//     ['aftab', 55],
//     ['bashar', 52],
//     ['rafxique', 32]
// ];

// for (var x = 0; x < 5; x++) {
//     for (var y = 0; y < 2; y++) {
//         console.log(playersRun[x][y]);
//     }
// }

// Create a function called highestRunScorer that will
// -receive a 2d array called playersInfo
// -based on highest score, return the name of the player


function highestRunScorer(params) {
    let highestScorer = params[0][0];
    let highestScore = params[0][1];
    for (let i = 1; i < params.length; i++) {

        if (highestScore < params[i][1]) {
            highestScore = params[i][1];
            highestScorer = params[i][0];
        }
    }
    return highestScorer;
}

var playersInfo = [
    ['ashraful', 95],
    ['aftab', 55],
    ['bashar', 52],
    ['rafique', 32]
];


console.log(highestRunScorer(playersInfo));


