(function () {
  var fluidParent = $("#juice > .inside > article"),
    newWidth,
    newHeight;

  function resizeVideo() {
    newWidth = fluidParent.width();
    sublimevideo.resize("the-video", newWidth, newWidth / 1.78125);
  }

  $(window).resize(function () {
    resizeVideo();
  });

  sublimevideo.ready(function () {
    resizeVideo();
  });
})();
