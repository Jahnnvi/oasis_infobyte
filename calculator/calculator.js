 function Solve(val) {
         var v = document.getElementById('res');
         v.value += val;
      }
      function Result() {
         var num1 = document.getElementById('res').value;
         var num2 = eval(num1);
         document.getElementById('res').value = num2;
      }
      function Clear() {
         var inp = document.getElementById('res');
         inp.value = '';
      }
      function Back() {
         var ev = document.getElementById('res');
         ev.value = ev.value.slice(0,-1);
      }
	 let displayValue = '0';

function updateDisplay() {
    document.getElementById('display').innerText = Value;
}

function appendToDisplay(value) {
    if (Value === '0' && value !== '.') {
        Value = value;
    } else {
        Value += value;
    }
    updateDisplay();
}

function clearDisplay() {
    Value = '0';
    updateDisplay();
}

function calculate() {
    try {
        Value = eval(Value).toString();
        Display();
    } catch (error) {
        Value = 'Error';
        Display();
    }
}

function squareRoot() {
    try {
        Value = Math.sqrt(eval(Value)).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function addParenthesis(opening) {
    displayValue += opening;
    updateDisplay();
}

function closeParenthesis() {
    displayValue += ')';
    updateDisplay();
}

// Example usage:
const result = calculator('(3 + 4) * 2 / (1 + 1)');
console.log('Result:', result);
