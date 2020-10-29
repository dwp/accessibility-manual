const gulp = require('gulp')

gulp.task('watch-sass', function (done) {
  return gulp.watch([
    'app/assets/sass/**/*.scss',
    'app/components/**/*.scss'
  ], gulp.task('sass'), done())
})

gulp.task('watch-assets', function (done) {
  return gulp.watch([
    'app/assets/images/**',
    'app/assets/videos/**',
    'app/components/**',
    'app/assets/javascripts/**'],
  { cwd: './' },
  gulp.series('copy-assets', 'compile-app-js', 'copy-html5-shiv'), done())
})
