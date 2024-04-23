const rockImage = document.getElementById("img_rock");
const paperImage = document.getElementById("img_paper");
const scissorsImage = document.getElementById("img_scissors");

const compThrow = document.getElementById("comp_button");

const result = document.getElementById("result");

let selected = "rock";

$(rockImage).on('click', function() {
    $(".images img").removeClass("selected");
    $(this).addClass("selected");
    selected = "rock";
});

$(paperImage).on('click', function() {
    $(".images img").removeClass("selected");
    $(this).addClass("selected");
    selected = "paper";
});

$(scissorsImage).on('click', function() {
    $(".images img").removeClass("selected");
    $(this).addClass("selected");
    selected = "scissors";
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}