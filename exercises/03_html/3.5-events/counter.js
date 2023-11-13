document.addEventListener('DOMContentLoaded', function () {
    const counterParagraph = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');
  
    let counterValue = 0;
  
    function updateCounterText() {
      counterParagraph.textContent = counterValue;
    }
  
    incrementButton.addEventListener('click', function () {
      counterValue = (counterValue + 1) > 5 ? -5 : counterValue + 1;
      updateCounterText();
    });
  
    decrementButton.addEventListener('click', function () {
      counterValue = (counterValue - 1) < -5 ? 5 : counterValue - 1;
      updateCounterText();
    });
  
    resetButton.addEventListener('click', function () {
      counterValue = 0;
      updateCounterText();
    });
  
    updateCounterText();
  });
  