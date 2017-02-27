document.querySelector('.user-password').focus();

[].forEach.call(document.querySelectorAll('.user-login, .user-password'), function(el) {
  el.addEventListener('keyup', function() {
    var loginInput = document.querySelectorAll('.user-login')[0],
      passwordInput = document.querySelectorAll('.user-password')[0],
      submitInput = document.querySelectorAll("#login-submit")[0];

    if (loginInput.value != "F.MONTANANA") {
      $("#user-avatar, .avatar-help").fadeOut(function() {
        $(".no-avatar").fadeIn();
      });
    } else {
      $(".no-avatar").fadeOut(function() {
        $("#user-avatar, .avatar-help").fadeIn();
      });
    }

    if (passwordInput.value == "" || loginInput.value == "") {
      submitInput.setAttribute('disabled', 'disabled');
    } else {
      submitInput.removeAttribute('disabled');
    }
  })
});

document.querySelectorAll("#login-submit")[0].onclick = function(){
  return false;
};

document.querySelector("#maintenance-connection").addEventListener('click', function() {
    document.querySelector(".login-form.maintenance-mode").classList.remove('maintenance-mode');
    document.querySelector('.user-password').focus();
});