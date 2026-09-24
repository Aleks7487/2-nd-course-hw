let password = 'пароль';
let passwordUs = prompt('Введите пароль');
if (password === passwordUs) {
    alert("Пароль введен верно");
}
else {
    alert("Пароль введён неправильно")
}

2 задание

let c = 0;

if ((c > 0) && (c < 10)) {
    alert("Верно")
}
else {
    alert("Не верно")
}

c = 10;

if ((c > 0)  && (c < 10)) {
    alert("Верно")
}
else {
    alert("Не верно")
}

c = -3;

if ((c > 0)  && (c < 10)) {
    alert("Верно")
}
else {
    alert("Не верно")
}

c = 2;

if ((c > 0)  && (c < 10)) {
    alert("Верно")
}
else {
    alert("Не верно")
}


3 задание

let d = 85;
let e = 65;

if ((d > 100) || (e > 100)) {
    alert("Верно")
}
else {
    alert("Не верно")
}


4 задание

let a = 2;
let b = 3;
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(a + b);

// 5 задание

let monthNumber = prompt("Введите номер месяца");

// if ((monthNumber > 0) && (monthNumber < 13)) {
//     alert("сйчас проверим что это")
// }
// else {
//     switch (monthNumber) {
//         case '1':
//             alert("Зима")
//             break;
    
//         default:
//             break;
//     }
//     alert("Введён не верный месяц")
// }

switch (monthNumber) {
    case '1':
        alert("Зима")
        break;
    case '2':
        alert("Зима")
        break;
    case '12':
        alert("Зима")
        break;
    case '3':
        alert("Весна")
        break;
    case '4':
        alert("Весна")
        break;
    case '5':
        alert("Весна")
        break;
    case '6':
        alert("Лето")
        break;
    case '7':
        alert("Лето")
        break;
    case '8':
        alert("Лето")
        break;
    case '9':
        alert("Осень")
        break;
    case '10':
        alert("Осень")
        break;
    case '11':
        alert("Осень")
        break;

    default:
        alert("Вы ввели не верный месяц")
        break;
}