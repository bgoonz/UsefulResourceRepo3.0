const passwordSizeRange = document.querySelector("#size-range");
const passwordSizeInput = document.querySelector("#size-input");
const result = document.querySelector("#result");
let actualSize = 0;

const numbers = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10];
const upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  "-",
  "_",
  "<",
  ">",
  ":",
  ";",
  ".",
  "?",
  "|",
  "^",
  "~",
];

let actualChars = [];

const selection = {
  upperCaseLetters: {
    checked: false,
    source: upperCaseLetters,
  },
  lowerCaseLetters: {
    checked: false,
    source: lowerCaseLetters,
  },
  numbers: {
    checked: false,
    source: numbers,
  },
  symbols: {
    checked: false,
    source: symbols,
  },
  updateSelection: function (target, check) {
    this[target].checked = check;
    updateActualChars();
  },
};

function updateActualChars() {
  let chars = [];

  if (selection.upperCaseLetters.checked)
    chars = chars.concat(selection.upperCaseLetters.source);

  if (selection.lowerCaseLetters.checked)
    chars = chars.concat(selection.lowerCaseLetters.source);

  if (selection.numbers.checked) chars = chars.concat(selection.numbers.source);

  if (selection.symbols.checked) chars = chars.concat(selection.symbols.source);

  chars.shuffle();

  actualChars = chars;
}

function updateSizeRange(value) {
  passwordSizeRange.value = actualSize = parseInt(value);
}

function updateSizeInput(value) {
  passwordSizeInput.value = actualSize = parseInt(value);
}

function generatePassword() {
  if (actualChars.length == 0) {
    result.value = "";
    return;
  }

  let password = "";

  for (let i = 0; i < actualSize; i++) password += actualChars.any();

  result.value = password;
}

Array.prototype.any = function () {
  return this[randomNumber(this.length - 1)];
};

Array.prototype.swap = function (i, j) {
  let tmp = this[i];
  this[i] = this[j];
  this[j] = tmp;
};

Array.prototype.shuffle = function () {
  const lastIndex = this.length - 1;

  for (let i = 0; i <= lastIndex; i++)
    this.swap(randomNumber(lastIndex), randomNumber(lastIndex));
};

function randomNumber(max) {
  return Math.round(Math.random() * max);
}

function changeActualSize(value) {
  actualSize = value;
}

function init() {
  const checkUpperCaseLetters = document.querySelector(
    "#check-uppercase-letters"
  );
  const checkLowerCaseLetters = document.querySelector(
    "#check-lowercase-letters"
  );
  const checkNumbers = document.querySelector("#check-numbers");
  const checkSymbols = document.querySelector("#check-symbols");

  selection.updateSelection("upperCaseLetters", checkUpperCaseLetters.checked);
  selection.updateSelection("lowerCaseLetters", checkLowerCaseLetters.checked);
  selection.updateSelection("numbers", checkNumbers.checked);
  selection.updateSelection("symbols", checkSymbols.checked);

  changeActualSize(passwordSizeRange.value);

  passwordSizeRange.onchange = passwordSizeRange.oninput = function () {
    updateSizeInput(this.value);
    changeActualSize(this.value);
  };

  passwordSizeInput.onchange = passwordSizeInput.oninput = function () {
    updateSizeRange(this.value);
    changeActualSize(this.value);
  };

  checkUpperCaseLetters.onchange = function () {
    selection.updateSelection("upperCaseLetters", this.checked);
  };

  checkLowerCaseLetters.onchange = function () {
    selection.updateSelection("lowerCaseLetters", this.checked);
  };

  checkNumbers.onchange = function () {
    selection.updateSelection("numbers", this.checked);
  };

  checkSymbols.onchange = function () {
    selection.updateSelection("symbols", this.checked);
  };

  document.querySelector("#generate-btn").onclick = () => generatePassword();

  document.querySelector("#copy-btn").onclick = () => copyToClipboard();
}

function copyToClipboard() {
  /* Select the text field */
  result.select();
  result.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");
}
