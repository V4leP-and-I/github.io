const checkbox = document.getElementById('html');
const regButton = document.querySelector('.reg_button');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    regButton.style.opacity = '1';
  } else {
    regButton.style.opacity = '0.3';
  }
});