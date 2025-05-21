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
    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";

    function checkWin(player) {
        let winCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],  // строки
            [0, 3, 6], [1, 4, 7], [2, 5, 8],  // столбцы
            [0, 4, 8], [2, 4, 6]              // диагонали
        ];

        return winCombinations.some(comb => 
            board[comb[0]] === player && board[comb[1]] === player && board[comb[2]] === player
        );
    }

    while (true) {
        let move = prompt(`Игрок ${currentPlayer}, выберите ячейку (1-9):`);
        let index = parseInt(move) - 1;

        if (isNaN(index) || index < 0 || index >= 9 || board[index] !== "") {
            alert("Некорректный ход, попробуйте снова.");
            continue;
        }

        board[index] = currentPlayer;
        
        if (checkWin(currentPlayer)) {
            alert(`Игрок ${currentPlayer} победил!`);
            break;
        }

        if (!board.includes("")) {
            alert("Ничья!");
            break;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

// ==== Игра "Битва с монстром" ====
function startMonsterBattle() {
    let hero = { name: "Герой", health: 100, attack: 20 };
    let monster = { name: "Монстр", health: 80, attack: 15 };

    while (hero.health > 0 && monster.health > 0) {
        let choice = prompt("Выберите действие:\n1 - Атаковать\n2 - Пропустить ход");

        if (choice === "1") {
            monster.health -= hero.attack;
            alert(`Вы атаковали монстра! У него осталось ${monster.health} HP.`);
        }

        if (monster.health > 0) {
            hero.health -= monster.attack;
            alert(`Монстр атаковал вас! У вас осталось ${hero.health} HP.`);
        }
    }

    alert(hero.health > 0 ? "Вы победили монстра!" : "Монстр вас одолел...");
}

// ==== Игра "Генератор историй" ====
function startStoryGenerator() {
    let heroes = ["смелый рыцарь", "хитрый вор", "волшебник", "отважный пират"];
    let places = ["в далёком королевстве", "на заброшенной фабрике", "в густом лесу"];
    let actions = ["победил дракона", "обнаружил сокровища", "выиграл битву"];
    let details = ["с волшебным мечом", "на летающем ковре", "под звуки магической музыки"];

    let story = `${heroes[Math.floor(Math.random() * heroes.length)]} ${places[Math.floor(Math.random() * places.length)]}, ${actions[Math.floor(Math.random() * actions.length)]} ${details[Math.floor(Math.random() * details.length)]}.`;

    alert("Вот ваша история:\n" + story);
}
