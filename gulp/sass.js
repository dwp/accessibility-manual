const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))

gulp.task('sass', function () {
  return gulp.src('app/assets/sass/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('public/stylesheets'))
})
