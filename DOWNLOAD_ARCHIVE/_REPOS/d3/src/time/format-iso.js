var d3_time_formatIso = require("./format-utc")("%Y-%m-%dT%H:%M:%S.%LZ");

var D3TimeFormatIso = Date.prototype.toISOString ? d3_time_formatIsoNative : d3_time_formatIso;

function d3_time_formatIsoNative(date) {
  return date.toISOString();
}

d3_time_formatIsoNative.parse = function(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
};

d3_time_formatIsoNative.toString = d3_time_formatIso.toString;

module.exports = D3TimeFormatIso;
