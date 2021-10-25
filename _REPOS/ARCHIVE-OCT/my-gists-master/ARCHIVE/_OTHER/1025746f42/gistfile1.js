var instanse = false;
var state;
var mes;
var file;

function Chat() {
  this.update = updateChat;
  this.send = sendChat;
  this.getState = getStateOfChat;
}

//gets the state of the chat
function getStateOfChat() {
  if (!instanse) {
    instanse = true;
    $.ajax({
      type: "POST",
      url: "chat/process.php",
      data: {
        function: "getState",
        file: file,
      },
      dataType: "json",
      success: function (data) {
        state = data.state;
      },
      timeout: 1000,
      complete: function () {
        instanse = false;
      },
    });
  }
}

//Updates the chat
function updateChat() {
  if (!instanse) {
    instanse = true;
    $.ajax({
      type: "POST",
      url: "chat/process.php",
      data: {
        function: "update",
        state: state,
        file: file,
      },
      dataType: "json",
      success: function (data) {
        if (data.text) {
          for (var i = 0; i < data.text.length; i++) {
            $("#chat-area").append($("<p>" + data.text[i] + "</p>"));
          }
        }
        document.getElementById("chat-area").scrollTop =
          document.getElementById("chat-area").scrollHeight;
        state = data.state;
      },
      timeout: 1000,
      complete: function () {
        instanse = false;
      },
    });
  }
}

//send the message
function sendChat(message, nickname) {
  $.ajax({
    type: "POST",
    url: "chat/process.php",
    data: {
      function: "send",
      message: message,
      nickname: nickname,
      file: file,
    },
    dataType: "json",
  });
}
