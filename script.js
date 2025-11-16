/* Animated gradient background */
body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    color: white;
    text-align: center;
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    background-size: 300% 300%;
    animation: bgMove 12s ease infinite;
}

@keyframes bgMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.title {
    margin-top: 40px;
    font-size: 45px;
    font-weight: 700;
    text-shadow: 0 0 20px #6a5acd;
}

/* Center Box */
.container {
    margin-top: 40px;
}

/* Glassmorphism card */
.glass {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    padding: 20px;
    width: 280px;
    margin: 20px auto;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
}

/* Scoreboard text */
.scoreboard p {
    font-size: 22px;
    margin: 8px 0;
}

/* Choices */
.choices {
    display: flex;
    justify-content: center;
    gap: 25px;
    margin-top: 30px;
}

/* Stylish emoji buttons */
.choice {
    font-size: 60px;
    padding: 20px;
    width: 100px;
    height: 100px;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(6px);
    transition: 0.2s ease;
    box-shadow: 0 0 15px rgba(255,255,255,0.2);
}

/* Neon glow + animation */
.choice:hover {
    transform: scale(1.15);
    box-shadow: 0 0 25px #a29bfe, 0 0 45px #6c5ce7;
}

/* Result Text */
.result {
    font-size: 26px;
    margin-top: 30px;
    min-height: 80px;
}

/* Smooth transitions */
#result-text {
    transition: 0.4s ease;
}
