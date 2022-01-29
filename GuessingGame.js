// Guessing game
// guess a number between 1-10
// random a random number between 1-10
// Show the message (if match will show win or lose)
// Run the game for 5 times
// Show the number of won and lost


let numOfWon = 0;
let numOfLost = 0;

for (let i = 0; i < 10; i++) {
    let guessNumber = prompt('Guess a number between 1-10');
    let randomNumber = Math.floor(Math.random() * 10 + 1);

    if (guessNumber == randomNumber) {
        console.log('Congrats! your guessing is super');
        numOfWon++;
    }
    else {
        console.log('Sorry Wrong thought !! The random number is = ' + randomNumber);
        numOfLost++;
    }
}

document.write('Total perfect guessing out of 10 you got = ' + numOfWon + "</br>");
document.write('Your wrong guess number out of 10 = ' + numOfLost);