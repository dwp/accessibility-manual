const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('clean', () => {
  return gulp.src('public', { read: false, allowEmpty: true })
  .pipe(clean());
});
