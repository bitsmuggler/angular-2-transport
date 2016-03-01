var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');
var inject = require('gulp-inject');
var gnf = require('gulp-npm-files');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});


// TypeScript compile
gulp.task('compile', ['copy:assets'], function () {  
  return gulp
    .src(['app/**/*.ts'])
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('dist/app'));
});


// Copy dependencies to build/node_modules/ by 
// value in './path/to/package.json' file 
gulp.task('copy:libs', function() {
  gulp
    .src(gnf(null, 'package.json'), {base:'./'})
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('copy:assets', ['copy:libs'], function() {
  return gulp.src(['config.js', 'app/**/*', 'index.html', '!app/**/*.ts'], { base : './' })
             .pipe(gulp.dest('dist'))
});

/*gulp.task('inject:index', function () {
   
  var target = gulp.src('./index.html');
  var sources = gulp.src(['./dist/lib/*.*'], {read: false});
 
  return target.pipe(inject(sources))
    .pipe(gulp.dest('./dist'));
});*/


gulp.task('build', ['clean', 'compile']);
gulp.task('default', ['build']);