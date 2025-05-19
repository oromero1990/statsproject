/**
 * Converts comma-separated string into an array of numbers
 * @param {string} input
 * @returns {number[]}
 */
function parseNumbers(input) {
  return input
    .split(",")
    .map((num) => parseFloat(num.trim()))
    .filter((num) => !isNaN(num));
}

function getLength(numbers) {
  return numbers.length;
}

function getSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

function getMean(numbers) {
  return getSum(numbers) / getLength(numbers);
}

function getMin(numbers) {
  return Math.min(...numbers);
}

function getMax(numbers) {
  return Math.max(...numbers);
}

function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
}

function getEvens(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

function getOdds(numbers) {
  return numbers.filter((num) => num % 2 !== 0);
}

/**
 * Called when the button is clicked
 */
function calculateStats() {
  const input = document.getElementById("numberInput").value;
  const numbers = parseNumbers(input);

  if (numbers.length === 0) {
    document.getElementById("results").innerHTML =
      "<p>Please enter valid numbers.</p>";
    return;
  }

  const resultHTML = `
    <p><strong>You entered:</strong> [${numbers.join(", ")}]</p>
    <p><strong>Total numbers:</strong> ${getLength(numbers)}</p>
    <p><strong>Sum:</strong> ${getSum(numbers)}</p>
    <p><strong>Mean:</strong> ${getMean(numbers).toFixed(2)}</p>
    <p><strong>Min:</strong> ${getMin(numbers)}</p>
    <p><strong>Max:</strong> ${getMax(numbers)}</p>
    <p><strong>Range:</strong> ${getRange(numbers)}</p>
    <p><strong>Even numbers:</strong> ${getEvens(numbers).join(", ")}</p>
    <p><strong>Odd numbers:</strong> ${getOdds(numbers).join(", ")}</p>
  `;

  document.getElementById("results").innerHTML = resultHTML;
}
