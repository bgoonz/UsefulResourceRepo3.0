const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

function transpileScssToCss() {
  return src("src/scss/style.scss")
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(rename("style.min.css"))
    .pipe(dest("public/assets"));
}

function minifyJS() {
  return src("src/js/script.js")
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(dest("public/assets"));
}

exports.build = series(transpileScssToCss, minifyJS);
exports.watchBuild = () => {
  watch("src/*", series(transpileScssToCss, minifyJS));
};
