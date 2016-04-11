'use strict'
const gulp      = require('gulp'),
    sass        = require('gulp-ruby-sass'),
    compass     = require('gulp-compass'),
    connect     = require('gulp-connect'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    livereload  = require('gulp-livereload');

let htmlSources = ['public/*.html', 'app/**/*.html', 'app/*.html']

let env = process.env.NODE_ENV || 'development';

let sassStyle = env === 'development' ? 'expanded' : 'compressed'
    
gulp.task('connect', () => {
    connect.server({
        root: 'public',
        port: 8080,
        livereload: true
    })  
})

gulp.task('browserify', () => {
    return browserify('./app/app.js', './scripts/codepens.js')
        .bundle()
        .pipe(source('main.js'))
        .on('error', onError)
        .pipe(gulp.dest('./public/js/'))
        .pipe(connect.reload());
})

gulp.task('watch', () => {
    gulp.watch(['app/**/*.js', 'app/*.js'], ['browserify'])
    gulp.watch('app/**/*.scss', ['compass'])
    gulp.watch(htmlSources, ['html'])
})

gulp.task('compass', () => {
  gulp.src('app/styles/style.scss')
    .pipe(compass({
      sass: 'app/styles',
      image: 'public/images',
      style: sassStyle
    }))
    .on('error', onError)
    .pipe(gulp.dest('public/css'))
    .pipe(connect.reload())
});

gulp.task('html', () =>  {
    gulp.src(htmlSources)
    .pipe(gulp.dest('public'))
    .pipe(connect.reload())
})

gulp.task('images', () => {
    gulp.src('assets/svg/social-icons.svg')
    .pipe(gulp.dest('public'))
    .pipe(connect.reload())
})

gulp.task('default', ['images', 'browserify', 'compass', 'connect', 'watch'])

function onError() {
    console.log('something went wrong')
}