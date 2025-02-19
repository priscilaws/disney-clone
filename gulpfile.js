const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // Added error handling
        .pipe(gulp.dest('./dist/css'));
}

// Watch task to automatically recompile SCSS on file changes
function watchFiles() {
    gulp.watch('./src/styles/**/*.scss', styles);
}

exports.default = styles;
exports.watch = watchFiles;
