const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Compile and minify SCSS
function styles() {
    return gulp.src('./src/styles/**/*.scss') // Use '**/*.scss' to include subdirectories
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

// Optimize images
function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Watch for changes in SCSS and images
function watchFiles() {
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./src/images/**/*', images); // Watch for image changes
}

// Default task runs both styles and images
exports.default = gulp.parallel(styles, images);
exports.watch = watchFiles;
exports.styles = styles;
exports.images = images;
