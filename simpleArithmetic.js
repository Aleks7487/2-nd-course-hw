function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const operators = ['+', '-', '*', '/'];

for (let questionNumber = 0; questionNumber < 4; questionNumber++) {
    const operator = operators[random(0, operators.length - 1)];
    let firstNumber = random(1, 10);
    const secondNumber = random(1, 10);

    if (operator === '/') {
        firstNumber *= secondNumber;
    }

    const correctAnswer = {
        '+': firstNumber + secondNumber,
        '-': firstNumber - secondNumber,
        '*': firstNumber * secondNumber,
        '/': firstNumber / secondNumber,
    }[operator];
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    const input = prompt(`Cколько будет ${question}?`);

    if (input === null) continue;

    const userGuess = Number(input);
    if (input.trim() === '' || !Number.isFinite(userGuess)) {
        alert('Введите число');
    } else if (userGuess === correctAnswer) {
        alert('Молодец, это правильный ответ');
    } else {
        alert(`Неправильно. Правильный ответ: ${correctAnswer}`);
    }
}