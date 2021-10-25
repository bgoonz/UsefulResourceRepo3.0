function textToUtf8(text) {
  var bytes = [];

  var encoded = utf8.encode(text);
  for (var i = 0; i < encoded.length; i++) {
    var byte = encoded[i].charCodeAt(0);
    bytes.push(byte);
  }

  return bytes;
}
