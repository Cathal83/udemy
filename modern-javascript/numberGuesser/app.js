/**
 * Game Function:
 * - PLayer must guess a number between min and max
 * - Player gets a certain amount of guesses
 * - Notify player of guesses remaining
 * - Notify the player of the arrect answer if loose
 * - Let player choose to play again
 */

// Game Values
let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener("mousedown", e => {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);

  //Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  // Check if won
  if (guess === winningNum) {
    // Game Over - WON
    // // Disable input
    // guessInput.disabled = true;
    // // Change border color
    // guessInput.style.borderColor = "green";
    // // Set message
    // setMessage(`${winningNum} is correct, YOU WIN!`, "green");
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    // Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game Over - Lost
      gameOver(
        false,
        `Game over, you lost. The correct answer was ${winningNum}`
      );
    } else {
      // Game continues - answer wrong

      // Change border color
      guessInput.style.borderColor = "red";
      // Clear input
      guessInput.value = "";
      // Tell user it is the wrong number
      setMessage(
        `${guess} is not correct, ${guessesLeft} guesses left.`,
        "red"
      );
    }
  }
});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);

  // Play Again?
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

// Get winning number
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
