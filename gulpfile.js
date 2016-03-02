var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');
var inject = require('gulp-inject');
var gnf = require('gulp-npm-files');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var connect = require('gulp-connect');

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});


// TypeScript compile
gulp.task('compile', ['clean'], function () {  
  return gulp
    .src(['app/**/*.ts'])
    .pipe(typescript(tscConfig.compilerOptions))
    .pipe(gulp.dest('app'))
    .pipe(connect.reload());
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

gulp.task('server:watch', function () {
    watch('**/*.ts', batch(function (events, done) {
        console.log('Typescript file was changed. Start transpiler...');
        gulp.start('compile', done);
    }));
});

gulp.task('server:serve', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('build', ['compile']);
gulp.task('default', ['build']);
gulp.task('server', ['server:watch', 'server:serve']);
