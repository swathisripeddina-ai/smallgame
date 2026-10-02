let ball = document.getElementById("ball");
let basket = document.getElementById("basket");
let scoreText = document.getElementById("score");

let score = 0;
let ballX = 200;
let ballY = 0;
let basketX = 200;

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowLeft") {
        basketX -= 20;
    }

    if (event.key === "ArrowRight") {
        basketX += 20;
    }

    if (basketX < 0) {
        basketX = 0;
    }

    if (basketX > 400) {
        basketX = 400;
    }

    basket.style.left = basketX + "px";
});

function gameLoop() {

    ballY += 5;

    ball.style.top = ballY + "px";
    ball.style.left = ballX + "px";

    // Check whether basket catches the ball
    if (
        ballY > 440 &&
        ballX > basketX - 30 &&
        ballX < basketX + 100
    ) {
        score++;
        scoreText.textContent = score;

        resetBall();
    }

    // Ball reaches bottom
    if (ballY > 500) {
        resetBall();
    }

    requestAnimationFrame(gameLoop);
}

function resetBall() {
    ballY = 0;
    ballX = Math.random() * 470;
}

function restartGame() {
    score = 0;
    scoreText.textContent = score;

    ballY = 0;
    ballX = 200;
}

gameLoop();