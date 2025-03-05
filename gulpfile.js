const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

// Compile and minify SCSS
function styles() {
    return gulp.src('./src/styles/**/*.scss') // Use '**/*.scss' to include subdirectories
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

// Optimize images
function images() {
    return gulp.src('./src/images/**/*', { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Watch for changes in SCSS and images
function watchFiles() {
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./src/images/**/*', images); // Watch for image changes
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}

// Default task runs both styles and images
exports.default = gulp.parallel(styles, images, scripts, watchFiles);
exports.watch = watchFiles;
exports.styles = styles;
exports.images = images;

