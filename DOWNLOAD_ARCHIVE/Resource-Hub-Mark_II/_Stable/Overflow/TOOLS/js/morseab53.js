var alphabetToMorse = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  á: ".--.-",
  ä: ".-.-",
  é: "..-..",
  ñ: "--.--",
  ö: "---.",
  ü: "..--",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ",": "--..--",
  ".": ".-.-.-",
  "?": "..--..",
  ";": "-.-.-",
  ":": "---...",
  "/": "-..-.",
  "-": "-....-",
  "'": ".----.",
  _: "..--.-",
  "@": ".--.-.",
  " ": ".......",
  "!": "-.-.--",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  "=": "-...-",
  "+": ".-.-.",
  '"': ".-..-.",
  $: "...-..-",
};

var morseToAlphabet = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".--.-": "á",
  ".-.-": "ä",
  "..-..": "é",
  "--.--": "ñ",
  "---.": "ö",
  "..--": "ü",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "--..--": ",",
  ".-.-.-": ".",
  "..--..": "?",
  "-.-.-": ";",
  "---...": ":",
  "-..-.": "/",
  "-....-": "-",
  ".----.": "'",
  "..--.-": "_",
  ".--.-.": "@",
  ".......": " ",
  "-.-.--": "!",
  "-.--.": "(",
  "-.--.-": ")",
  ".-...": "&",
  "-...-": "=",
  ".-.-.": "+",
  ".-..-.": '"',
  "...-..-": "$",
};

var morseSignals = {
  ".-.-": "[AA NEWLINE SIGNAL]",
  ".-.-.": "[AR NEWPAGE SIGNAL]",
  ".-...": "[AS WAIT SIGNAL]",
  "-...-": "[BT NEWPARAGRAPH SIGNAL]",
  "-.-.-": "[CT ATTENTION SIGNAL]",
  "........": "[HH ERROR SIGNAL]",
  "-.-": "[K  INVITEANY SIGNAL]",
  "-.--.": "[KN INVITENAMED SIGNAL]",
  "-..---": "[NJ SHIFTWABUN SIGNAL]",
  "...-.-": "[SK ENDCONTACT SIGNAL]",
  "...-.": "[SN UNDERSTOOD SIGNAL]",
  "...---...": "[SOS DISTRESS SIGNAL]",
};

function textToMorse(text) {
  var chars = text.split("");
  var ret = [];
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i].toLowerCase();
    if (alphabetToMorse[char]) {
      ret.push(alphabetToMorse[char]);
    }
  }
  return ret.join(" ");
}

function morseToText(morse, signalMode) {
  var word = "";
  var text = [];
  var error = null;

  var chars = morse.split(" ");
  for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    if (char) {
      var translated =
        (signalMode ? morseSignals[char] : false) || morseToAlphabet[char];
      if (translated) {
        var letter = translated;
      } else
        error = {
          char: char,
          i: i + 1,
        };
      word += letter || "?";
    }
  }
  text.push(word);
  return {
    text: text.join(" "),
    error: error,
  };
}
