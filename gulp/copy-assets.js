const gulp = require('gulp')

gulp.task('copy-assets', () => {
  return gulp.src([
    '!app/assets/sass{,/**/*}',
    'app/assets/images{,/**/*}',
    'app/assets/videos{,/**/*}',
    'app/assets/docs{,/**/*}'
  ])
    .pipe(gulp.dest('public/'))
})
