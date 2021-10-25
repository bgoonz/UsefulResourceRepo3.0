function getZoneTime(date, utc_offset) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var ms =
    date.getTime() +
    (date.getTimezoneOffset() + utc_offset.min + utc_offset.hr * 60) * 60000;
  var d = new Date(ms);
  var t = { time: 0, date: 0 };
  t.time = d.getHours() + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
  t.date =
    days[d.getDay()] +
    ", " +
    months[d.getMonth()] +
    " " +
    d.getDate() +
    ", " +
    d.getFullYear();
  return t;
}
function getZoneTime2(utc_offset, dst_offset, dst_start, dst_end) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var d1 = new Date();
  var ms =
    d1.getTime() +
    (d1.getTimezoneOffset() + utc_offset.min + utc_offset.hr * 60) * 60000;
  var d2 = new Date(ms);
  var d3 = d2;
  var t = { time: 0, date: 0, dst: false };
  if (d2 >= dst_start && d2 < dst_end) {
    t.dst = true;
    ms =
      d1.getTime() +
      (d1.getTimezoneOffset() + dst_offset.min + dst_offset.hr * 60) * 60000;
    d3 = new Date(ms);
  }
  t.time =
    pad2(d3.getHours()) +
    ":" +
    pad(d3.getMinutes()) +
    ":" +
    pad(d3.getSeconds());
  t.date =
    days[d3.getDay()] +
    ", " +
    months[d3.getMonth()] +
    " " +
    d3.getDate() +
    ", " +
    d3.getFullYear();
  return t;
}
function pad(x) {
  return (x < 10 ? "0" : "") + x;
}
function pad2(x) {
  return (x < 10 ? "\u00A0\u00A0" : "") + x;
}
