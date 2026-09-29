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




function age() {
    let userAge = prompt('Сколько вам лет')
    if (isNaN(userAge) || userAge < 0) {
        console.log('Вы ввели неправильное значение')
    }
    else if (userAge >= 0 && age <= 12) {
        console.log('Привет, друг')
    }
    else {
        console.log('Добро пожаловать')
    }
}

age()

// 5 task

function Numbers(a, b) {
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    return 'Одно или оба значения не являются числом';
  }
  else {
    console.log('Задача выполнена.')
    return numA * numB;
  }
}

Numbers()


// 6 task 


function dataType() {
    let userText = prompt('Введите любое число');
    let userNumder = Number(userText);
    if (isNaN(userNumder)) {
        return('Переданный параметр не является числом')
    }
    else {
        let cubed = userNumder **3
        return(`${userNumder} в кубе равняется ${cubed}`)
    }
}
dataType()

// 7 task 

const circle1 = {
    radius: 10,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

const circle2 = {
    radius: 25,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;   
    }
}

// https://workai.su  👍 🔥 🚀