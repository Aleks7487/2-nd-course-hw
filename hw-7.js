// 1 task

const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);

// 2 task 

function isPositive(number) {
   return number > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(array, ruleFunction) {
  const filteredArray = [];

  for (const element of array) {
    if (ruleFunction(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));

// 3 task 

const date = new Date();

const showDate = setInterval(() => {
  console.log(date);
}, 3000);

setTimeout(() => {
  clearInterval(showDate);
  console.log('Интервал остановлен');
}, 30000);

// 4 task 

function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
})

// 5 task 

// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'));