// these `xx` parameters are all used, so no "unused parameter" errors should be reported

let f;

f = (xx) => xx;
f = (xx) => () => xx;
f = (xx) => {
  xx;
};
f = (xx, yy = xx) => {
  yy;
};
f = (xx, yy = xx) => {
  var xx;
  xx = yy;
};
f = (xx, yy = xx) => {
  var xx = yy;
};
f = (xx, yy = () => xx) => {
  yy;
};
f = (
  xx,
  yy = () => {
    xx = 3;
  }
) => {
  yy;
};
f = (xx, yy = (zz = xx) => zz) => {
  yy;
};
