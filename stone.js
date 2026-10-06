// Игра "Камень, ножницы, бумага"

const userAnsver = prompt('Напишите: камень, ножницы или бумага');

const answerOptions = ["камень", "ножницы", "бумага"];

const random = () => {
    return Math.floor(Math.random() * 3);
}

const randomOption = answerOptions[random()];

function checkGame(params) {

        if (randomOption.toLowerCase().includes(userAnsver.trim().toLowerCase())) {
            console.log(`Противник тоже загадал "${randomOption}", попробуйте еще раз`)
        }

        else if ((answerOptions.indexOf(userAnsver.trim().toLowerCase()) + 1) === (answerOptions.indexOf(randomOption)) || (answerOptions.indexOf(userAnsver.trim().toLowerCase()) - 2) === (answerOptions.indexOf(randomOption))) {
            console.log(`Противник загадал "${randomOption}", поэтому вы выиграли`)
        }

        else {
            console.log(`Противник загадал "${randomOption}", поэтому вы проиграли`)
        }
}





    if (userAnsver === null) {
        alert('Игра отменена')
    }

    else if (!answerOptions.includes(userAnsver.trim().toLowerCase())) {
        alert('Не точно введено слово') 
        }
    

    else {
        console.log('Ответ принят');

        checkGame()

    }


    
