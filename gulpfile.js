var gulp = require('gulp');
var del = require('del');
var typescript = require('gulp-typescript');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var tsProject = typescript.createProject('tsconfig.json');

gulp.task('transpile:ts', function() {
    var tsResult = tsProject.src() // instead of gulp.src(...)
        .pipe(typescript(tsProject))
        .pipe(gulp.dest('app'));
});

gulp.task('server:watch', ['transpile:ts'], function() {
    console.log('starting server:watch');
    gulp.watch(["app/**/*.ts"], { cwd : './', read:false, debounceDelay: 50 }, ['transpile:ts']);
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

gulp.task('build', ['transpile:ts']);
gulp.task('default', ['build']);
gulp.task('serve', ['server:watch', 'server:browsersync']);
gulp.task('server', ['serve']);

