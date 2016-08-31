var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');

//Style task
gulp.task('styles', function() {
  console.log('Starting Styles Task');
  return gulp.src('app/src/css/**/*.css')
    .pipe(concat('styles.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('app/dist/css'));
});
