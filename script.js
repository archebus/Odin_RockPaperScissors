const rockImage = document.getElementById("img_rock");
const paperImage = document.getElementById("img_paper");
const scissorsImage = document.getElementById("img_scissors");

const compThrow = document.getElementById("comp_button");

const result = document.getElementById("result");

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

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

// 0 = Draw, -1 = Loss, 1 = Win
function compareResult(humanChoice, computerChoice) {
    let result = 0;
    if (humanChoice === computerChoice) {
        result = 0;
    } else if (humanChoice === "rock" && computer === "paper") {
        result = 1;
    } else if (humanChoice === "rock" && computer === "scissors") {
        result = -1;
    } else if (humanChoice === "paper" && computer === "rock") {
        result = 1;
    } else if (humanChoice === "paper" && computer === "scissors") {
        result = -1;
    } else if (humanChoice === "scissors" && computer === "rock") {
        result = -1;
    } else if (humanChoice === "scissors" && computer === "paper") {
        result = 1;
    }
}