let currentInput = '';
let operator = '';
let firstOperand = '';

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = '';
  updateDisplay();
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function setOperator(op) {
  if (currentInput !== '') {
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
    updateDisplay();
  }
}

function calculate() {
  if (currentInput !== '' && firstOperand !== '') {
    let result;
    const secondOperand = currentInput;
    switch (operator) {
      case '+':
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
        break;
      case '-':
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
        break;
      case '*':
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
        break;
      case '/':
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
        break;
      default:
        break;
    }
    currentInput = result.toString();
    operator = '';
    firstOperand = '';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = currentInput;
}
