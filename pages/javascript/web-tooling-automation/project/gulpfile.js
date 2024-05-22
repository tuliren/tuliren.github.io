/* eslint-env node */

const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const jasmineBrowser = require('gulp-jasmine-browser');
const pngquant = require('imagemin-pngquant');

gulp.task('styles', function() {
  return gulp
    .src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('lint', function() {
  return  gulp
    .src(['js/**/*.js'])
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failOnError last.
    .pipe(eslint.failOnError());
});

gulp.task('test-console', function() {
  return gulp
    .src('tests/spec/extraSpec.js')
    .pipe(jasmineBrowser.specRunner({ console: true }))
    .pipe(jasmineBrowser.headless({ driver: 'chrome' }));
});

gulp.task('test-browser', function() {
  gulp
    .src('tests/spec/extraSpec.js')
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({ port: 3001 }));
});

gulp.task('scripts', function() {
  return gulp
    .src('js/**/*.js')
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts-dist', function() {
  return gulp
    .src('js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-html', function() {
  return gulp
    .src('./index.html')
    .pipe(gulp.dest('./dist'))
});

gulp.task('copy-images', function() {
  return gulp
    .src('img/*')
    .pipe(imagemin({
      // progressive rendering loads an image in layers where
      // each layer makes the image more detailed
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'))
});

gulp.task('dist', gulp.series(
  'copy-html',
  'copy-images',
  'styles',
  'lint',
  'scripts-dist'
));

// default task
gulp.task('default', gulp.series('copy-html', 'copy-images', 'styles', 'lint', function() {
  // watch for sass changes and run styles task
  watch('sass/**/*.scss', gulp.series('styles'));
  watch('js/**/*.js', gulp.series('lint'));
  watch('index.html', gulp.series('copy-html'));
  watch('./dist/index.html').on('change', browserSync.reload);

  browserSync.init({
    server: "./dist"
  });
}));
