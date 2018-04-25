(function () {
  var form = document.querySelector('#interests');
  var elements = form.elements; // все элементы формы

  var options = elements.genre;

  console.log(elements);

  var all = document.getElementById('all');

  // перебираем флажки, обновляем свойство checked
  function updateAll() {
    for (var i = 0; i < options.length; i++) {
      options[i].checked = all.checked
    }
  }

  all.addEventListener('change', updateAll);

}());