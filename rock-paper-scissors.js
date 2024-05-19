console.log("Hello World");

// logic to get the random choice from the computer
function getComputerChoice() {
    number = Math.random();
    if (number <= 0.33) {
        return "rock";
    }
    else if (0.34 <= number && number <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// logic to get the choice from the human
function getHumanChoice() {
    choice = prompt('Please choose between "rock", "paper" or "scissors"!')
    humanChoice = choice.toLowerCase();
    if (humanChoice === "rock") {
        return "rock";
    }
    else if (humanChoice === "paper") {
        return "paper";
    }
    else if (humanChoice === "scissors") {
        return "scissors";
    }
    else {
        console.log ("Not a valid choice!")
    }
}

// logic to get the human and computer scores
let humanScore = 0
let computerScore = 0

// logic to play a round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log ("It's a tie! Both chose rock!")
        console.log ("Your score:" + humanScore);
        console.log ("Computer score:" + computerScore);
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log ("You lose! Paper beats rock!");
        console.log ("Your score:" + humanScore);
        console.log ("Computer score:" + computerScore);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        console.log ("You win! Rock beats scissors!")
        console.log ("Your score:" + humanScore);
        console.log ("Computer score:" + computerScore);
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        console.log ("You win! Paper beats rock!")
        console.log ("Your score:" + humanScore);
        console.log ("Computer score:" + computerScore);
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log ("It's a tie! Both chose paper!")
        console.log ("Your score:" + humanScore);
        console.log ("Computer score:" + computerScore);
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        console.log ("You lose! Scissors beats paper!")
        console.log ("Your score:" + humanScore);
        console.log ("Computer score:" + computerScore);
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        console.log ("You lose! Rock beats scissors!")
        console.log ("Your score:" + humanScore);
        console.log ("Computer score:" + computerScore);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        console.log ("You win! Scissors beats paper!")
        console.log ("Your score:" + humanScore);
        console.log ("Computer score:" + computerScore);
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log ("It's a tie! Both chose scissors!")
        console.log ("Your score:" + humanScore);
        console.log ("Computer score:" + computerScore);
    }
    else console.error("Unexpected outcome!" + humanChoice + "and" + computerChoice);
}

// logic to play a game to five rounds
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

playGame();