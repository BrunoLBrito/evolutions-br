var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

// task para o sass
gulp.task('sass', function(){
    return gulp.src('sass/**/*.sass')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

// task para o watch
gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('sass/**/*.sass', ['sass']);
});
// task padrao do gulp
gulp.task('default', ['sass', 'watch']);