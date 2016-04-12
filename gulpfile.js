'use strict'
const gulp      = require('gulp'),
    sass        = require('gulp-ruby-sass'),
    compass     = require('gulp-compass'),
    connect     = require('gulp-connect'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    livereload  = require('gulp-livereload'),
    imagemin    = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),
    del         = require('del')

const htmlSources = ['public/*.html', 'app/**/*.html', 'app/*.html']

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
    return browserify('./app/app.js', './scripts/templating.js')
        .bundle()
        .pipe(source('main.js'))
        .on('error', onError)
        .pipe(gulp.dest('./public/js/'))
        .pipe(connect.reload())
})

gulp.task('watch', () => {
    gulp.watch(['app/**/*.js', 'app/*.js'], ['cleanJS', 'browserify'])
    gulp.watch('app/**/*.scss', ['compass'])
    gulp.watch(htmlSources, ['html'])
})

gulp.task('compass', () => {
  gulp.src('app/styles/style.scss')
    .pipe(compass({
      css: 'public/css',
      sass: 'app/styles',
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
	return gulp.src('app/assets/img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('public/assets/images'));
});

gulp.task('cleanJS', () => {
  return del([
    'public/js/*.js',
  ]);
});

gulp.task('cleanImages', () => {
    return del([
        'public/assets/images/*'
    ]) 
})

gulp.task('default', ['cleanImages', 'images', 'cleanJS', 'browserify', 'compass', 'html', 'connect', 'watch'])

function onError() {
    console.log('something went wrong')
}