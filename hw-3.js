// 1 task

let i = 1

while (i < 3) {
    console.log("Привет")
    i++
}

// 2 task

i = 1

while (i < 6) {
    console.log(i)
    i++
}

// 3 task

i = 7

while (i < 23) {
    console.log(i)
    i++
}

// 4 task

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
}

// 5 task 

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2,
    num++   
}

console.log('Итоговое число:', n);
console.log('Количество итераций:', num);

// решил попробовать проверить))

// n = 31.25
// num = 0

// while (n < 1000) {
//     n *= 2,
//     num++
// }

// console.log('Итоговое число:', n);
// console.log('Количество итераций:', num);