function playGuessGame() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guess;

    while (true) {
        guess = prompt("Введите число от 1 до 100:");
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

function playStoryGenerator() {
    let heroes = ["смелый рыцарь", "хитрый вор", "волшебник", "отважный пират", "дерзкий исследователь"];
    let places = ["в далёком королевстве", "на заброшенной фабрике", "в густом лесу", "на просторах космоса", "у подножия гор"];
    let actions = ["победил дракона", "обнаружил сокровища", "выиграл битву", "устроил бал", "раскрыл древнюю тайну"];
    let details = ["с волшебным мечом", "на летающем ковре", "под звуки волшебной музыки", "с удивительной силой", "в сопровождении магического существа"];

    let story = `${heroes[Math.floor(Math.random() * heroes.length)]} ${places[Math.floor(Math.random() * places.length)]}, ${actions[Math.floor(Math.random() * actions.length)]} ${details[Math.floor(Math.random() * details.length)]}.`;

    alert(story);
}
