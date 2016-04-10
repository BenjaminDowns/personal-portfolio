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

gulp.task('browserify', () => {
    return browserify('./app/app.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./public/js/'));
})

gulp.task('watch', function() {
    gulp.watch('/app/**/*.js', ['browserify'])
    gulp.watch('sass/style.sass', ['sass'])
})

gulp.task('sass', function() {
    return sass('sass/style.scss')
        .pipe(gulp.dest('/public/css'))
})

gulp.task('default', ['connect', 'watch'])