const gulp = require('gulp')
const webpack = require('webpack-stream')
const rename = require('gulp-rename')

gulp.task('compile-app-js', function () {
  return gulp.src([
    'app/assets/javascripts/application.js'
  ])
    .pipe(webpack(
      {
        mode: 'production',
        stats: 'errors-only'
      }
    ))
    .pipe(rename('application.js'))
    .pipe(gulp.dest('public/javascripts/'))
})
