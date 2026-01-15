const functionDisplayElement = document.getElementById("functionDisplay");

let functionAnswer = "";

let firstNumberInput = true;
let secondNumberInput = false;

let firstNumber = "";
let secondNumber = "";
let functionSelected = "";
let functionDisplayed = "";

function updateFunctionTextWithAnswer() {
  functionDisplayElement.innerHTML = functionAnswer;
}

function updateFunctionText() {
  if (functionSelected === "*") {
    functionDisplayed = "×"; 
  } else if (functionSelected === "/") {
    functionDisplayed = "÷";
  } else if (functionSelected === "-") {
    functionDisplayed = "-";
  } else if (functionSelected === "+") {
    functionDisplayed = "+";
  } else {
    functionDisplayed = "";
  }
  functionDisplayElement.innerHTML = firstNumber + (functionDisplayed ? " " + functionDisplayed + " " + secondNumber : "");
}

function clicked1() {
  if (firstNumberInput === true) {
    firstNumber += "1";
    updateFunctionText();
  } else if (secondNumberInput === true) {
    secondNumber += "1";
    updateFunctionText();
  }
}

function clicked2() {
  if (firstNumberInput === true) {
    firstNumber += "2";
    updateFunctionText();
  } else if (secondNumberInput === true) {
    secondNumber += "2";
    updateFunctionText();
  }
}

function clicked3() {
  if (firstNumberInput === true) {
    firstNumber += "3";
    updateFunctionText();
  } else if (secondNumberInput === true) {
    secondNumber += "3";
    updateFunctionText();
  }
}

function clicked4() {
  if (firstNumberInput === true) {
    firstNumber += "4";
    updateFunctionText();
  } else if (secondNumberInput === true) {
    secondNumber += "4";
    updateFunctionText();
  }
}

function clicked5() {
  if (firstNumberInput === true) {
    firstNumber += "5";
    updateFunctionText();
  } else if (secondNumberInput === true) {
    secondNumber += "5";
    updateFunctionText();
  }
}

function clicked6() {
  if (firstNumberInput === true) {
    firstNumber += "6";
    updateFunctionText();
  } else if (secondNumberInput === true) {
    secondNumber += "6";
    updateFunctionText();
  }
}

function clicked7() {
  if (firstNumberInput === true) {
    firstNumber += "7";
    updateFunctionText();
  } else if (secondNumberInput === true) {
    secondNumber += "7";
    updateFunctionText();
  }
}

function clicked8() {
  if (firstNumberInput === true) {
    firstNumber += "8";
    updateFunctionText();
  } else if (secondNumberInput === true) {
    secondNumber += "8";
    updateFunctionText();
  }
}

function clicked9() {
  if (firstNumberInput === true) {
    firstNumber += "9";
    updateFunctionText();
  } else if (secondNumberInput === true) { 
    secondNumber += "9";
    updateFunctionText();
  }
}

function clicked0() {
  if (firstNumberInput === true && firstNumber !== "") {
    firstNumber += "0";
    updateFunctionText();
  } else if (secondNumberInput === true && secondNumber !== "") {
    secondNumber += "0";
    updateFunctionText();
  }
}

function clearFunction() {
  firstNumberInput = true;
  secondNumberInput = false;
  firstNumber = "";
  secondNumber = "";
  functionSelected = "";
  functionDisplayElement.innerHTML = "Enter a Number";
}

function divide() {
  if (firstNumber > 0) {
    functionSelected = "/";
    firstNumberInput = false;
    secondNumberInput = true;
    updateFunctionText();
  }
}

function multiply() {
  if (firstNumber > 0) {
    functionSelected = "*";
    firstNumberInput = false;
    secondNumberInput = true;
    updateFunctionText();
  }
}

function add() {
  if (firstNumber > 0) {
    functionSelected = "+";
    firstNumberInput = false;
    secondNumberInput = true;
    updateFunctionText();
  }
}

function subtract() {
  if (firstNumber > 0) {
    functionSelected = "-";
    firstNumberInput = false;
    secondNumberInput = true;
    updateFunctionText();
  }
}

function calculateAnswer() {
  if (functionSelected === "-") {
    functionAnswer = Number(firstNumber) - Number(secondNumber);
  } else if (functionSelected === "+") {
    functionAnswer = Number(firstNumber) + Number(secondNumber);
  } else if (functionSelected === "*") {
    functionAnswer = Number(firstNumber) * Number(secondNumber);
  } else if (functionSelected === "/") {
    functionAnswer = Number(firstNumber) / Number(secondNumber);
  }
  updateFunctionTextWithAnswer();
  firstNumber = functionDisplayElement.innerHTML;
  secondNumber = "";
  functionSelected = "";
}

function insertPi() {
  if (firstNumberInput === true) {
    firstNumber = 3.1415926535;
  } else if (secondNumberInput === true) {
    secondNumber = 3.1415926535;
  }
  updateFunctionText();
}

function insertEulersNumber() {
  if (firstNumberInput === true) {
    firstNumber = 2.7182818284;
  } else if (secondNumberInput === true) {
    secondNumber = 2.7182818284;
  }
  updateFunctionText();
}

function insertTauNumber() {
  if (firstNumberInput === true) {
    firstNumber = 6.2831853071;
  } else if (secondNumberInput === true) {
    secondNumber = 6.2831853071;
  }
  updateFunctionText();
}

function insertGoldenRatio() {
  if (firstNumberInput === true) {
    firstNumber = 1.6180339887;
  } else if (secondNumberInput === true) {
    secondNumber = 1.6180339887;
  }
  updateFunctionText();
}

function toggleSpecialButtons() {
  // Toggle each special button by checking its computed display and switching it.
  // Using inline styles here so this works with your existing CSS (no CSS changes required).
  document.querySelectorAll(".specialButton").forEach(button => {
    const computedDisplay = getComputedStyle(button).display;
    // prefer inline-block so button sizing/margins remain consistent
    button.style.display = (computedDisplay === "none") ? "inline-block" : "none";
  });
}
