const textInput = document.getElementById('textInput');
const typedCount = document.getElementById('typedCount');
const remainingCount = document.getElementById('remainingCount');
const resetBtn = document.getElementById('resetBtn');

const MAX_LIMIT = 50;

textInput.addEventListener('input', () => {
  const currentLength = textInput.value.length;

  typedCount.textContent = currentLength;
  remainingCount.textContent = MAX_LIMIT - currentLength;

  // Visual feedback
  if (currentLength >= 45 && currentLength < MAX_LIMIT) {
    remainingCount.className = 'warning';
  } else if (currentLength === MAX_LIMIT) {
    remainingCount.className = 'limit';
    textInput.disabled = true;
  } else {
    remainingCount.className = '';
  }
});

resetBtn.addEventListener('click', () => {
  textInput.value = '';
  textInput.disabled = false;
  typedCount.textContent = '0';
  remainingCount.textContent = MAX_LIMIT;
  remainingCount.className = '';
});
