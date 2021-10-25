var D3Time = require("./time"),
    d3_time_utc = D3Time._utc,
    D3TimeFormat = require("./format");

var D3TimeFormatUtc = function(template) {
  var local = D3TimeFormat(template);

  function format(date) {
    try {
      D3Time._time = d3_time_utc;
      var utc = new D3Time._time();
      utc._ = date;
      return local(utc);
    } finally {
      D3Time._time = Date;
    }
  }

  format.parse = function(string) {
    try {
      D3Time._time = d3_time_utc;
      var date = local.parse(string);
      return date && date._;
    } finally {
      D3Time._time = Date;
    }
  };

  format.toString = local.toString;

  return format;
};

module.exports = D3TimeFormatUtc;
