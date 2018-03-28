if (window.localStorage) {

  // получаем элементы формы
  var txtUsername = document.getElementById('username'),
    txtAnswer = document.getElementById('answer');

  // заполняем элементы данными из localstorage
  txtUsername.value = localStorage.getItem('username');
  txtAnswer.value = localStorage.getItem('answer');

  // сохраняем данные при нажатии клавиши
  txtUsername.addEventListener('input', function () {
    localStorage.setItem('username', txtUsername.value);
  }, false);

  // сохраняем данные при нажатии клавиши
  txtAnswer.addEventListener('input', function () {
    localStorage.setItem('answer', txtAnswer.value);
  }, false);

}