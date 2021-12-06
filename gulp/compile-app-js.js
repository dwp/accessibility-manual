const gulp = require('gulp')
const webpackStream = require('webpack-stream')

gulp.task('compile-app-js', function () {
  return gulp.src([
    'app/assets/javascripts/application.js',
    'node_modules/jquery/dist/jquery.slim.min.js'
  ])
    .pipe(
      webpackStream({
        mode: 'production',
        stats: 'errors-only',
        output: {
          filename: 'application.js',
        },
        externals: {
          jquery: 'jQuery'
        }
      })
    )
    .pipe(gulp.dest('public/javascripts/'))
})
