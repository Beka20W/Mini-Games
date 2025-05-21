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
