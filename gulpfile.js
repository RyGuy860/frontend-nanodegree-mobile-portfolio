// Include gulp
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');
var imagemin = require('gulp-imagemin');
var minifyCss = require('gulp-minify-css');


gulp.task('css', function() {
    gulp.src(['./css/style.css'])
        .pipe(concat('app.css'))
        .pipe(cssMin())
        .pipe(gulp.dest('./css'))

});


gulp.task('jpgs', function() {
    return gulp.src('img/*.jpg')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('images'));
});

gulp.task('minify-css', function() {
    return gulp.src('./css/styles/*.css')
        .pipe(concat('new.css'))
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./css'))
})


gulp.task('default', ['css']);