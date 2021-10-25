function best_image_fit(width, height, maxWidth, maxHeight) {
  if (width >= maxWidth) {
    var scaleW = width / maxWidth;
    var scaleH = height / maxHeight;
    if (scaleW > scaleH) {
      return {
        width: maxWidth,
        height: height / scaleW,
        offsetX: 0,
        offsetY: (maxHeight - height / scaleW) / 2,
        scale: scaleW,
      };
    } else {
      return {
        width: width / scaleH,
        height: height / scaleH,
        offsetX: (maxWidth - width / scaleH) / 2,
        offsetY: (maxHeight - height / scaleH) / 2,
        scale: scaleH,
      };
    }
  } else {
    if (height > maxHeight) {
      var scale = height / maxHeight;
      return {
        width: width / scale,
        height: height / scale,
        offsetX: (maxWidth - width / scale) / 2,
        offsetY: 0,
        scale: scale,
      };
    } else {
      return {
        width: width,
        height: height,
        offsetX: (maxWidth - width) / 2,
        offsetY: (maxHeight - height) / 2,
        scale: 1,
      };
    }
  }
}
