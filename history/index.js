$(function () {
  function loadContent(url) {
    $('#content').load(url + '#container').hide().fadeIn('slow');
  }

  $('nav a').on('click', function (e) {
    e.preventDefault();

    // получаем атрибут href ссылки
    var href = this.href;
    $('a').removeClass('current');
    $(this).addClass('current');

    loadContent(href);

    history.pushState('',$(this).text(), href);
  })

  // обрабатываем кнопки вперед назад
  window.onpopstate = function() {              // Обрабатываем кнопки вперед/назад
    var path = location.pathname;               // Получаем путь
    loadContent(path);                          // Вызываем функцию для загрузки страницы
    var page = path.substring(location.pathname.lastIndexOf('/')+1);
    $('a').removeClass('current');              // Удаляем из ссылок класс current
    $('[href="' + page + '"]').addClass('current'); // Обновляем текущую ссылку
  };
})