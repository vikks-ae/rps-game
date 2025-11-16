const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const resultText = document.getElementById("result-text");
const compMoveText = document.getElementById("comp-move");

let userScore = 0;
let compScore = 0;

const choices = ["rock", "paper", "scissors"];

// Computer random move (AI)
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Game logic
function playRound(userChoice) {
    const compChoice = getComputerChoice();

    compMoveText.textContent = `Computer chose: ${compChoice} 🤖`;

    if (userChoice === compChoice) {
        resultText.textContent = "It's a Draw!";
        resultText.style.color = "yellow";
        return;
    }

    // Win conditions
    if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        userScore++;
        userScoreEl.textContent = userScore;
        resultText.textContent = "You Win! 🎉";
        resultText.style.color = "lightgreen";
    } else {
        compScore++;
        compScoreEl.textContent = compScore;
        resultText.textContent = "You Lose! 💀";
        resultText.style.color = "red";
    }
}

// Handle button clicks
document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        const choice = button.getAttribute("data-choice");

        // Add click animation
        button.style.transform = "scale(1.2)";
        setTimeout(() => (button.style.transform = "scale(1)"), 150);

        playRound(choice);
    });
});
