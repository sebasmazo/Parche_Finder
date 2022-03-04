const {src,dest} = require('gulp');
const rename = require('gulp-rename');
const sass =  require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es');

sass.compiler = require('dart-sass');

function JS() { //Usar al final
  return src(['./js/**.js'])
  .pipe(concat("main.min.js"))
  .pipe(uglify())
  .pipe(dest('./js'))
  
}
function css() {
  // place code for your default task here
  return src("./sass/**/*.scss")
  .pipe(sass())
  .pipe(cleanCSS())
  .pipe(rename('main.min.css'))
  .pipe(dest("./css"))
}
exports.JS = JS;
exports.css = css;
exports.default = ()=>{};

