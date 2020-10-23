const gulp = require('gulp');

gulp.task('watch-sass', () => {
  return gulp.watch([
    'app/assets/sass/**/*.scss',
    'app/components/**/*.scss'
  ], gulp.task('sass'));
});

gulp.task('watch-assets', () => {
  return gulp.watch([
    'app/assets/images/**',
    'app/assets/videos/**',
    'app/components/**',
    'app/assets/javascripts/**'], {cwd: './'}, gulp.series('copy-assets', 'copy-component-javascript'));
});