function validate() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var age = document.getElementById('age').value;
  var mobile = document.getElementById('mobile').value;
  if (username.trim() == '' || password.trim() == '' || age.trim() == '' || mobile.trim() == '') {
    alert('Please fill all the fields');
    console.log('Please fill all the fields');
    return false;
  } else if (username == 'abc' && password == 'abc' && age >= '20' && mobile.length == '10') {
    console.log('Valid User');
    return true;
  } else {
    alert('Invalid User');
    console.log('Invalid User');
    return false;
  }
}
