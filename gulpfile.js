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
    del         = require('del'),
    uglify      = require('gulp-uglify'),
    streamify   = require('gulp-streamify'),
    prefixer    = require('gulp-autoprefixer')
 
const htmlSources = ['public/*.html', 'app/**/*.html', 'app/*.html']

let env = process.env.NODE_ENV || 'development';

let sassStyle = env === 'development' ? 'expanded' : 'compressed'
    
gulp.task('connect', () => {
    let port = 8080;
    connect.server({
        root: 'public',
        port: port,
        livereload: true
    })
    console.log(`serving page on ${port}`) 
})

gulp.task('browserify', () => {
    return browserify('./app/app.js', './scripts/ui-bootstrap-tpls-1.3.2.min.js')
        .bundle()
        .pipe(source('main.js'))
        .on('error', onError)
        // mangle: false preserves variable names – necessary in this case
        .pipe(streamify(uglify({mangle: false})))
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
    .pipe(prefixer())
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
    'public/js/main.js',
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