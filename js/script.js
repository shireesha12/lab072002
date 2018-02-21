/*eslint-env browser*/

function displayTitle() {
    "use strict";
    window.alert("Welcome to the Guess the Number Game!");
}

function playGame() {
    "use strict";
    var number, count, guess;
    number = Math.floor(Math.random() * 10 + 1);
    window.alert("I\'m guseesing a number between 1 and 10");
    count = 1;
    while (true) {
        guess = Number(window.prompt("Enter your Guess:"));
        if (number < guess) {
            window.alert("Too high");
            count += 1;
        } else if (number > guess) {
             window.alert("Too low!");
            count += 1;
            
        }else if (number === guess) {
            window.alert("you guessed it in " + String(count) + " tires");
            return;
        }
    }
}

function main() {
    "use strict";
    displayTitle();
    var playAgain = "y";
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt("DO YOU WANT TO PLAY THE GAME AGAIN? (y/n)");
    }
    window.alert("THANKS FOR PLAYING THE GAME!");
}

main();