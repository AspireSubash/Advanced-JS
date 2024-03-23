const image = document.getElementById('image');
const boxes = document.getElementsByClassName('box');

for (let box of boxes) {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    box.addEventListener('dragenter', (e) => {
        e.preventDefault();
    });
    box.addEventListener('dragleave', (e) => {
        e.preventDefault();
    });
    box.addEventListener('drop', (e) => {
        e.preventDefault();
        box.append(image);
    });
}
image.addEventListener('dragstart', (e) => {
  setTimeout(() => {
    this.className = 'invisible';
  }, 0);
});
image.addEventListener('dragend', (e) => {
  this.className = 'image';
});
