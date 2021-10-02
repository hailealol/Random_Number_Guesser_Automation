let guesses = [];
let guess;
let guessCounter = 0;
let random;
let displayGuess = document.getElementById("array");
let correct = document.getElementById("correct");
let counter = document.getElementById("counter");

// Resets game everytime button is pressed
function begin() {
    random = Math.floor(Math.random() * 100) + 1;
    guesses = [];
    guessCounter = 0;
    guesser();
}

function guesser() {
    guess = Math.floor(Math.random() * 100) + 1;

    // Checks to add guess into array or skip over it
    if (guesses.includes(guess)) {
        guesser();
    } else {
        guesses.push(guess);
    }
    // Checks if guess matches the generated number
    if (guess == random) {
        displayGuess.innerHTML = guesses.join(', ');
        correct.innerHTML = `Random number generated: ${random}`;
        counter.innerHTML = `The computer guessed ${guesses.length} time(s) to get the correct number.`;
    } else if (guess != random) {
        guesser();
    }
}