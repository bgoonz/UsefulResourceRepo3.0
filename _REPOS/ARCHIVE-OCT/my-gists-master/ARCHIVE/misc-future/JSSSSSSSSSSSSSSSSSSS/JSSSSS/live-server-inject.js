if ("WebSocket" in window) {
  (() => {
    function refreshCSS() {
      const sheets = [].slice.call(document.getElementsByTagName("link"));
      const head = document.getElementsByTagName("head")[0];

      for (const elem of sheets) {
        const parent = elem.parentElement || head;
        parent.removeChild(elem);
        const rel = elem.rel;
        if (
          (elem.href && typeof rel != "string") ||
          rel.length == 0 ||
          rel.toLowerCase() == "stylesheet"
        ) {
          const url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, "");
          elem.href = `${
            url + (url.indexOf("?") >= 0 ? "&" : "?")
          }_cacheOverride=${new Date().valueOf()}`;
        }
        parent.appendChild(elem);
      }
    }
    const protocol = window.location.protocol === "http:" ? "ws://" : "wss://";
    const address = `${
      protocol + window.location.host + window.location.pathname
    }/ws`;
    const socket = new WebSocket(address);
    socket.onmessage = (msg) => {
      if (msg.data == "reload") window.location.reload();
      else if (msg.data == "refreshcss") refreshCSS();
    };
    if (
      sessionStorage &&
      !sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer")
    ) {
      console.log("Live reload enabled.");
      sessionStorage.setItem("IsThisFirstTime_Log_From_LiveServer", true);
    }
  })();
} else {
  console.error(
    "Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading."
  );
}
