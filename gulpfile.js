const {src,dest} = require('gulp')
const sass =  require('gulp-sass')(require('sass'));
function css() {
  // place code for your default task here
  return src("./sass/**/*.scss")
  .pipe(sass())
  .pipe(dest("./css"))
}
exports.css = css;
exports.default = ()=>{};

