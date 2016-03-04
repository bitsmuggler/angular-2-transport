var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del('dist/**/*');
});

gulp.task('compile-ts', function() {    
    gulp.src(['app/**/*.ts'])
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('app'));
});

gulp.task('server:watch', ['compile-ts'], function() {  
    gulp.watch("**/*.ts", { cwd : './', read:false, debounceDelay: 50 }, ['compile-ts']);    
});

gulp.task('server:browsersync', function () {  
    browserSync({
        server: {
            baseDir: './'
        },
        files: [
            "**/*.js",
            "**/*.css",
            "**/*.html"
        ],
        watchOptions: {
            debounceDelay: 100,
            cwd: './'
        },
        logFileChanges: false
    });
});

gulp.task('build', ['compile-ts']);
gulp.task('default', ['build']);
gulp.task('server', ['server:watch', 'server:browsersync']);
