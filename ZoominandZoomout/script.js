var width = 300;
var addition = 10;
var intervalID = 0;
function increase() {
  clearInterval(intervalID);
  intervalID = setInterval(zoomin, 10);
}
function decrease() {
  clearInterval(intervalID);
  intervalID = setInterval(zoomout, 10);
}
function zoomin() {
  if (width < 500) {
    width = width + addition;
    document.querySelector('img').style.width = width;
    document.querySelector('img').style.height = width;
  } else {
    clearInterval(intervalID);
  }
}
function zoomout() {
  if (width > 300) {
    width = width - addition;
    document.querySelector('img').style.width = width;
    document.querySelector('img').style.height = width;
  } else {
    clearInterval(intervalID);
  }
}
