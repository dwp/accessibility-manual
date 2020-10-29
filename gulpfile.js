const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp', { recurse: true })

gulp.task('generate-assets', gulp.series(
  'clean',
  gulp.parallel(
    'copy-assets',
    'compile-app-js',
    'sass'
  ),
  'copy-html5-shiv'
))

gulp.task('watch', gulp.parallel(
  'watch-sass',
  'watch-assets'
))

gulp.task('default', gulp.series(
  'generate-assets',
  gulp.parallel(
    'watch',
    'server'
  )
))
