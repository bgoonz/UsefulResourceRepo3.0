/**
 * Cookies utility class by Marty Stepp
 * Relies on Prototype framework being loaded on the current page.
 */

/** Cookie class stores things related to cookies. */
function Cookies() {}

/** Returns true if a cookie exists with the given name. */
Cookies.exists = function (name) {
  return Cookies.get(name) !== null;
};

/** Returns the value of the cookie with the given name (null if not found). */
Cookies.get = function (name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

/** Turns the given checkbox into one that will remember its checked-ness,
 *  using a client-side cookie with the given name.
 */
Cookies.makeCheckboxStateful = function (element, cookieName, expiration) {
  element = $(element);
  if (!cookieName) {
    cookieName = element.id;
  }
  if (!cookieName) {
    return;
  }

  element.cookieName = cookieName;
  if (Cookies.exists(cookieName) && !element.disabled) {
    var shouldBeChecked = Cookies.get(cookieName) == "true";
    if (element.checked != shouldBeChecked) {
      if (element.onclick) {
        element.onclick();
      }
      if (element.onchange) {
        element.onchange();
      }
      element.checked = shouldBeChecked;
    }
  }
  element.observe("change", function (event) {
    Cookies.statefulCheckboxChange(element, cookieName, expiration);
  });
};

/** Turns the given radio into one that will remember its checked-ness,
 *  using a client-side cookie with the given name.
 *  Will also uncheck other radio buttons in the same name group.
 */
Cookies.makeRadioButtonStateful = function (element, cookieName, expiration) {
  element = $(element);
  if (!cookieName) {
    cookieName = element.id;
  }
  if (!cookieName) {
    return;
  }

  element.cookieName = cookieName;
  if (Cookies.exists(cookieName)) {
    var shouldBeChecked = Cookies.get(cookieName) == "true";
    if (element.checked != shouldBeChecked) {
      if (!element.disabled) {
        if (element.onclick) {
          element.onclick();
        }
        if (element.onchange) {
          element.onchange();
        }
      }
      element.checked = shouldBeChecked;
    }
  }

  if (!element.disabled) {
    element.observe("change", function (event) {
      Cookies.statefulRadioButtonChange(element, cookieName, expiration);
    });
  }
};

/** Turns the given select box into one that will remember its selected value,
 *  using a client-side cookie with the given name.
 */
Cookies.makeSelectStateful = function (element, cookieName, expiration) {
  element = $(element);
  if (!cookieName) {
    cookieName = element.id;
  }
  if (!cookieName) {
    return;
  }

  element.cookieName = cookieName;
  if (Cookies.exists(cookieName)) {
    element.value = Cookies.get(cookieName);
  }
  element.observe("change", function (event) {
    Cookies.statefulSelectChange(element, cookieName, expiration);
  });
};

/** Turns the given input text box into one that will remember its selected value,
 *  using a client-side cookie with the given name.
 *  Basically identical code to makeSelectStateful...
 */
Cookies.makeTextBoxStateful = function (element, cookieName, expiration) {
  element = $(element);
  if (!cookieName) {
    cookieName = element.id;
  }
  if (!cookieName) {
    return;
  }

  element.cookieName = cookieName;
  if (Cookies.exists(cookieName)) {
    element.value = Cookies.get(cookieName);
    if (element.onchange) {
      element.onchange();
    }
  }
  element.observe("change", function (event) {
    Cookies.statefulSelectChange(element, cookieName, expiration);
  });
};

/** Removes the cookie with the given name. */
Cookies.remove = function (name) {
  Cookies.set(name, "", -1);
};

/** Sets the cookie with the given name to have the given value.
 *  Taken from http://www.quirksmode.org/js/cookies.html
 */
Cookies.set = function (name, value, days) {
  if (days && days > 0) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else {
    var expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
};

// This function is called when a "stateful" checkbox's checked state
// changes, and stores that state in a cookie to be restored later.
Cookies.statefulCheckboxChange = function (element, cookieName, expiration) {
  if (!expiration) {
    expiration = 999; // default 999 days
  }
  element = $(element);
  if (!cookieName) {
    cookieName = element.id;
  }
  if (!cookieName) {
    return;
  }
  Cookies.set(cookieName, element.checked ? "true" : "false", expiration);
};

// This function is called when a "stateful" checkbox's checked state
// changes, and stores that state in a cookie to be restored later.
Cookies.statefulRadioButtonChange = function (element, cookieName, expiration) {
  if (!expiration) {
    expiration = 999; // default 999 days
  }
  element = $(element);
  if (!cookieName) {
    cookieName = element.id;
  }
  if (!cookieName) {
    return;
  }
  var radios = document.getElementsByName(element.name);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].cookieName) {
      Cookies.set(radios[i].cookieName, "false", expiration);
    }
  }
  Cookies.set(cookieName, element.checked ? "true" : "false", expiration);
};

// This function is called when a "stateful" select box's selected element
// changes, and stores that value in a cookie to be restored later.
Cookies.statefulSelectChange = function (element, cookieName, expiration) {
  if (!expiration) {
    expiration = 999; // default 999 days
  }
  element = $(element);
  if (!cookieName) {
    cookieName = element.id;
  }
  if (!cookieName) {
    return;
  }
  Cookies.set(cookieName, element.value, expiration);
};

/*
function $(id) {
	if (typeof(id) === "string") {
		return document.getElementById(id);
	} else {
		return id;
	}
}
*/

window.onload = function () {
  $("fixindentation").onclick = indent;
  $("indentbyspaces").onchange = enableSpacesBox;
  $("indentbytabs").onchange = enableSpacesBox;
  $("sourcecode").onchange =
    $("sourcecode").onkeydown =
    $("sourcecode").onkeypress =
    $("sourcecode").onblur =
    $("sourcecode").onfocus =
      delayedSourceCodeChange;

  $("language").onchange = delayedSourceCodeChange;

  Cookies.makeRadioButtonStateful($("indentbyspaces"));
  Cookies.makeRadioButtonStateful($("indentbytabs"));
  Cookies.makeRadioButtonStateful($("languagejava"));
  Cookies.makeRadioButtonStateful($("languagephp"));
  Cookies.makeRadioButtonStateful($("languagehtml"));
  Cookies.makeRadioButtonStateful($("languageml"));
  Cookies.makeRadioButtonStateful($("languagescheme"));

  enableSpacesBox();
};

function enableSpacesBox(event) {
  $("spaces").disabled = $("indentbytabs").checked;
}

var indentString = "";

function updateIndentString() {
  indentString = "\t";
  if ($("indentbyspaces").checked) {
    indentString = "";
    var spaces = parseInt($("spaces").value);
    for (var i = 0; i < spaces; i++) {
      indentString += " ";
    }
  }
}

function indent(event) {
  updateIndentString();
  if ($("languageml").checked || $("languagescheme").checked) {
    // don't have an algorithm to indent ML code right now.  too bad
    alert(
      "Sorry; we don't currently support fixing indentation of ML/Scheme code.\n" +
        "For ML/Scheme, this tool will only tell you about your substantive line count."
    );
    return;
  }

  if ($("languagehtml").checked) {
    indentHtml(event);
  } else {
    indentJavaPHP(event);
  }
}

function indentHtml(event) {
  updateIndentString();
  if ($("indentbyspaces").checked) {
    $("tidyspaces").value = "" + indentString.length;
  } else {
    $("tidyspaces").value = "4";
  }
  $("tidyform").submit();
}

function indentJavaPHP(event) {
  var code = $("sourcecode").value;
  // code += "\n:-)";

  var newCode = "";
  var indentLevel = 0;
  var indentDuration = 0; // used for temporary indents like 1-line ifs
  var newLines = [];
  var inMultiLineComment = false;

  var lines = code.split(/[\r]?\n/gi);
  for (var i = 0; i < lines.length; i++) {
    var line = trim(lines[i]);
    var lineForMatching = line.replace(/\/\/.*/, "");

    if (inMultiLineComment) {
      if (line.match(/\*\//)) {
        lineForMatching = line.replace(/.*\*\//, "");
        inMultiLineComment = false;
      } else {
        // entire line is part of multi-line comment;
        // ignore it for indentation purposes
        lineForMatching = "";
      }
    }

    if (lineForMatching.match(/\/\*/)) {
      if (lineForMatching.match(/\*\//)) {
        // a multi-line comment contained within one line; strip it
        lineForMatching = lineForMatching.replace(/\/\*.*\*\//, "");
      } else {
        inMultiLineComment = true;
        lineForMatching = lineForMatching.replace(/\/\*.*/, "");
      }
    }

    // ignore stuff in comments

    var lbrackets = lineForMatching.replace(/[^\{]+/gi, "");
    var rbrackets = lineForMatching.replace(/[^\}]+/gi, "");
    var lbracket1 = lineForMatching.indexOf("{");
    var rbracket1 = lineForMatching.indexOf("}");
    var lbracketN = lineForMatching.lastIndexOf("{");
    var rbracketN = lineForMatching.lastIndexOf("}");

    var increaseIndentBefore = false;
    var decreaseIndentBefore = false;
    var increaseIndentAfter = false;
    var decreaseIndentAfter = false;

    if (
      lbrackets.length > rbrackets.length ||
      (lbracketN >= 0 && lbracketN > rbracketN)
    ) {
      // opening brace(s) on this line; indent subsequent lines
      increaseIndentAfter = true;
    }
    if (
      rbrackets.length > lbrackets.length ||
      (rbracket1 >= 0 && rbracket1 < lbracket1)
    ) {
      // closing brace(s) on this line; decrease this line and subseqent lines
      decreaseIndentBefore = true;
    }

    // closing bracket; decrease indent
    // indentLevel = Math.max(0, indentLevel - 1);

    // check for a prior temporary indent (unbracketed if/else)
    // and get rid of it if so
    if (indentDuration > 0) {
      // if (lbrackets.length != rbrackets.length ||
      // (!lineForMatching.match(/(if |for |while )[ \t]*([^)]*)/) && !lineForMatching.match(/else /))) {
      indentDuration--;
      if (trim(lineForMatching).indexOf("{") >= 0) {
        decreaseIndentBefore = true;
      } else if (indentDuration == 0) {
        // indentLevel = Math.max(0, indent - 1);
        decreaseIndentAfter = true;
      }
      // }
    }

    // check for a new temporary indent (unbracketed if/else)
    // on this line and increase subsequent indent temporarily if so
    // side note: f**k unbracketed if/elses for making me write this code
    if (
      // (lbrackets.length < rbrackets.length || rbracketN > lbracketN) ||
      // increaseIndentAfter ||
      (lbrackets.length == 0 &&
        rbrackets.length == 0 &&
        ((lineForMatching.match(/(if |while )[ \t]*([^)]*)/) &&
          !lineForMatching.match(/;/)) ||
          lineForMatching.match(/(for )[ \t]*([^)]*)/) ||
          (lineForMatching.match(/else/) &&
            !lineForMatching.match(/else[ ]+if/) &&
            // !lineForMatching.match(/ /)
            (lbrackets.length == 0 || lbrackets.length > rbrackets.length)))) ||
      trim(lineForMatching).match(/}[ \t]*else$/)
    ) {
      increaseIndentAfter = true;
      indentDuration = 1;
    }

    // pre-print indentation adjustments
    if (increaseIndentBefore) {
      indentLevel++;
    } else if (decreaseIndentBefore) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    // store this line, indented (hopefully) properly
    for (var tabs = 0; tabs < indentLevel; tabs++) {
      line = indentString + line;
    }
    newLines.push(line);

    // post-print indentation adjustments
    if (increaseIndentAfter) {
      indentLevel++;
    } else if (decreaseIndentAfter) {
      indentLevel = Math.max(0, indentLevel - 1);
    }
  }

  // put the newly indented lines into the text area on the page
  newCode = newLines.join("\n");
  $("sourcecode").value = newCode;
}

function delayedSourceCodeChange(event) {
  event = event || window.event;
  sourceCodeChange(event);
  setTimeout(sourceCodeChange, 20);
}

// Called when the text in the text box changes; shows the count of lines.
function sourceCodeChange(event) {
  var codeText = $("sourcecode").value;
  var lineCount = codeText ? trim(codeText).split(/[\r]?\n/).length : 0;

  if ($("languagehtml").checked) {
    // remove multi-line <!-- ... --> comments from HTML
    codeText = codeText.replace(/\<!--([^-]|-[^-])*--\>/gi, "");
  } else if ($("languageml").checked) {
    // remove multi-line (* ... *) comments from ML code
    codeText = codeText.replace(/\(\*([^*]*\*[^\)])*([^*]*\*)\)/gi, "");

    // try not to count lines that contain only "in" or "end"
    codeText = codeText.replace(/[ \t]*let[ \t]*/gi, "");
    codeText = codeText.replace(/[ \t]*in[ \t]*/gi, "");
    codeText = codeText.replace(/[ \t]*end[ \t]*[;]?/gi, "");
  } else if ($("languagescheme").checked) {
    // remove ; comments
    codeText = "\n" + codeText + "\n"; // makes regexes match ends of input
    codeText = codeText.replace(/\s*;.*/gim, "");

    // remove blank lines and lines containing only ( or )  (or [ or ])
    // (hack: I remove the regex 5x because for some reason it doesn't
    // properly remove multiple lines of ) in a row)
    codeText = codeText.replace(/\r/, "");
    codeText = codeText.replace(/$\s*([()\[\]])*\s*\n/gim, "$1\n");
    codeText = codeText.replace(/$\s*([()\[\]])*\s*\n/gim, "$1\n");
    codeText = codeText.replace(/$\s*([()\[\]])*\s*\n/gim, "$1\n");
    codeText = codeText.replace(/$\s*([()\[\]])*\s*\n/gim, "$1\n");
    codeText = codeText.replace(/$\s*([()\[\]])*\s*\n/gim, "$1\n");
  } else {
    if ($("languagephp").checked) {
      // remove # comments (not Java syntax, but useful for Perl/PHP/shell/etc.)
      codeText = codeText.replace(/\s*#[! \t].*/gim, "");
    }

    // remove // comments
    codeText = "\n" + codeText + "\n"; // makes regexes match ends of input
    codeText = codeText.replace(/\s*\/\/.*/gim, "");

    // remove multi-line / * * / comments
    // codeText = codeText.replace(/\/\*([^*]*\*)*([^*]*\*)\//gi, "");
    codeText = codeText.replace(/\/\*([^*]*\*[^\/])*([^*]*\*)\//gi, "");
  }

  // remove blank lines and lines containing only { or } braces
  // (hack: I remove the regex 5x because for some reason it doesn't
  // properly remove multiple lines of } in a row)
  codeText = codeText.replace(/\r/, "");
  codeText = codeText.replace(/$\s*([{}])*\s*\n/gim, "$1\n");
  codeText = codeText.replace(/$\s*([{}])*\s*\n/gim, "$1\n");
  codeText = codeText.replace(/$\s*([{}])*\s*\n/gim, "$1\n");
  codeText = codeText.replace(/$\s*([{}])*\s*\n/gim, "$1\n");
  codeText = codeText.replace(/$\s*([{}])*\s*\n/gim, "$1\n");

  codeText = trim(codeText); // kill leading/trailing \n that I inserted

  // dump to page for debugging
  // $("dumptarget").innerHTML = htmlEncode(codeText);

  var substantiveLineCount = codeText
    ? trim(codeText).split(/[\r]?\n/).length
    : 0;
  $("linecount").innerHTML = lineCount;
  $("substantivelinecount").innerHTML = substantiveLineCount;
}

function padL(text, length) {
  while (text.length < length) {
    text = " " + text;
  }
  return text;
}

function htmlEncode(text) {
  text = text.replace(/</g, "&lt;");
  text = text.replace(/>/g, "&gt;");
  text = text.replace(/ /g, "&nbsp;");
  return text;
}

function ltrim(str) {
  for (var k = 0; k < str.length && str.charAt(k) <= " "; k++);
  return str.substring(k, str.length);
}

function rtrim(str) {
  for (var j = str.length - 1; j >= 0 && str.charAt(j) <= " "; j--);
  return str.substring(0, j + 1);
}

function trim(str) {
  return ltrim(rtrim(str));
}
function dumpIndexes(str) {
  var output = "";
  for (var i = 0; i < str.length; i++) {
    output +=
      padL("" + i, 4) +
      ": " +
      toPrintable(str[i]) +
      " (" +
      str[i].charCodeAt(0) +
      ")\n";
  }
  return output;
}

function toPrintable(ch) {
  if (ch == "\r") {
    return "\\r";
  }
  if (ch == "\n") {
    return "\\n";
  }
  if (ch == "\t") {
    return "\\t";
  }
  if (ch == " ") {
    return "(space)";
  }
  if (ch == "\0") {
    return "\\0";
  }
  return ch;
}
