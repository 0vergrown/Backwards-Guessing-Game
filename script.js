let lowerBound = 1;
let upperBound = 100;
let guess;
let attempts = 0;

document.getElementById('startGame').addEventListener('click', function() {
    this.style.display = 'none'; // Hides the start game button
    document.getElementById('game').style.display = 'block'; // Shows the game elements
    resetGame();
    makeGuess();
});

document.getElementById('restartGame').addEventListener('click', function() {
    document.getElementById('startGame').style.display = 'block'; // Shows the start game button again
    this.style.display = 'none'; // Hides the restart game button
    document.getElementById('message').textContent = 'Think of a number between 1 and 100...';
    resetGame();
});

function resetGame() {
    lowerBound = 1;
    upperBound = 100;
    attempts = 0;
    document.getElementById('game').style.display = 'none'; // Initially hide the game elements
}

function makeGuess() {
    guess = Math.floor((lowerBound + upperBound) / 2);
    document.getElementById('currentGuess').textContent = guess;
    attempts++;
    document.getElementById('game').style.display = 'block'; // Ensure the game elements are shown when making a guess
}

function userResponse(response) {
    if (attempts >= 5) {
        endGame('lose');
        return;
    }

    if (response === 'low') {
        lowerBound = guess + 1;
    } else if (response === 'high') {
        upperBound = guess - 1;
    } else {
        endGame('win');
        return;
    }
    
    makeGuess();
}

function endGame(result) {
    if (result === 'win') {
        document.getElementById('message').textContent = 'Yes! I won!';
    } else {
        document.getElementById('message').textContent = 'Game over! I ran out of guesses.';
    }
    document.getElementById('game').style.display = 'none'; // Hide the guessing buttons
    document.getElementById('restartGame').style.display = 'block'; // Show the restart game button
}
