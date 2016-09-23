var gulp         = require('gulp'),
    connect      = require('gulp-connect'),
    concat       = require('gulp-concat'),
    rename       = require('gulp-rename'),
    wrap         = require('gulp-wrap'),
    sass         = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    ngAnnotate   = require('gulp-ng-annotate'),
    uglify       = require('gulp-uglifyjs'),
    imagemin     = require('gulp-imagemin'),
    watch        = require('gulp-watch');

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('sass', function() {
  return gulp.src('styles/main.scss')
    .pipe(sass({'sourcemap=none':true}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('.'))
    .pipe(minifycss())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src(['bower_components/google-analytics/snippet.js',
            'bower_components/modernizr/modernizr.custom.min.js',
            'bower_components/respimage/respimage.min.js'])
    .pipe(concat('critical.js'))
    .pipe(gulp.dest('.'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));
  gulp.src(['bower_components/**/*.js',
            '!bower_components/angular/**/*.js',
            '!bower_components/modernizr/**/*.js',
            '!bower_components/respimage/**/*.js',
            '!bower_components/picturefill/**/*.js',
            '!bower_components/google-analytics/**/*.js',
            'scripts/app.module.js',
            'scripts/**/*.module.js',
            'scripts/**/*.filter.js',
            'scripts/**/*.service.js',
            'scripts/**/*.controller.js',
            'scripts/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('.'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

gulp.task('images', function() {
  return gulp.src('images/*')
    .pipe(imagemin({ progressive: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('next', function() {
  gulp.src('next/index.html')
    .pipe(gulp.dest('dist/next'))
    .pipe(connect.reload());
  gulp.src('next/styles/main.scss')
    .pipe(sass({ 'sourcemap=none': true }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('next'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/next'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('*.html', ['html']);
  gulp.watch('styles/**/*.scss', ['sass']);
  gulp.watch('scripts/**/*.js', ['js']);
  gulp.watch('images/*', ['images']);
  gulp.watch('next/*', ['next']);
});

gulp.task('default', ['html', 'sass', 'js', 'next', 'connect', 'watch']);
