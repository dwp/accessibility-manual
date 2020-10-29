const gulp = require('gulp')

gulp.task('copy-html5-shiv', () => {
  return gulp.src([
    'app/assets/javascripts/vendor/html5shiv.js'
  ])
    .pipe(gulp.dest('public/javascripts/vendor'))
})
