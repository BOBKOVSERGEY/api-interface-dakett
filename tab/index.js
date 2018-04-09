$(function () {
  $('.tab-list').each(function () {
    var tab = $(this).find('li.active');
    var link = tab.find('a');
    var panel = $(link.attr('href'));

    $(this).on('click', '.tab-control', function (e) {
      e.preventDefault();
      var link = $(this);
      var id = this.hash;
      if (id && !link.is('.active')) {             // Если уже не активны
        panel.removeClass('active');               // Деактивируем панель
        tab.removeClass('active');                 // Деактивируем вкладку

        panel = $(id).addClass('active');          // Делаем новую панель активной
        tab = link.parent().addClass('active');   //  Делаем новую вкладку активной
      }
    })
  })
});