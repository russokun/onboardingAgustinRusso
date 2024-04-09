//1
const square = document.getElementById('square');
const changeBtn = document.getElementById('changeBtn');

let isBlue = false;

changeBtn.addEventListener('click', function() {
  if (isBlue) {
    square.style.backgroundColor = 'red';
    square.textContent = 'Red Square';
  } else {
    square.style.backgroundColor = 'lightblue';
    square.textContent = 'Light Blue Square';
  }
  
  isBlue = !isBlue;
});
//2

const textInput = document.getElementById('textInput');
const clearBtn = document.getElementById('clearBtn');

textInput.addEventListener('input', function() {
  square.textContent = this.value;
});

clearBtn.addEventListener('click', function() {
  square.textContent = '';
  textInput.value = '';
});