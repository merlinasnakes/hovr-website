var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var gulp = require('gulp');
var gutil = require('gulp-util');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var fileinclude = require('gulp-file-include');

gulp.task('sass', () => {
  return gulp.src('scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    //.pipe(autoprefixer()) // desHabilitar para desarrollo
    .pipe(concat('main.min.css'))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('_dist/css'));
});

gulp.task('minify', function() {
  return gulp.src('html/index.html')
    .pipe(fileinclude())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_dist'))
});


var watchLogger = (event) => {
  gutil.log('[' + event.type + '] ' + event.path);
};

gulp.task('watch', ['build'], () => {

  var wSASS = gulp.watch('scss/**/*.scss', ['sass']);
  wSASS.on('change add unlink', watchLogger);

  var wSASS = gulp.watch('html/**/*.html', ['minify']);
  wSASS.on('change add unlink', watchLogger);

});


gulp.task('build', (cb) => {
  runSequence(['sass','minify'], cb);
});


gulp.task('default', ['watch']);