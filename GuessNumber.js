// Угадай число

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNum = random(1, 100);
let guessed = false;

while (!guessed) {
    const input = prompt('Угадайте число от 1 до 100');
    if (input === null) continue;

    const userGuess = Number(input);
    if (!Number.isInteger(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Введите целое число от 1 до 100');
        continue;
    }

    if (userGuess === randomNum) {
        // alert('Угадали!');
        guessed = true;
        break
    } else if (userGuess < randomNum) {
        alert('Загаданное число больше');
    } else {
        alert('Загаданное число меньше');
    }
}

