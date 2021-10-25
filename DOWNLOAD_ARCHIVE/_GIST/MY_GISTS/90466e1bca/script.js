var allKeys = document.getElementById("octave").children,
  dataList = document.querySelector("#midi-data ul");

for (var i = 0; i < allKeys.length; i++) {
  allKeys[i].addEventListener("mousedown", function () {
    this.style.backgroundColor = "hsla(340,88%,60%,1)";
    var newItem = document.createElement("li");
    newItem.appendChild(
      document.createTextNode("[144," + this.dataset.note + ",100]")
    );
    dataList.appendChild(newItem);
  });
  allKeys[i].addEventListener("mouseup", function () {
    if (this.nodeName === "B") {
      this.style.backgroundColor = "black";
    } else {
      this.style.backgroundColor = "white";
    }
    var newItem = document.createElement("li");
    newItem.appendChild(
      document.createTextNode("[128," + this.dataset.note + ",64]")
    );
    dataList.appendChild(newItem);
  });
}
