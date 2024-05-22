# Optimization

## Development and Production Modes
- Development tasks contain things needed all the time
  - Sass processing
  - Live editing

## Development Mode
- Create a `dist` that holds generated file separated from the source files
- `dist` stands for distribution. The code there is the minimized and optimized output of the build process.

```
- dist/
  - css/
  - js/
  - index.html
```
 
 - Update `gulpfile`

```js
// change this line
.pipe(gulp.dest('./css'))
// to this lines
.pipe(gulp.dest('dist/css'))

// copy files
gulp.task('copy-html', function() {
  gulp
    .src('./index.html')
    .pipe(gulp.dest('./dist'))
});
gulp.task('copy-images', function() {
  gulp
    .src('img/*')
    .pipe(gulp.dest('dist/img'))
});

// set new watch
watch('/index.html', gulp.series('copy-html'));
```

## CSS Concatenation
- Advantages
  - Reduce the number of HTTP requests needed to load the page.
  - Easier for dependency management with one `script` block.
- Glue CSS and JavaScript files together through concatenation.
- The files are then crunched together through minification.
- Sass does both concatenation and minification.
  - Include a single Sass file in the html.
  - Then use the `@import` directive in the Sass to input other files.
  - These inputs will be put inline and turned into one big CSS file by the Sass compiler.

## Production ready version site

```js
gulp.task('dist', gulp.series(
  'copy-html',
  'copy-images',
  'styles',
  'lint',
  'scripts-dist'
));
```

## Future Proof JavaScript
- There is a way to run the latest spec of JavaScript, ES6, despite the browser support.
- The transpiler takes one programming language, and converts it into another.
- Babel JS

```js
const babel = require('gulp-babel');

// add to scripts tasks
// .pipe(babel())
```

## Source Map
- Source maps are files that associate line numbers from the processed file to the original.
- The browser can then lookup the current line number in the sourcemap and open the right source file at the correct line when debugging.

```sh
npm install gulp-sourcemaps
```

```js
const sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts-dist', function() {
  gulp.src('js/**/*.js')
    // initialize after getting the source  
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(uglify())
    // write source maps after all plugins
    // and pipes have been applied but before
    // saving to the destination
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/js'));
});
```

## Image Optimization
- Lossless compression
  - `imagemin`: can losslessly compress JPEGs, GIFS, PNGs and SVGs.
- Lossy compression
  - Lossy compression can only recreate an approximation of the original.
  - PNG quantization
    - There are colors that our vision and brain perceives as very similar, even though they’re different.
    - `pngquant`:  automatically revert the change if a certain quality threshold isn’t passed.

```js
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

gulp.task('default', function() {
  return gulp.src('src/images/*')
    .pipe(imagemin({
      // progressive rendering loads an image in layers where
      // each layer makes the image more detailed
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/images'));
});
```
