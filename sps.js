let playerScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice'); // we can also use 'img' to select all images
let reset = document.querySelector('#reset'); // select the reset button
let msg = document.querySelector('#msg'); // select and update the message element in the HTML
let pScore = document.querySelector('#player-score'); // update the player score in the HTML
let cScore = document.querySelector('#comp-score'); // update the comp score in the HTML

const computerScore = () => {
    // This function can be used to update the computer's score
    // For example, we can increment compScore when the computer wins a round
    console.log("Computer score updated");

    const sps = ["stone", "paper", "scissors"]; // acts as index for random()
    const randomIndex = Math.floor(Math.random() * sps.length); // generates a random index between 0 and 2
    return sps[randomIndex]; // returns a random choice from the sps array
}

const drawGame = () => {
    // This function can be used to reset the game
    console.log("It's a tie!");
    msg.innerText = "It's a tie!";
    msg.style.backgroundColor = "#081b31"; // change the color of the message to yellow
}

const showWinner = (playerwin, playerChoice, compChoice) => {
    // This function can be used to display the winner of the game
    if (playerwin) {
        console.log("Player wins the game!");
        playerScore++; // increment the player score by 1
        pScore.textContent = playerScore; // update the player score in the HTML
        msg.innerText = `You Win! ${playerChoice} beats ${compChoice}`; // update the message
        msg.style.backgroundColor = "green"; // green for player win
    } else {
        compScore++; // increment computer score
        cScore.textContent = compScore; // update the computer score
        msg.innerText = `You Lose! ${compChoice} beats your ${playerChoice}`; // update the message
        msg.style.backgroundColor = "red"; // red for computer win
    }
}

const resetGame = () => {
    // This function can be used to reset the game
    console.log("Game reset");
    playerScore = 0; // reset player score
    compScore = 0; // reset computer score
    pScore.textContent = playerScore; // update player score in the HTML
    cScore.textContent = compScore; // update computer score in the HTML
    msg.innerText = "Play Your Move"; // reset message
    msg.style.backgroundColor = "#0081b3"; // reset message background color
}

const playGame = (playerChoice) => {
    // Determine winner based on playerChoice
    console.log("Player choice:", playerChoice);

    const compChoice = computerScore(); // get computer's choice
    console.log("Computer choice:", compChoice);

    if (playerChoice === compChoice) {
        drawGame(); // call draw if both choices are same
    } else {
        let playerwin = true;

        if (
            (playerChoice === 'stone' && compChoice === 'scissors') ||
            (playerChoice === 'paper' && compChoice === 'stone') ||
            (playerChoice === 'scissors' && compChoice === 'paper')
        ) {
            playerwin = true;
            console.log("Player wins the game! Player score:", playerScore);
        } else {
            playerwin = false;
            console.log("Computer wins the game! Computer score:", compScore);
        }

        showWinner(playerwin, playerChoice, compChoice); // show winner
    }
}

// Event listener for reset button
reset.addEventListener('click', resetGame);

// Event listeners for each choice
choices.forEach((choice) => {
    choice.addEventListener('click', (event) => {
        let clickedChoice = event.target.id; // get id of clicked image
        const playerChoice = choice.getAttribute('id'); // get id of clicked div
        playGame(playerChoice);
    });
});
