function getCurrentDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const day = date.getDate();
  const month = date.getMonth();
  // const year = date.getFullYear();

  // const out =
  //  `
  //     ${hours}:${minutes} ${hours >= 12 ? "PM" : "AM"} |
  //     ${day > 9 ? day : 0+""+day}/
  //     ${month > 9 ? month : 0+""+month}/
  //     ${year}
  // `

  const out = `
    ${hours < 9 ? "0" + hours : hours}:${minutes < 9 ? "0" + minutes : minutes}
    ${hours >= 12 ? "PM" : "AM"} | 
    ${months[month]} ${day}
    `;

  return out;
}

function scrollIntoView() {
  let q = document.querySelectorAll(".msg-footer");
  q[q.length - 1].scrollIntoView();
}

function formatText(text) {
  let out = "";

  for (let i = 0; i < text.length; i++) {
    if ((i + 1) % 30 == 0) out += text[i] + "<br/>";
    else out += text[i];
  }

  return out;
}

function sendMessageFromSender(msg) {
  let html = `<div class="media m-4 mb-5 ml-auto" style="width: max-content;">
        <div class="media-body">
            <h6 class="text-right">You</h6>
            <div class="text-justify text-white bg-dark rounded p-3 mb-2 ml-auto" style="width: max-content;">
                <span>${msg}</span>
            </div>
            <span class="msg-footer ml-2 text-muted">${getCurrentDate()}</span>
        </div>
        <img src="https://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/48/Preppy-icon.png" class="ml-2" alt="John img">
    </div>
    `;

  document.querySelector("#body").innerHTML += html;

  scrollIntoView();
}

function sendMessageFromReceiver(msg) {
  let html = `
    <div class="media m-4 mb-5" style="width: max-content;">
        <img src="https://icons.iconarchive.com/icons/hopstarter/sleek-xp-basic/48/Office-Girl-icon.png" class="mr-2" alt="Elen icon">
        <div class="media-body">
            <h6>Sr Elen</h6>
            <div class="text-justify text-body bg-light rounded p-3 mb-2" style="width: max-content;">
                <span>${msg}</span>
            </div>
            <span class="msg-footer ml-2 text-muted">${getCurrentDate()}</span>
        </div>
    </div>
    `;

  document.querySelector("#body").innerHTML += html;

  scrollIntoView();
}

document.querySelector("#send-button").onclick = () => {
  let elem = document.querySelector("#sender-input");
  let text = formatText(elem.value);
  elem.value = "";

  sendMessageFromSender(text);

  setTimeout(() => {
    sendMessageFromReceiver(text);
  }, 1000);
};

document.querySelector("#sender-input").onkeyup = () => {
  if (event.code === "Enter") document.querySelector("#send-button").onclick();
};
