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