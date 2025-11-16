const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const resultText = document.getElementById("result-text");
const compMoveText = document.getElementById("comp-move");

let userScore = 0;
let compScore = 0;

const choices = ["rock", "paper", "scissors"];

// Random AI move
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Gameplay function
function playRound(userChoice) {
    const compChoice = getComputerChoice();

    compMoveText.textContent = `🤖 Computer chose: ${compChoice}`;

    if (userChoice === compChoice) {
        resultText.textContent = "😐 It's a Draw!";
        resultText.style.color = "#ffeaa7";
        return;
    }

    const win =
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper");

    if (win) {
        userScore++;
        userScoreEl.textContent = userScore;
        resultText.textContent = "🔥 You Win!";
        resultText.style.color = "#55efc4";
    } else {
        compScore++;
        compScoreEl.textContent = compScore;
        resultText.textContent = "💀 You Lose!";
        resultText.style.color = "#ff7675";
    }
}

// Button Click Handling + animation
document.querySelectorAll(".choice").forEach(btn => {
    btn.addEventListener("click", () => {
        const choice = btn.getAttribute("data-choice");

        // Press animation
        btn.classList.add("active");
        setTimeout(() => btn.classList.remove("active"), 150);

        playRound(choice);
    });
});
