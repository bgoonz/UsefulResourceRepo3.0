"use strict";

const fftSize = 256,
  osc = new gsuiOscilloscope(),
  ctx = new AudioContext(),
  analyserNode = ctx.createAnalyser(),
  analyserData = new Uint8Array(fftSize / 2);

analyserNode.fftSize = fftSize;
document.querySelector("#wrapper").append(osc.rootElement);
osc.setResolution(512, 260);
// osc.setResolution( 200, 100 ); // <- low quality
osc.setPinch(1);

navigator.mediaDevices
  .getUserMedia({
    audio: { mandatory: { echoCancellation: false } },
  })
  .then((stream) => {
    ctx.createMediaStreamSource(stream).connect(analyserNode);
    document.querySelector("img").remove();
    requestAnimationFrame(frame);
  });

function frame() {
  analyserNode.getByteTimeDomainData(analyserData);
  osc.draw(analyserData);
  requestAnimationFrame(frame);
}

// We choose to overload the draw with these two functions,
// to have some better graphic effects.
osc.drawBegin((ctx, max, w, h) => {
  ctx.globalCompositeOperation = "source-in";
  ctx.fillStyle =
    "rgba(" +
    Math.round(255 - max * 128) +
    "," +
    Math.round(max * 64) +
    "," +
    Math.round(max * 255) +
    "," +
    (0.95 - 0.25 * (1 - Math.cos((max * Math.PI) / 4))) +
    ")";
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = "source-over";
});
osc.drawEnd((ctx, max) => {
  ctx.lineJoin = "round";
  ctx.lineWidth = 1.2 + 3 * max;
  ctx.strokeStyle = "#fff";
});
