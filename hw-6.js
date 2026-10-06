// Задачи из Встроенные объекты

// 1 task 

const line = ('js');
let uppLine = line.toUpperCase();
// console.log(uppLine);

// 2 task 

function returnTheRequiredString(strings, prefix) {
  const normalizedPrefix = prefix.toLowerCase();
  return strings.filter((value) =>
    value.toLowerCase().startsWith(normalizedPrefix)
  );
}

// 3 task 

const originalNumber = 32.58884;
const roundedDown = Math.floor(originalNumber);
const roundedUp = Math.ceil(originalNumber);
const roundedToNearest = Math.round(originalNumber);

console.log('До меньшего целого:', roundedDown);
console.log('До большего целого:', roundedUp);
console.log('До ближайшего целого:', roundedToNearest);

// 4 task 

const originalArray = [52, 53, 49, 77, 21, 32];

const min = Math.min(...originalArray);

const max = Math.max(...originalArray);

console.log(min);
console.log(max);

// 5 task 

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(random(1, 10));

// 6 task 

const inNumberStr = prompt('Введите любое число');
const inNumber = Number(inNumberStr);

if (!Number.isFinite(inNumber) || inNumber <= 0) {
  console.log('Нужно было ввести целое число.');

} else {
  const generateArray = (limit, count) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const randomValue = Math.floor(Math.random() * limit) + 1;
      arr.push(randomValue);
    }
    return arr;
  };

  const count = Math.floor(inNumber / 2);
  const resultArray = generateArray(inNumber, count);

  console.log(resultArray);
}


// 7 task 

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// 8 task

const today = new Date();

// const todayDate = today.getDate();

// console.log(`Сегодня ${todayDate} число`);

console.log(today)


// 9 task 


let todaySec = today.getTime()

let days73 = 73 * 24 * 60 * 60 * 1000;

const futureDate = todaySec + days73;

const currentDate = new Date(futureDate);

console.log(currentDate);


// 10 task 

function formatDateTime(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new TypeError('Ожидается корректный объект Date.');
  }

  const day = date.getDate();
  const month = new Intl.DateTimeFormat('ru-RU', { month: 'long' }).format(date);
  const year = date.getFullYear();
  const weekday = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(date);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${weekday}. Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDateTime(new Date()));

