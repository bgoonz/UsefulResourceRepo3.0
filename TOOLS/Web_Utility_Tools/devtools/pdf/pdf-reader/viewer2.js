function OnOpenURL() {
  var display = document.getElementById("cardOpenURL").style.display;
  if (display == "block")
    document.getElementById("cardOpenURL").style.display = "none";
  else document.getElementById("cardOpenURL").style.display = "block";
}
function OnGetURL() {
  var url = document.getElementById("openurl").value;
  openInNewTab(url);
  /*
  try {
    webViewerOpenFileViaURL(file);
  } catch (reason) {
    PDFViewerApplication.l10n.get('loading_error', null, 'An error occurred while loading the PDF.').then(function (msg) {
      PDFViewerApplication.error(msg, reason);
    });
  }
  */
}
function openInNewTab(url) {
  var win = window.open(url, "_blank");
  win.focus();
}
function webViewerOpenFileViaURL(file) {
  if (file && file.lastIndexOf("file:", 0) === 0) {
    PDFViewerApplication.setTitleUsingUrl(file);
    var xhr = new XMLHttpRequest();

    xhr.onload = function () {
      PDFViewerApplication.open(new Uint8Array(xhr.response));
    };

    xhr.open("GET", file);
    xhr.responseType = "arraybuffer";
    xhr.send();
    return;
  }

  if (file) {
    PDFViewerApplication.open(file);
  }
}
