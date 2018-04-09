$(function () {
  var form, width, height, area;
  form = $('#calculator');

  // когда поле теряет фокус, записываем значения в консоль
  $('form input[type=text]').on('blur', function () {
    console.log('вы ввели: ', this.value)
  })

  // при отправке формы
  form.on('submit', function (e) {
    e.preventDefault();
    console.log('push button');

    width = $('#width').val();
    console.log('Width: ' + width);

    height = $('#height').val();
    console.log('Height: ' + height);

    area = width * height;

    console.info(area);

    form.append('<p>' + area +'</p>');
  });





});