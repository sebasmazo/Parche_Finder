const {src,dest, series} = require('gulp');
const rename = require('gulp-rename');
const sass =  require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

sass.compiler = require('dart-sass');

function js() { //Usar al final
  return src(['./js/**.js'])
  .pipe(concat("main.min.js"))
  .pipe(uglify())
  .pipe(dest('./jsmin'))
  
}
function css() {
  // place code for your default task here
  return src("./sass/**/*.scss")
  .pipe(sass())
  .pipe(cleanCSS())
  .pipe(rename('main.min.css'))
  .pipe(dest("./css"))
}
exports.js = js;
exports.css = css;
exports.default = ()=>{};
exports.produccion = series(js,css);

