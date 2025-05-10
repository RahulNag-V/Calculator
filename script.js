let display = document.getElementById('display');

// Function to append numbers and operators to the display
function appendToDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Add event listener to handle keyboard inputs
document.addEventListener('keydown', function(event) {
  // Get the key pressed
  const key = event.key;

  // Handle numeric and operator keys
  if (key >= '0' && key <= '9' || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
    appendToDisplay(key);
  }
  
  // Handle Enter key for result
  if (key === 'Enter') {
    calculateResult();
  }

  // Handle Backspace key to delete last character
  if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }

  // Handle Escape key to clear the display
  if (key === 'Escape') {
    clearDisplay();
  }
});
