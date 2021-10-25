// Change Title of Page
const title = document.getElementsByTagName("title")
title[0].textContent = 'Digital Timer'

// Move Timer to Middle of Page
const body = document.getElementsByTagName("body")
body[0].style.height = '36.5208rem'
body[0].style.background = 'radial-gradient(circle, #fff, #ccc)'


// Remove Digits
const digit = document.getElementsByClassName('digit')
digit[0].style.display = 'none'
digit[1].style.display = 'none'
digit[2].style.display = 'none'
digit[3].style.display = 'none'
digit[4].style.display = 'none'

// Add Digits
const digitalTimer = document.createElement("h1")
digitalTimer.textContent = '00 . 000'
digitalTimer.style.fontSize = '3rem'
body[0].prepend(digitalTimer)

//Button Creation
const startButton = document.createElement("button")
startButton.textContent = 'Start'
body[0].appendChild(startButton)

const resetButton = document.createElement("button")
resetButton.textContent = 'Reset'
body[0].appendChild(resetButton)

// Button Classes
const button = document.getElementsByTagName("button")
button[0].className = 'buttonClass'
button[1].className = 'buttonClass'
document.styleSheets[0].insertRule('button:hover { cursor: pointer; }', 0);

// Button ID's
button[0].id = 'toggle'
button[1].id = 'reset'

const buttonClass = document.getElementsByClassName('buttonClass')
// Button Styling
buttonClass[0].style.marginTop = '1.3rem'
buttonClass[0].style.fontSize = '2rem'
buttonClass[1].style.marginTop = '1.3rem'
buttonClass[1].style.fontSize = '1.3rem'

//const stopButton = document.createElement("button")
//stopButton.textContent = 'Stop'

// Move Buttons Underneath Timer
body[0].style.flexDirection = 'column'

// Button Toggler
const toggleBtn = document.getElementById('toggle')
const resetBtn = document.getElementById('reset')

var watch = new Timer(digitalTimer);

toggleBtn.addEventListener('click', function () {
    if (watch.isOn) {
        watch.stop();
        toggleBtn.textContent = 'Start';
    } else {
        watch.start();
        toggleBtn.textContent = 'Stop';
    }
});

resetBtn.addEventListener('click', function () {
    watch.reset();
});

// Timer Function
function Timer(elem) {
    var time = 0;
    var interval;
    var offset;

    function update() {
        if (this.isOn) {
            time += delta();
        }
        var formattedTime = timeFormatter(time);
        console.log(formattedTime);
        elem.textContent = formattedTime;
    }

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function timeFormatter(timeInMilliseconds) {
        var time = new Date(timeInMilliseconds)
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();

        if (seconds.length < 2) {
            seconds = '0' + seconds
        }
        if (seconds == 10) {
            watch.stop()
            return seconds;
        }
        if (milliseconds.length < 2) {
            milliseconds = '0' + milliseconds
        }
        return seconds + '.' + milliseconds;
    }

    this.isOn = false;

    this.start = function () {
        if (!this.isOn) {
            interval = setInterval(update.bind(this), 10);
            offset = Date.now();
            this.isOn = true;
        }
    };

    this.stop = function () {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };

    this.reset = function () {
        if (!this.isOn) {
            time = 0;
            update();
        }
    };
}