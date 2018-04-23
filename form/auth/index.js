(function () {
  var form = document.getElementById('login');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var elements = this.elements;
    var username = elements.username.value;
    if (username != "") {
      var msg = "Welcome " + username;
      document.getElementById('main').textContent = msg;
    }
  })

  var pwd = document.getElementById('pwd');
  var chk = document.getElementById('showPwd');
  chk.addEventListener('change', function (e) {
    var target = e.target;
    /*
    if (target.checked) {
     pwd.setAttribute('type', 'text')
     } else {
     pwd.setAttribute('type', 'password')
     }*/
    if (target.checked) {
      pwd.type = 'text'
    } else {
      pwd.type = 'password'
    }
  })

}());