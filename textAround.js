const userInput = prompt('Введите любой текст');

if (userInput === null || userInput.trim() === '') {
  alert('Ну хоть что-нибудь надо было написать напишите!)');
} else {
  const massivInput = userInput.split('');
  const reverseInput = massivInput.reverse();
  alert(reverseInput.join(''));
}