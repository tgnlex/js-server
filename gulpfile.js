import gulp, {src, dest} from 'gulp';
import gulpif from 'gulp-if';
import * as data from 'gulp-data';
import * as stylus from 'gulp-stylus';
import * as sourcemaps from 'gulp-sourcemaps';
import {config} from './src/config/gulp.js';
import {__style, __css} from './src/config/path.js';
gulp.task('stylus', function() {
  return gulp.src(`${__style}/*/**.styl`)
    .pipe(stylus())
    .pipe(gulp.dest(`${__css}`))
});

gulp.task('style-data', function() {
  gulp.src(`${__style}/components/**/*.styl`)
    .pipe(data(function(file){
      return {
        componentPath: '/' + (file.path.replace(file.base, '').replace(/\/[^\/]*$/, ''))
      };
    }))
    .pipe(stylus())
    .pipe(gulp.dest('./css/build'));
});

gulp.task('default', ['stylus', 'style-data']);
