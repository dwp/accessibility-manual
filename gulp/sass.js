const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {

  return gulp.src('app/assets/sass/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('public/stylesheets'));

});
