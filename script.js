const rockImage = document.getElementById("img_rock");
const paperImage = document.getElementById("img_paper");
const scissorsImage = document.getElementById("img_scissors");

const throwHands = document.getElementById("hands");

const resultOutput = document.getElementById("result");

let userChoice = "rock";
let computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;

$(rockImage).on('click', function() {
    $(".images img").removeClass("selected");
    $(this).addClass("selected");
    userChoice = "rock";
});

$(paperImage).on('click', function() {
    $(".images img").removeClass("selected");
    $(this).addClass("selected");
    userChoice = "paper";
});

$(scissorsImage).on('click', function() {
    $(".images img").removeClass("selected");
    $(this).addClass("selected");
    userChoice = "scissors";
});

$(throwHands).on('click', function() {
    playRound(userChoice, computerChoice);
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

// 0 = Draw, -1 = Loss, 1 = Win
function compareResult(userChoice, computerChoice) {
    let result = null;
    if (userChoice == computerChoice) {
        result = 0;
    } else if (userChoice == "rock" && computerChoice == "paper") {
        result = -1;
    } else if (userChoice == "rock" && computerChoice == "scissors") {
        result = 1;
    } else if (userChoice == "paper" && computerChoice == "rock") {
        result = 1;
    } else if (userChoice == "paper" && computerChoice == "scissors") {
        result = -1;
    } else if (userChoice == "scissors" && computerChoice == "rock") {
        result = -1;
    } else if (userChoice == "scissors" && computerChoice == "paper") {
        result = 1;
    }
    return result;
}

function playRound(userChoice, computerChoice) {
    let result = null;
    resultOutput.innerHTML = "";
    computerChoice = getComputerChoice();
    result = `Computer threw <strong>${computerChoice}</strong>, you threw <strong>${userChoice}</strong>`;
    
    switch (compareResult(userChoice, computerChoice)) {
        case 0: 
            result += `, result is a draw!`;
            break;
        case -1: 
            result += `, computer wins!`;
            computerScore++;
            break;
        case 1: 
            result += `, you win!`;
            humanScore++;
            break;
    }
    
    let finalString = `Computer Score: ${computerScore}<br>
    Human Score: ${humanScore}<br>
    <br>
    ${result}`;
    
    resultOutput.innerHTML = finalString;
}