(function(){
    var $content = $('#share-options').detach();   // Убираем модальное окно со страницы
  
    $('#share').on('click', function() {           // Обработчик щелчка для модального окна
      modal.open({content: $content, width:340, height:300});
    });
  }());

var modal = (function() {                         // Объявляем объект modal

    var $window = $(window);                        // Сохраняем окно
    var $modal = $('<div class="modal"/>');         // Создаем разметку модального окна
    var $content = $('<div class="modal-content"/>');
    var $close = $('<button role="button" class="modal-close">закрыть</button>');
  
    $modal.append($content, $close);                // Добавляем кнопку закрытия
  
    $close.on('click', function(e){                 // При щелчке по кнопке закрытия
      e.preventDefault();                           // Отменяем стандартное поведение ссылки
      modal.close();                                // Закрываем модальное окно
    });
  
    return {                                        // Добавляем код в модальное окно
      center: function() {                          // Объявляем метод center()
        // Вычисляем расстояние от верхней и левой границ страницы до модального окна
        var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
        var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;
        $modal.css({                                // Назначаем CSS модальному окну
          top:top + $window.scrollTop(),            // Центрируем вертикально
          left:left + $window.scrollLeft()          // Центрируем горизонтально
        });
      },
      open: function(settings) {                     // Объявляем метод open()
        $content.empty().append(settings.content);   // Назначаем модальному окну новое содержимое
  
        $modal.css({                                 // Устанавливаем размеры модального окна
          width: settings.width || 'auto',           // Устанавливаем ширину
          height: settings.height || 'auto'          // Устанавливаем высоту
        }).appendTo('body');                         // Добавляем его на страницу
  
        modal.center();                              // Вызываем метод center()
        $(window).on('resize', modal.center);        // Вызываем его при изменении размеров окна
      },
      close: function() {                            // Объявляем метод close()
        $content.empty();                            // Удаляем содержимое модального окна
        $modal.detach();                             // Убираем модальное окно со страницы
        $(window).off('resize', modal.center);       // Убираем обработчик событий
      }
    };
  }());