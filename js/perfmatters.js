// Measuring the Critical Rendering Path with Navigation Timing
// https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
function logCRP() {
    var t = window.performance.timing,
        dcl = t.domContentLoadedEventStart - t.domLoading,
        complete = t.domComplete - t.domLoading;
    var stats = document.getElementById("crp-stats");
    stats.textContent = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}

window.addEventListener("load", function(event) {
    logCRP();
});

// Include gulp
var gulp = require('gulp');

// Include gulp
var gulp = require('gulp');
// Include plugins
var concat = require('gulp-concat');
// Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build/js'));
});
// Default Task
gulp.task('default', ['scripts']);