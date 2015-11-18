'use strict'

var gulp = require('gulp')
var mocha = require('gulp-mocha')
var plumber = require('gulp-plumber')
var runSequence = require('run-sequence')

gulp.task('mocha', function () {
  return gulp.src('./test/**/*.js')
    .pipe(plumber())
    .pipe(mocha())
})

gulp.task('mocha:integration', function () {
  return gulp.src('./test/integration/**/*.js')
    .pipe(plumber())
    .pipe(mocha())
})

gulp.task('mocha:unit', function () {
  return gulp.src('./test/unit/**/*.js')
    .pipe(plumber())
    .pipe(mocha())
})

gulp.task('test', function (cb) {
  runSequence('mocha', cb)
})

gulp.task('watch', function () {
  gulp.watch(['./**/*.js', '!./node_modules/**/*'], ['test'])
})

gulp.task('default', ['test', 'watch'])
