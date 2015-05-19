var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    del  = require('del');

// Clean dist dir
gulp.task('clean', function(cb){
  del([
    'dist',
  ], cb);
});

// Build html
gulp.task('default', ['clean'], function() {
  return gulp.src('src/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('dist/'));
});