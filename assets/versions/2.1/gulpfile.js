var gulp       = require('gulp');
var concat     = require('gulp-concat');
var sass       = require('gulp-ruby-sass');
var traceur    = require('gulp-traceur');
var ngAnnotate = require('gulp-ng-annotate');
var uglify     = require('gulp-uglifyjs');
var connect    = require('gulp-connect');
var watch      = require('gulp-watch');

gulp.task('serve', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('sass', function() {
  gulp.src('styles/main.scss')
    .pipe(sass({'sourcemap=none':true}))
    .pipe(gulp.dest('.'))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src('scripts/*.js')
    .pipe(concat('app.min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('.'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('styles/**/*.scss', ['sass']);
  gulp.watch('scripts/*.js', ['js']);
  gulp.watch('index.html')
    .on('change', function(file) {
      gulp.src(file.path)
        .pipe(connect.reload());
    })
});

gulp.task('default', ['sass', 'js', 'serve', 'watch']);
