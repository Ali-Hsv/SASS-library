const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')
const plumber = require('gulp-plumber')

function buildStyles() {
    return src('./scss/**/*.scss')
        .pipe(plumber({
          errorHandler: function (err) {
            console.error('SCSS Compilation Error:', err.message);
            this.emit('end');
          }
        }))
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'] }))
        .pipe(dest('css'))
}

function watchTask() {
    watch(['./scss/**/*.scss', '*.html'], buildStyles)
    watch(['./scss/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)