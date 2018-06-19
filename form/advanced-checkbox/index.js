(function() {
  var form, options, other, otherText, hide;           // Объявляем переменные
  form      = document.getElementById('how-heard');    // Получаем форму
  options   = form.elements.heard;                     // Получаем переключатели
  other     = document.getElementById('other');        // Переключатель "Другое"
  otherText = document.getElementById('other-text');   // Поле ввода "Другое"
  otherText.className = 'hide';                        // Скрываем поле ввода

  for (var i = [0]; i < options.length; i++) {         // Перебираем переключатели
    addEvent(options[i], 'click', radioChanged);       // Добавляем обработчик событий
  }

  function radioChanged() {
    hide = other.checked ? '' : 'hide';                // Выбран ли вариант "Другое"?
    otherText.className = hide;                        // Отображаем/скрываем поле ввода
    if (hide) {                                        // Если поле ввода скрыто
      otherText.value = '';                            // Сбрасываем его содержимое
    }
  }
}());
// Вспомогательная функция для добавления обработчика событий
function addEvent (el, event, callback) {
  if ('addEventListener' in el) {                  // Если addEventListener работает
    el.addEventListener(event, callback, false);   // Используем его
  } else {                                         // В противном случае
    el['e' + event + callback] = callback;         // Создаем специальный код для IE
    el[event + callback] = function () {
      el['e' + event + callback](window.event);
    };
    el.attachEvent('on' + event, el[event + callback]); // Используем attachEvent()
  }  // для вызова второй функции, которая потом вызывает первую
}