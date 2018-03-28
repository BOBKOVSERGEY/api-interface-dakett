if (window.sessionStorage) {
// получаем элементы формы
  var txtUsername = document.getElementById('username'),
    txtAnswer = document.getElementById('answer');

  // заполняем элементы данными из sessionStorage
  txtUsername.value = sessionStorage.getItem('username');
  txtAnswer.value = sessionStorage.getItem('answer');

  // сохраняем данные при нажатии клавиши
  txtUsername.addEventListener('input', function () {
    sessionStorage.setItem('username', txtUsername.value);
  }, false);

  // сохраняем данные при нажатии клавиши
  txtAnswer.addEventListener('input', function () {
    sessionStorage.setItem('answer', txtAnswer.value);
  }, false);

}