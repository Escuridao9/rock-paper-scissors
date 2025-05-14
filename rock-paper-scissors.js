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

const rockbutton = document.createElement("button");
rockbutton.textContent = "Rock";
document.body.appendChild(rockbutton);
rockbutton.addEventListener('click', function (e) { 
    playRound("rock",getComputerChoice())});

const paperbutton = document.createElement("button");
paperbutton.textContent = "Paper";
document.body.appendChild(paperbutton);
paperbutton.addEventListener('click', function (e) { 
    playRound("paper",getComputerChoice())});

const scissorsbutton = document.createElement("button");
scissorsbutton.textContent = "Scissors";
document.body.appendChild(scissorsbutton);
scissorsbutton.addEventListener('click', function (e) { 
    playRound("scissors",getComputerChoice())});

// logic to get the human and computer scores

let humanScore = 0
let computerScore = 0

const scores = document.createElement("div");
scores.innerHTML = 'Scoreboard';
document.body.appendChild(scores);

const dispHumanScore = document.createElement("div");
dispHumanScore.innerHTML = 'Human:' + ' ' + humanScore;
scores.appendChild(dispHumanScore);

const dispComputerScore = document.createElement("div");
dispComputerScore.innerHTML = 'Computer:' + ' ' + computerScore;
scores.appendChild(dispComputerScore);

const announcer = document.createElement("div");
announcer.id = "#announcer"
announcer.innerHTML = "Hello World!";
announcer.style.marginLeft = "530px";
announcer.style.marginTop = "100px";
announcer.style.fontSize = "40px";
document.body.appendChild(announcer);

// logic to play a round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        announcer.innerHTML = "It's a tie!" + "<br>" + "Both chose rock!" + "<br>" + " " + "<br>" + "Your score:" + " " + humanScore + "<br>" + "Computer score:" + " " + computerScore;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        announcer.innerHTML = "You lose!" + "<br>" + "Paper beats rock!" + "<br>" + " " + "<br>" + "Your score:" + " " + humanScore + "<br>" + "Computer score:" + " " + computerScore;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        announcer.innerHTML = "You win!" + "<br>" + "Rock beats scissors!" + "<br>" + " " + "<br>" + "Your score:" + " " + humanScore + "<br>" + "Computer score:" + " " + computerScore;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        announcer.innerHTML = "You win!" + "<br>" + "Paper beats rock!" + "<br>" + " " + "<br>" + "Your score:" + " " + humanScore + "<br>" + "Computer score:" + " " + computerScore;
    }
    else if (humanChoice === "paper" && computerChoice === "paper") {
        announcer.innerHTML = "It's a tie!" + "<br>" + "Both chose paper!" + "<br>" + " " + "<br>" + "Your score:" + " " + humanScore + "<br>" + "Computer score:" + " " + computerScore;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        announcer.innerHTML = "You lose!" + "<br>" + "Scissors beats paper!" + "<br>" + " " + "<br>" + "Your score:" + " " + humanScore + "<br>" + "Computer score:" + " " + computerScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        announcer.innerHTML = "You lose!" + "<br>" + "Rock beats scissors!" + "<br>" + " " + "<br>" + "Your score:" + " " + humanScore + "<br>" + "Computer score:" + " " + computerScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        announcer.innerHTML = "You win!" + "<br>" + "Scissors beats paper!" + "<br>" + " " + "<br>" + "Your score:" + " " + humanScore + "<br>" + "Computer score:" + " " + computerScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        announcer.innerHTML = "It's a tie!" + "<br>" + "Both chose scissors!" + "<br>" + " " + "<br>" + "Your score:" + " " + humanScore + "<br>" + "Computer score:" + " " + computerScore;
    }
    else announcer.innerHTML = "You did something wrong!";

    dispHumanScore.innerHTML = 'Human:' + ' ' + humanScore;
    dispComputerScore.innerHTML = 'Computer:' + ' ' + computerScore;

    if (humanScore === 5) alert("Human wins!");
    if (computerScore === 5) alert("Computer wins!");
}