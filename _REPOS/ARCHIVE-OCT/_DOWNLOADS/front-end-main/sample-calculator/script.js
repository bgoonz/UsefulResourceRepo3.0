const DISPLAY = document.querySelector("#display");
const DISPLAY_WARNING = document.querySelector("#display-warning");
let expressions = [];

function echoWarning(msg, visibility = true) {
  DISPLAY_WARNING.innerHTML = msg + "";
  DISPLAY_WARNING.style.visibility = visibility ? "visible" : "hidden";
}

function addDigit(digit) {
  if (DISPLAY.innerHTML.length > 8) {
    echoWarning("It is too damn long");
    return;
  }
  DISPLAY.innerHTML =
    DISPLAY.innerHTML === "0" ? digit : DISPLAY.innerHTML + digit;
}

function pushOperator(operator, value = "") {
  expressions.push(value === "" ? parseInt(DISPLAY.innerHTML) : value);
  expressions.push(operator);
  DISPLAY.innerHTML = "0";
}

function deleteDigitOrOperator() {
  if (DISPLAY.innerHTML === "0" && expressions.length == 2) {
    DISPLAY.innerHTML = expressions[0] + "";
    expressions = [];
    echoWarning("...", false);
  } else {
    DISPLAY.innerHTML =
      DISPLAY.innerHTML === "0" || DISPLAY.innerHTML.length == 1
        ? "0"
        : DISPLAY.innerHTML.substr(0, DISPLAY.innerHTML.length - 1);
    echoWarning(
      DISPLAY_WARNING.innerHTML,
      DISPLAY_WARNING.innerHTML === "..." ? false : true
    );
  }
}

function doOperation() {
  let done = 0;

  switch (expressions[1]) {
    case "+":
      done = expressions[0] + expressions[2];
      break;
    case "-":
      done = expressions[0] - expressions[2];
      break;
    case "*":
      done = expressions[0] * expressions[2];
      break;
    case "/":
      done = expressions[0] / expressions[2];
      break;
  }
  return done;
}

function operatorAction(operator) {
  let done = 0;

  if (expressions.length == 2) {
    expressions.push(parseInt(DISPLAY.innerHTML));
    done = doOperation();
    expressions = [];
    pushOperator(operator, done);
  } else {
    pushOperator(operator);
  }
  echoWarning(done, done == 0 ? false : true);
}

function signInverter() {
  DISPLAY.innerHTML = parseInt(DISPLAY.innerHTML) * -1 + "";
}

function deleteAll() {
  echoWarning("...", false);
  DISPLAY.innerHTML = "0";
  expressions = [];
}

function equalButton() {
  if (DISPLAY.innerHTML !== "0") {
    expressions.push(parseInt(DISPLAY.innerHTML));

    echoWarning("...", false);

    DISPLAY.innerHTML = doOperation() + "";
    expressions = [];
  }
}
