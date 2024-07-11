// script.js

let displayElement = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = undefined;

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = undefined;
    updateDisplay();
}

function appendNumber(number) {
    currentNumber = currentNumber.toString() + number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        compute();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function compute() {
    let computation;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentNumber = computation;
    operation = undefined;
    previousNumber = '';
    updateDisplay();
}

function updateDisplay() {
    displayElement.innerText = currentNumber;
}

clearDisplay();
