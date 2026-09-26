// 1 task

function less(a , b) {
    if (a >= b) {
        console.log(b)
    } else {
        console.log(a)
    }
}

less(4 , 6)
less(7 , 7)

// 2 task


function evenNumber(n) {
    if (n % 2 == 0) {
        console.log('Число четное')
    } else {
        console.log('Число нечетное')
    }
}

evenNumber(5)
evenNumber(4)

// 3 task

// Напишите функцию, которая принимает параметром число и выводит в консоль квадрат этого числа.
// Напишите функцию, которая принимает параметром число и возвращает квадрат этого числа значением — так, чтобы потом это значение можно было использовать.

function square(e) {
    console.log(e ** 2)
}

function square2(e) {
    return(e ** 2)
}

square(4);
square2(5)

// // 4 task

let userAge = prompt('Сколько вам лет')



function age(fage) {
    if (fage > 12) {
        console.log('Добро пожаловать')
    }
    if (fage >= 0 && age <= 12) {
        console.log('Привет, друг')
    }
    if (fage < 0) {
        console.log('Вы ввели неправильное значение')
    }
    // else {
    //     console.log('Вы ввели неправильное значение')
    // }
}

age(userAge)