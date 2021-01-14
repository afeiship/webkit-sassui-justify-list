(function () {
  'use strict';

  var gulp = require('gulp');
  var path = require('path');
  var autoprefixer = require('autoprefixer');
  var includePaths = [path.join(__dirname, '..', '/node_modules/')];
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*'],
  });

  //styles
  gulp.task('styles', function () {
    return gulp
      .src('src/*.scss')
      .pipe($.jswork.pkgHeader())
      .pipe(gulp.dest('dist'))
      .pipe($.sass({ includePaths }))
      .pipe($.postcss([autoprefixer()]))
      .pipe($.rename('style.css'))
      .pipe(gulp.dest('dist'));
  });
})();
