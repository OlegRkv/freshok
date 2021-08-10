const { src, dest, watch, parallel, series } = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const del = require('del');
const svgSprite = require('gulp-svg-sprite');
const fileinclude = require('gulp-file-include');


function browsersync () {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    notify: false
  })
}

function sprite() {
  return src('app/images/icons/**/*.svg')
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: '../sprite.svg'
      }
    }
  }))
  .pipe(dest('app/images/'))
}

function styles() {
  return src('app/scss/style.scss')
  .pipe(scss({outputStyle: 'expanded'}))
  .pipe(concat('style.css'))
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 10 versions'],
    grid: true
  }))
  .pipe(dest('app/css'))
  .pipe(browserSync.stream())
}

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'app/js/main.js',
    'app/js/slick.min.js',
    'app/js/mixitup.min.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js'))
  .pipe(browserSync.stream())
}

function images() {
  return src('app/images/**/*.*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
  ]))
  .pipe(dest('dist/images'))
}

function htmlInclude() {
  return src(['app/index.html'])
  .pipe(fileinclude({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(dest('dist/'))
  .pipe(browserSync.stream())
}

function cleanDist() {
  return del('dist')
}

function build() {
  return src([
    'app/**/*.html',
    'app/css/style.min.css',
    'app/js/main.min.js'
  ], {base: 'app'})
  .pipe(dest('dist'))
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html'], htmlInclude);
}

exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.cleanDist = cleanDist;
exports.images = images;
exports.sprite = sprite;
exports.fileinclude = htmlInclude;
exports.build = series(cleanDist, images, build);

exports.default = parallel(sprite, htmlInclude, styles, scripts, sprite, browsersync, watching);
