let operand1 = null;
let operand2 = null;
let operator = null;

function numberClicked(num) {
  if (operator === null) {
    if (operand1 === null) {
      operand1 = num;
    } else {
      operand1 = parseFloat(operand1.toString() + num.toString());
    }
    document.getElementById("result").value = operand1;
  } else {
    if (operand2 === null) {
      operand2 = num;
    } else {
      operand2 = parseFloat(operand2.toString() + num.toString());
    }
    document.getElementById("result").value = operand2;
  }
}

function operatorClicked(op) {
  operator = op;
}

function decimalClicked() {
  if (operator === null) {
    if (operand1 === null) {
      operand1 = 0;
    }
    if (operand1.toString().indexOf('.') === -1) {
      operand1 = parseFloat(operand1.toString() + ".");
      document.getElementById("result").value = operand1;
    }
  } else {
    if (operand2 === null) {
      operand2 = 0;
    }
    if (operand2.toString().indexOf('.') === -1) {
      operand2 = parseFloat(operand2.toString() + ".");
      document.getElementById("result").value = operand2;
    }
  }
}

function clearClicked() {
  operand1 = null;
  operand2 = null;
  operator = null;
  document.getElementById("result").value = "";
}

function equalClicked() {
  let result = null;
  if (operand1 !== null && operand2 !== null && operator !== null) {
    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
      default:
        break;
    }
    operand1 = result;
    operand2 = null;
    operator = null;
    document.getElementById("result").value = result;
  }
}

