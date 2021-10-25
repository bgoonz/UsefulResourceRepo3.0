var allPads = document.getElementsByClassName("pad"),
  dataList = document.querySelector("#midi-data ul");

for (var i = 0; i < allPads.length; i++) {
  allPads[i].addEventListener("mousedown", function () {
    var newItem = document.createElement("li");
    newItem.appendChild(
      document.createTextNode("[144," + this.dataset.midi + ",64]")
    );
    dataList.appendChild(newItem);
  });
  allPads[i].addEventListener("mouseup", function () {
    var newItem = document.createElement("li");
    newItem.appendChild(
      document.createTextNode("[128," + this.dataset.midi + ",127]")
    );
    dataList.appendChild(newItem);
  });
}
