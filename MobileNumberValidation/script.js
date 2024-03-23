function val() {
  var mobile = document.getElementById('mobile').value;
  var email = document.getElementById('email').value;
  var regex = /^[7-9]\d{9}$/;
  var emailregex =
    /^([a-z A-Z 0-9 \. _ @ a-z A-Z]+)@([a-z A-Z]+).([a-z A-Z]{2,6})$/;
  if (mobile.trim() == '' && email.trim == '') {
    alert('Please Enter the all the fields');
  } else if (regex.test(mobile) && emailregex.test(email)) {
    alert('Valid fields');
  } else {
    alert('Wrong fields');
  }
}
