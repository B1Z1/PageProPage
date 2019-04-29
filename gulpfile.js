const gulp = require('gulp');
const babel = require('gulp-babel');
const clean = require('gulp-clean-css');
const gcmq = require('gulp-group-css-media-queries');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const browsersync = require('browser-sync');

function browserSync(done){
    browsersync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    done();
}

function browserReload(done){
    browsersync.reload();
    done();
}

function style(){
    return gulp.src('./src/scss/**/*.{scss,sass}')
                .pipe(sass().on('error', sass.logError))
                .pipe(gcmq())
                .pipe(gulp.dest('./dest/css'));
}

function minify(){
    return gulp.src('./dest/css/style.css')
                .pipe(clean({
                    compatibility:'ie8'
                }))
                .pipe(rename('style.min.css'))
                .pipe(gulp.dest('./dest/css'));
}

function script(){
    return gulp.src('./src/js/*.js')
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(gulp.dest('./dest/js'));
}

function watch(){
    style();
    minify();
    script();

    gulp.watch('./src/scss/**/*.{scss,sass}', style);
    gulp.watch('./dest/css/style.css', minify);
    gulp.watch('./src/js/*.js', script);
    gulp.watch('./index.html', browserReload);

    gulp.watch([
        "./src/**/*"
        ],
        gulp.series(browserReload)
    )

}

function production(){
    return gulp.src('./dest/**/**')
            .pipe(gulp.dest('./production/'))
            .pipe(gulp.src('./index.html'))
            .pipe(gulp.dest('./production/'));
}

const start = gulp.parallel(watch, browserSync);
const prod = gulp.series(production);

exports.default = start;
exports.production = prod;