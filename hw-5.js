// 1 task

// const quiz = [
//     {
//         question: "Какой цвет небо?",
//         options: ["1. Красный", "2. Синий", "3. Зеленый"],
//         correctAnswer: 2 // номер правильного ответа
//     },
//     {
//         question: "Сколько дней в неделе?",
//         options: ["1. Шесть", "2. Семь", "3. Восемь"],
//         correctAnswer: 2
//     },
//     {
//         question: "Сколько у человека пальцев на одной руке?",
//         options: ["1. Четыре", "2. Пять", "3. Шесть"],
//         correctAnswer: 2
//     }
// ];

// let right = 0;

// const length = quiz.length

// for (let i = 0; i < length; i += 1) {
//     const q = quiz[i];
//     const userInput = prompt(`${q.question}\n${q.options.join('\n')}`);
//     const userAnswer = parseInt(userInput, 10);

//     // if (userInput === null) {
//     //     continue;
//     // }



    
//     if (userAnswer === q.correctAnswer) {
//         right++;
//     }    
// }

// alert(`Ваш результат: ${right} из ${quiz.length}`);

// 2 task

const masiv1 = [1, 5, 4, 10, 0, 3];

// let find10 = masiv1.includes(10);

// if (find10 == true) {
//     console.log('Число 10 сдесь есть')
// } else {
//     console.log('Числа 10 здесь нет')
// }

for (let i = 0; i < masiv1.length; i++) {

    // let find10 = masiv1.includes(10);

    // if (find10 == true) {
    //     continue
    // } else {
    //     break
    // }

  console.log(masiv1[i]);
  if (masiv1[i] === 10) {
    break;
  }
}

// 3 task


