const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('server', () => {
  nodemon({
    script: 'server.js',
    ext: 'js',
  }).on('quit', () => {
    process.exit(0);
  });
});
