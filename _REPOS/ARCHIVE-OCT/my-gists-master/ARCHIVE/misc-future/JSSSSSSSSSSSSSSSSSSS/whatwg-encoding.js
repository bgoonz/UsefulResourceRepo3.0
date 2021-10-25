"use strict";
const iconvLite = require("iconv-lite");
const supportedNames = require("./supported-names.json");
const labelsToNames = require("./labels-to-names.json");

const supportedNamesSet = new Set(supportedNames);

// https://encoding.spec.whatwg.org/#concept-encoding-get
exports.labelToName = (label) => {
  label = String(label).trim().toLowerCase();

  return labelsToNames[label] || null;
};

// https://encoding.spec.whatwg.org/#decode
exports.decode = (buffer, fallbackEncodingName) => {
  let encoding = fallbackEncodingName;
  if (!exports.isSupported(encoding)) {
    throw new RangeError(`"${encoding}" is not a supported encoding name`);
  }

  const bomEncoding = exports.getBOMEncoding(buffer);
  if (bomEncoding !== null) {
    encoding = bomEncoding;
  }

  // iconv-lite will strip BOMs for us, so no need to do the stuff the spec does

  return iconvLite.decode(buffer, encoding);
};

// https://github.com/whatwg/html/issues/1910#issuecomment-254017369
exports.getBOMEncoding = (buffer) => {
  if (buffer[0] === 0xfe && buffer[1] === 0xff) {
    return "UTF-16BE";
  } else if (buffer[0] === 0xff && buffer[1] === 0xfe) {
    return "UTF-16LE";
  } else if (buffer[0] === 0xef && buffer[1] === 0xbb && buffer[2] === 0xbf) {
    return "UTF-8";
  }

  return null;
};

exports.isSupported = (name) => {
  return supportedNamesSet.has(String(name));
};
