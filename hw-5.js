// // quiz

// // const quiz = [
// //     {
// //         question: "Какой цвет небо?",
// //         options: ["1. Красный", "2. Синий", "3. Зеленый"],
// //         correctAnswer: 2 // номер правильного ответа
// //     },
// //     {
// //         question: "Сколько дней в неделе?",
// //         options: ["1. Шесть", "2. Семь", "3. Восемь"],
// //         correctAnswer: 2
// //     },
// //     {
// //         question: "Сколько у человека пальцев на одной руке?",
// //         options: ["1. Четыре", "2. Пять", "3. Шесть"],
// //         correctAnswer: 2
// //     }
// // ];

// // let right = 0;

// // const length = quiz.length

// // for (let i = 0; i < length; i += 1) {
// //     const q = quiz[i];
// //     const userInput = prompt(`${q.question}\n${q.options.join('\n')}`);
// //     const userAnswer = parseInt(userInput, 10);

// //     // if (userInput === null) {
// //     //     continue;
// //     // }



    
// //     if (userAnswer === q.correctAnswer) {
// //         right++;
// //     }    
// // }

// // alert(`Ваш результат: ${right} из ${quiz.length}`);

// // 1 task

// const masiv1 = [1, 5, 4, 10, 0, 3];

// // let find10 = masiv1.includes(10);

// // if (find10 == true) {
// //     console.log('Число 10 сдесь есть')
// // } else {
// //     console.log('Числа 10 здесь нет')
// // }

// for (let i = 0; i < masiv1.length; i++) {

//     // let find10 = masiv1.includes(10);

//     // if (find10 == true) {
//     //     continue
//     // } else {
//     //     break
//     // }

//   console.log(masiv1[i]);
//   if (masiv1[i] === 10) {
//     break;
//   }
// }

// // 2 task

// for (let i = 0; i < masiv1.length; i++) {
//   if (masiv1[i] === 4) {
//     console.log(i)}
// }

// // 3 task

// const masiv2 = [1, 3, 5, 10, 20];

// console.log(masiv2.join(' '))

// // 4 task

// const masiv3 = []

// for (let i = 0; i < 3; i++) {
//   const row = [];
//   for (let j = 0; j < 3; j++) {
//     row.push(1);
//   }
//   masiv3.push(row);
// }

// console.log(masiv3); 

// // 5 task

// const masiv4 = [1, 1, 1];

// masiv4.push(2, 2, 2);

// console.log(masiv4);

// // 6 task 

// const masiv5 = [9, 8, 7, 'a', 6, 5];

// masiv5.sort();
// const sortedNumbers = masiv5.filter((item) => item !== 'a');

// console.log(sortedNumbers);

// // 7 task 

// const masiv6 = [9, 8, 7, 6, 5];

// const userGuess = prompt('Введите любое число');

// const guess = masiv6.includes(Number(userGuess));

// // console.log(guess)

// if (guess == true) {
//     alert('Угадал')
// }
// else {
//     alert('Не угадал')
// }

// // 8 task 


// let row1 = ('abcdef');

// const row2 = row1.split('');

// const row3 = row2.reverse();

// const row4 = row3.join('');

// console.log(row4);

// // 9 task 

// const masiv7 = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// let masiv8 = [...masiv7[0], ...masiv7[1]];

// console.log(masiv8)

// // 10 task 

// const masiv9 = [1, 2, 3, 8, 9];

// for (let i = 0; i < masiv9.length - 1; i++) {
//     console.log(masiv9[i] + masiv9[i + 1]);
// }

// // 11 task 

// const masiv10 = masiv9.map(n => n * n);
// return(masiv10)
// // console.log(masiv10);

// 12 task

const masiv11 = ['слово', 'массив', 'map'];

function getStringLengths(masiv11) {
    return masiv11.map(item => item.length);
}

console.log(getStringLengths(masiv11));

// 13 task

const masiv12 = [2, -1, 0, -5, 7];

function getNegativeNumbers(numbers) {
    return numbers.filter(number => number < 0);
}

console.log(getNegativeNumbers(masiv12));


// 14 task 