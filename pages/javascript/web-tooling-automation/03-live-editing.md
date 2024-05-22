# Expressive Live Editing

## Different Approaches
- Sublime
  - Takana plugin
  - Only support CSS and SCSS, not HTML
- Browser
  - Chrome dev workspace
  - Not aware of the build process
- Browser Sync
  - Proxy a local web server that serves and tracks files for changes
  - Compatiable with most JS build tools

## Browser Sync

1. Install browser-sync
  - Install locally

```sh
npm install browser-sync
```

2. Add browser-sync to `gulpfile.js`

```js
const browserSync = require('browser-sync').create();

gulp.task('styles', function() {
  gulp
    .src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions']
      })
    )
    .pipe(gulp.dest('./css'))
    // new pipe
    .pipe(browserSync.stream());
});

// default default task
gulp.task('default', function() {
  // watch for sass changes and run styles task
  watch('sass/**/*.scss', gulp.series('styles'));

  browserSync.init({
    server: "./"
  });
});
```
