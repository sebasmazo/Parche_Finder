const {src,dest} = require('gulp');
const rename = require('gulp-rename');
const sass =  require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean');
function css() {
  // place code for your default task here
  return src("./sass/**/*.scss")
  .pipe(sass())
  .pipe(cleanCSS())
  .pipe(rename('main.min.css'))
  .pipe(dest("./css"))
}
exports.css = css;
exports.default = ()=>{};

