// Create a counter with increment, decrement and reset button

/* <h1>Counter</h1>
<p id="counter">0</p>
<button onclick="increment()">Increment</button>
<button onclick="decrement()">Decrement</button>
<button onclick="reset()">Reset</button> */

let count = 0; // Initial count value
const counterDisplay = document.getElementById('counter');

  function updateCounter() {
    counterDisplay.textContent = count;
  }

  function increment() {
    count++;
    updateCounter();
  }

  function decrement() {
    count--;
    updateCounter();
  }
  function reset() {
  count = 0;
  updateCounter();
  }