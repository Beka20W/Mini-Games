// ==== Игра "Угадай число" ====
function startGuessGame() {
    let secretNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;
    let guess;

    while (true) {
        guess = prompt("Введите число от 1 до 10:");

        if (!guess || isNaN(guess)) {
            alert("Введите корректное число!");
            continue;
        }

        attempts++;

        if (guess < secretNumber) {
            alert("Загаданное число больше!");
        } else if (guess > secretNumber) {
            alert("Загаданное число меньше!");
        } else {
            alert(`Поздравляем! Вы угадали число за ${attempts} попыток!`);
            break;
        }
    }
}

// ==== Игра "Крестики-нолики" ====
function startTicTacToe() {
    alert("Крестики-нолики пока в разработке!");
}

// ==== Игра "Битва с монстром" ====
function startMonsterBattle() {
    alert("Битва с монстром пока в разработке!");
}

// ==== Игра Arkanoid (Canvas) ====
function startArkanoid() {
    let canvas = document.getElementById("gameCanvas");
    canvas.width = 800;
    canvas.height = 450;
    canvas.style.display = "block";
    let ctx = canvas.getContext("2d");

    let ball = { x: 400, y: 225, dx: 4, dy: 3, radius: 10 };
    let paddle = { x: 50, y: 200, width: 15, height: 100 };

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    }

    function update() {
        ball.x += ball.dx;
        ball.y += ball.dy;
        paddle.y = event.clientY - paddle.height / 2;

        if (ball.y <= ball.radius || ball.y >= canvas.height - ball.radius) {
            ball.dy *= -1;
        }
        if (ball.x >= canvas.width - ball.radius || ball.x <= ball.radius) {
            ball.dx *= -1;
        }
        draw();
    }

    setInterval(update, 16);
}
