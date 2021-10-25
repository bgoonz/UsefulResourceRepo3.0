(() => {
  const userEntries = document.querySelectorAll(".user-entry"),
    hh = document.querySelector("#hh"),
    mm = document.querySelector("#mm"),
    ss = document.querySelector("#ss"),
    ms = document.querySelector("#ms"),
    row1 = document.querySelector("#d-row-1"),
    row2 = document.querySelector("#d-row-2"),
    stopBtn = document.querySelector("#stop"),
    resumeBtn = document.querySelector("#resume");

  let millis = 0,
    interval = null,
    millisElapsed = 0;
  let canModalOpenItself = true;

  function setTime() {
    millis += userEntries[0].value * 3600000;
    millis += userEntries[1].value * 60000;
    millis += userEntries[2].value * 1000;

    let parsed = parse(millis);
    displayTime(parsed[0], parsed[1], parsed[2]);
  }

  function displayTime(hours, minutes, seconds) {
    hh.innerHTML = hours > 9 ? hours : hours == 0 ? "00" : "0" + hours;
    mm.innerHTML = minutes > 9 ? minutes : minutes == 0 ? "00" : "0" + minutes;
    ss.innerHTML = seconds > 9 ? seconds : seconds == 0 ? "00" : "0" + seconds;
  }

  function parse(milliseconds) {
    let hours = 0,
      minutes = 0,
      seconds = 0;

    for (let x = 0; x < milliseconds / 1000; x++) {
      if (seconds < 59) {
        seconds++;
      } else {
        seconds = 0;
        if (minutes < 59) {
          minutes++;
        } else {
          minutes = 0;
          if (hours < 23) {
            hours++;
            continue;
          }
          break;
        }
      }
    }

    return [hours, minutes, seconds];
  }

  function init() {
    interval = setInterval(() => {
      if (millis == 0) {
        over();
        return;
      }

      if (millisElapsed == 0) {
        millisElapsed = 100;
        millis -= 1000;

        let parsed = parse(millis);
        displayTime(parsed[0], parsed[1], parsed[2]);
      } else {
        millisElapsed -= 10;
        ms.innerHTML = millisElapsed == 0 ? "00" : millisElapsed;
      }
    }, 100);
  }

  function stop() {
    clearInterval(interval);
  }

  function resume() {
    init();
  }

  function over() {
    stop();
    row1.setAttribute("class", "row justify-content-center mt-3 text-center");
    row2.setAttribute(
      "class",
      "row justify-content-center mt-3 text-center d-none"
    );
    stopBtn.setAttribute("class", "action-btn");
    resumeBtn.setAttribute("class", "action-btn d-none");
    canModalOpenItself = true;
  }

  function reset() {
    over();
    displayTime(0, 0, 0);
    millis = 0;
    ms.innerHTML = (millisElapsed = 0) == 0 ? "00" : millisElapsed;
  }

  function showModal() {
    $("#static-backdrop").modal({ show: canModalOpenItself });
  }

  document.querySelector("#save-btn").onclick = () => {
    setTime();
  };

  document.querySelector("#start").onclick = () => {
    row1.setAttribute(
      "class",
      "row justify-content-center mt-3 text-center d-none"
    );
    row2.setAttribute("class", "row justify-content-center mt-3 text-center");
    canModalOpenItself = false;
    init();
  };

  stopBtn.onclick = () => {
    resumeBtn.setAttribute("class", "action-btn");
    stopBtn.setAttribute("class", "action-btn d-none");
    stop();
  };

  resumeBtn.onclick = () => {
    resumeBtn.setAttribute("class", "action-btn d-none");
    stopBtn.setAttribute("class", "action-btn");
    resume();
  };

  document.querySelector("#reset").onclick = () => {
    row1.setAttribute("class", "row justify-content-center mt-3 text-center");
    row2.setAttribute(
      "class",
      "row justify-content-center mt-3 text-center d-none"
    );
    reset();
  };

  document.querySelector("#clock").onclick = () => {
    showModal();
  };
})();
