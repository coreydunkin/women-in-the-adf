'use strict';

var gulp = require('gulp'),
    replace = require('gulp-replace');


var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('styles', ['wiredep'],  function () {
  return gulp.src('src/{app,components}/**/*.scss')
    .pipe($.rubySass({style: 'expanded'}))
    .on('error', handleError)
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('.tmp'))
    .pipe(gulp.dest('src'))
    .pipe($.size());
});

gulp.task('scripts', function () {
  return gulp.src('src/{app,components}/**/*.js')
    //.pipe($.jshint())
    //.pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.size());
});

gulp.task('partials', function () {
  return gulp.src('src/{app,components}/**/*.html')
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.ngHtml2js({
      moduleName: 'womenInAdf'
    }))
    .pipe(gulp.dest('.tmp'))
    .pipe($.size());
});

gulp.task('html', ['styles', 'scripts', 'partials'], function () {
  var htmlFilter = $.filter('*.html');
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');
  var assets;

  return gulp.src('src/*.html')
    .pipe($.inject(gulp.src('.tmp/{app,components}/**/*.js'), {
      read: false,
      starttag: '<!-- inject:partials -->',
      addRootSlash: false,
      addPrefix: '../'
    }))
    .pipe(assets = $.useref.assets())
    .pipe($.rev())
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
    .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.replace('bower_components/bootstrap-sass-official/assets/fonts/bootstrap','fonts'))
    //.pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe(htmlFilter)
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(htmlFilter.restore())
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('images', function () {
  return gulp.src('src/assets/images/*')
    .pipe(gulp.dest('dist/assets/images'))
    .pipe($.size());
});

gulp.task('fonts', function () {
  return gulp.src('src/assets/fonts/**/*')
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/assets/fonts'))
    .pipe($.size());
});

gulp.task('misc', function () {
  return gulp.src('src/**/*.ico')
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('clean', function (done) {
  $.del(['.tmp', 'dist'], done);
});

var moveProject = [
  'dist'
];

// gulp.task('replaceHTML', [], function() {
//   gulp.src('dist/index.html')
//     .pipe(replace('<link rel="stylesheet" href="', '<link rel="stylesheet" href="/static/Women/'))
//     .pipe(replace('<script src="', '<script src="/static/Women/'))
//     .pipe(replace('<img src="assets/', '<img src="/static/Women/assets/'))
//     .pipe(gulp.dest('dist/'));
// });

// gulp.task('replaceJS', [], function() {
//   gulp.src('dist/scripts/app.js')
//     .pipe(replace('="assets/', '="/static/Women/assets/'))
//     .pipe(replace('background-image: url(assets/', 'background-image: url(/static/Women/assets/'))
//     .pipe(gulp.dest('dist/scripts/'));
// });

// gulp.task('replace', ['replaceHTML', 'replaceJS']);

// gulp.task('move', [], function() {
//   console.log('Moving folder...');
//   gulp.src('dist/**/**.*')
//   .pipe(gulp.dest('../../www.defencejobs.gov.au/www/static/Women/'));
// });

gulp.task('build', ['html', 'images', 'fonts', 'misc']);
