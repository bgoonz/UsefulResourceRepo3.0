let iframe = document.createElement("iframe");
iframe.style =
  "font-family: Arial, Helvetica, sans-serif; color: rgb(136, 247, 221); background-color: whitesmoke; border-radius: 25px; position: absolute; font-size: 8px; bottom: 0px!important;left: 0!important; width: 35%; border: 3px solid silver; padding: 0px;  overflow: auto; overflow-y: auto; height: 20%;  resize: both;overflow: auto;z-index: 100;";

iframe.src = "https://code-playground.netlify.app/";
document.body.appendChild(iframe);
