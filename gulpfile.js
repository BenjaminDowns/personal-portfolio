const gulp      = require('gulp'),
    sass        = require('gulp-ruby-sass'),
    connect     = require('gulp-connect'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream');
    
gulp.task('connect', () => {
    connect.server({
        root: 'public',
        port: 8080
    })  
})
        