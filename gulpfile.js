var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/js/components/**/*.js", ['build']);
    gulp.watch("app/dist/*").on('change', browserSync.reload);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('build', function () {
    return browserify({
    			entries: ['app/js/components/Home/Overme.js'],
    			debug: true,
    			extensions: ['.js']
    		})
    		.transform(babelify, {presets: ['react','es2015']})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('app/dist'));
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['build','serve']);