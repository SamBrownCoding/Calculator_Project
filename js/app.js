const display = document.getElementById("display");
const clearDisplay = document.getElementById("clear");
let previousMath = document.querySelector("#display p");
let resultDisplay = document.querySelector("#display h2");

let curInput = '';
let mathOperator = '';
let firstInputHold = '';
let decimalAdded = false;

// Function that show up on the display
function showDisplay(input) {
    if (input === '.' && decimalAdded) return;
    if (input === '.') decimalAdded = true;
    curInput += input;
    display.innerText = curInput;
};//end Function

// Function that clear the display 
function clear() {
    curInput = '';
    mathOperator = '';
    firstInputHold = '';
    decimalAdded = false;
    display.innerText = '';
    previousMath.innerText = '';
    resultDisplay.innerText = '';
};//end Function

// Function to handle operator input
function inputOperator(op) {
    if (curInput === '') return;
    // Evaluate the current expression before adding a new operator
    if (firstInputHold !== '') {
        calculate();
    }
    firstInputHold = curInput;
    mathOperator = op;
    curInput += ` ${op} `;
    display.innerText = curInput;
    //curInput = '';
    previousMath.innerText = `${firstInputHold} ${op}`;
    decimalAdded = false;
};//end Function

function calculate() {
    if (firstInputHold === '' || curInput === '') return;

    const [firstNumber, operator, secondNumber] = curInput.split(' ');
    let result;

    if (operator === '+') {
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (operator === '-') {
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (operator === '*') {
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (operator === '/') {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    } else {
        return; // Invalid operator
    }

    previousMath.innerText = `${firstInputHold} ${op} ${curInput}`;
    resultDisplay.innerHTML = `${result}`
    curInput = result.toString(); 
    firstInputHold = '';
    mathOperator = '';
}

//Event Listener BUTTON CLICK ACTION
clearDisplay.addEventListener("click", () => {
    clear('AC');
});

const decimal = document.getElementById("dot").addEventListener("click", () => showDisplay('.'));

const equal = document.getElementById("equal").addEventListener("click", () => calculate('='));

const divide = document.getElementById("divide").addEventListener("click", () => inputOperator('/'));

const multiple = document.getElementById("multiple").addEventListener("click", () => inputOperator('x'));

const add = document.getElementById("add").addEventListener("click", () => inputOperator('+'));

const substract = document.getElementById("substract").addEventListener("click", () => inputOperator('-'));

const zero = document.getElementById("zero").addEventListener("click", () => showDisplay('0'));

const one = document.getElementById("one").addEventListener("click", () => showDisplay('1'));

const two = document.getElementById("two").addEventListener("click", () => showDisplay('2'));

const three = document.getElementById("three").addEventListener("click", () => showDisplay('3'));

const four = document.getElementById("four").addEventListener("click", () => showDisplay('4'));

const five = document.getElementById("five").addEventListener("click", () => showDisplay('5'));

const six = document.getElementById("six").addEventListener("click", () => showDisplay('6'));

const seven = document.getElementById("seven").addEventListener("click", () => showDisplay('7'));

const eight = document.getElementById("eight").addEventListener("click", () => showDisplay('8'));

const nine = document.getElementById("nine").addEventListener("click", () => showDisplay('9'));

