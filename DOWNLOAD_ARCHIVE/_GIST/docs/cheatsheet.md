# JavaScript Cheat Sheet

> JavaScript methods and functions, a guide to regular expressions and the XMLHttpRequest object.

### Regular Expres­sions Syntax

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><p>^</p></td><td><p>Start of string</p></td></tr><tr class="even"><td><p>$</p></td><td><p>End of string</p></td></tr><tr class="odd"><td><p>.</p></td><td><p>Any single character</p></td></tr><tr class="even"><td><p>(a|b)</p></td><td><p>a or b</p></td></tr><tr class="odd"><td><p>(…)</p></td><td><p>Group section</p></td></tr><tr class="even"><td><p>[abc]</p></td><td><p>In range (a, b or c)</p></td></tr><tr class="odd"><td><p>[^abc]</p></td><td><p>Not in range</p></td></tr><tr class="even"><td></td><td><p>White space</p></td></tr><tr class="odd"><td><p>a?</p></td><td><p>Zero or one of a</p></td></tr><tr class="even"><td><p>a*</p></td><td><p>Zero or more of a</p></td></tr><tr class="odd"><td><p>a*?</p></td><td><p>Zero or more, ungreedy</p></td></tr><tr class="even"><td><p>a+</p></td><td><p>One or more of a</p></td></tr><tr class="odd"><td><p>a+?</p></td><td><p>One or more, ungreedy</p></td></tr><tr class="even"><td><p>a{3}</p></td><td><p>Exactly 3 of a</p></td></tr><tr class="odd"><td><p>a{3,}</p></td><td><p>3 or more of a</p></td></tr><tr class="even"><td><p>a{,6}</p></td><td><p>Up to 6 of a</p></td></tr><tr class="odd"><td><p>a{3,6}</p></td><td><p>3 to 6 of a</p></td></tr><tr class="even"><td><p>a{3,6}?</p></td><td><p>3 to 6 of a, ungreedy</p></td></tr><tr class="odd"><td><p>&lt;/p&gt;</p></td><td><p>Escape character</p></td></tr><tr class="even"><td><p>[:punct:]</p></td><td><p>Any punctu­ation symbol</p></td></tr><tr class="odd"><td><p>[:space:]</p></td><td><p>Any space character</p></td></tr><tr class="even"><td><p>[:blank:]</p></td><td><p>Space or tab</p></td></tr></tbody></table>

### Pattern Modifiers

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><p>g</p></td><td><p>Global match</p></td></tr><tr class="even"><td><p>i *</p></td><td><p>Case-i­nse­nsitive</p></td></tr><tr class="odd"><td><p>m *</p></td><td><p>Multiple lines</p></td></tr><tr class="even"><td><p>s *</p></td><td><p>Treat string as single line</p></td></tr><tr class="odd"><td><p>x *</p></td><td><p>Allow comments and whitespace in pattern</p></td></tr><tr class="even"><td><p>e *</p></td><td><p>Evaluate replac­ement</p></td></tr><tr class="odd"><td><p>U *</p></td><td><p>Ungreedy pattern</p></td></tr></tbody></table>

### JavaScript RegExp Object

compile()

lastParen

exec()

leftCO­ntext

global

multiline

ignoreCase

rightC­ontext

input

source

lastIndex

test()

lastMatch

### JavaScript Event Handlers

onabort

onmous­edown

onblur

onmous­emove

onchange

onmouseout

onclick

onmous­eover

ondblclick

onmouseup

ondragdrop

onmove

onerror

onreset

onfocus

onresize

onkeydown

onselect

onkeypress

onsubmit

onkeyup

onunload

onload

### JavaScript Arrays

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><p>concat()</p></td><td><p>slice()</p></td></tr><tr class="even"><td><p>join()</p></td><td><p>sort()</p></td></tr><tr class="odd"><td><p>length</p></td><td><p>splice()</p></td></tr><tr class="even"><td><p>pop()</p></td><td><p>toSource()</p></td></tr><tr class="odd"><td><p>push()</p></td><td><p>toString()</p></td></tr><tr class="even"><td><p>reverse()</p></td><td><p>unshift()</p></td></tr><tr class="odd"><td><p>shift()</p></td><td><p>valueOf()</p></td></tr></tbody></table>

### JavaScript Numbers and Maths

abs()

min()

acos()

NEGATI­VE_­INF­INITY

asin()

PI

atan()

POSITI­VE_­INF­INITY

atan2()

pow()

ceil()

random()

cos()

round()

E

sin()

exp()

sqrt()

floor()

SQRT1_2

LN10

SQRT2

LN2

tan()

log()

toSource()

LOG10E

toExpo­nen­tial()

LOG2E

toFixed()

max()

toPrec­ision()

MAX_VALUE

toString()

MIN_VALUE

valueOf()

NaN

### JavaScript Booleans

toSource()

valueOf()

toString()

### JavaScript Dates

<table><colgroup><col style="width: 50%" /><col style="width: 50%" /></colgroup><tbody><tr class="odd"><td><p>Date()</p></td><td><p>setMonth()</p></td></tr><tr class="even"><td><p>getDate()</p></td><td><p>setFul­lYear()</p></td></tr><tr class="odd"><td><p>getDay()</p></td><td><p>setHours()</p></td></tr><tr class="even"><td><p>getMonth</p></td><td><p>setMin­utes()</p></td></tr><tr class="odd"><td><p>getFul­lYear</p></td><td><p>setSec­onds()</p></td></tr><tr class="even"><td><p>getYear</p></td><td><p>setMil­lis­eco­nds()</p></td></tr><tr class="odd"><td><p>getHours</p></td><td><p>setTime()</p></td></tr><tr class="even"><td><p>getMinutes</p></td><td><p>setUTC­Date()</p></td></tr><tr class="odd"><td><p>getSeconds</p></td><td><p>setUTC­Day()</p></td></tr><tr class="even"><td><p>getMil­lis­econds</p></td><td><p>setUTC­Month()</p></td></tr><tr class="odd"><td><p>getTime</p></td><td><p>setUTC­Ful­lYear()</p></td></tr><tr class="even"><td><p>getTim­ezo­neO­ffset()</p></td><td><p>setUTC­Hours()</p></td></tr><tr class="odd"><td><p>getUTC­Date()</p></td><td><p>setUTC­Min­utes()</p></td></tr><tr class="even"><td><p>getUTC­Day()</p></td><td><p>setUTC­Sec­onds()</p></td></tr><tr class="odd"><td><p>getUTC­Month()</p></td><td><p>setUTC­Mil­lis­eco­nds()</p></td></tr><tr class="even"><td><p>getUTC­Ful­lYear()</p></td><td><p>toSource()</p></td></tr><tr class="odd"><td><p>getUTC­Hours()</p></td><td><p>toString()</p></td></tr><tr class="even"><td><p>getUTC­Min­utes()</p></td><td><p>toGMTS­tring()</p></td></tr><tr class="odd"><td><p>getUTC­Sec­onds()</p></td><td><p>toUTCS­tring()</p></td></tr><tr class="even"><td><p>getUTC­Mil­lis­eco­nds()</p></td><td><p>toLoca­leS­tring()</p></td></tr><tr class="odd"><td><p>parse()</p></td><td><p>UTC()</p></td></tr><tr class="even"><td><p>setDate()</p></td><td><p>valueOf()</p></td></tr></tbody></table>

### JavaScript Strings

charAt()

slice()

charCo­deAt()

split() x

concat()

substr()

fromCh­arC­ode()

substr­ing()

indexOf()

toLowe­rCase()

lastIn­dexOf()

toUppe­rCase()

length

toLoca­leL­owe­rCase()

locale­Com­pare()

toLoca­leU­ppe­rCase()

match() x

toSource()

replace() x

valueOf()

search() x

String object methods with an x support regular expres­sions.

### JavaScript Functions

decode­URI()

isNaN()

decode­URI­Com­pon­ent()

Number()

encode­URI()

parseF­loat()

encode­URI­Com­pon­ent()

parseInt()

escape()

String()

eval()

unescape()

isFinite()
