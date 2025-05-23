// File: caculator.js

let expression = '';

// Function to append a value to the input field
function appendValue(value) {
    expression += value;
    document.getElementById('question').innerText = expression;
}

// Function to clear the input field
function clearResult() {
    expression = '';
    document.getElementById('question').innerText = '';
    document.getElementById('result').innerText = '';
    
}

// Function to calculate the result
function calculateResult() {
    try {
        let result = eval(expression);
        document.getElementById('result').innerText = result;
    } catch (error) {
        document.getElementById('result').innerText = 'Error';
    }
}

// Function to handle raising a number to a power
function raiseToPower() {
    let questionElement = document.getElementById('question');
    let currentExpression = questionElement.innerText;

    // Append the '^' operator to the current expression
    questionElement.innerText = currentExpression + '^';
    console.log(raiseToPower);
}