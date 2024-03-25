var hole = document.getElementById('hole');
var game = document.getElementById('game');
var score = 0;
hole.addEventListener('animationiteration', (e) => {
  var random = -(Math.random() * 350 + 150);
  hole.style.top = random + 'px';
});
