const gulp = require('gulp');

gulp.task('copy-component-javascript', function () {
  return gulp.src([
    'app/components/**/*.js'
  ])
  .pipe(gulp.dest('public/javascripts/components/'));
});
