function employee() {
  var eid = document.getElementById('eid').value;
  var regex = /[DE]253[10-99]/i;
  if (regex.test(eid)) {
    alert('Valid Employee ID');
    console.log('Valid Employee ID');
  } else {
    alert('Invalid Employee ID');
    console.log('Invalid Employee ID');
  }
}
