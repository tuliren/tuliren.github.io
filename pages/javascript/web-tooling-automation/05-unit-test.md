# Unit Test

## Install Dependencies
```sh
// run tests in browser
npm install jasmine-core

// run tests in terminal
npm install puppeteer

// run tests in gulp task
npm install gulp-jasmine-browser
```

## Update `gulpfile`
- Run tests in console

```js
const jasmineBrowser = require('gulp-jasmine-browser');

gulp.task('tests', function() {
  return gulp
    .src('tests/spec/extraSpec.js')
    .pipe(jasmineBrowser.specRunner({ console: true }))
    .pipe(jasmineBrowser.headless({ driver: 'chrome' }));
});
```

- Run tests in browser

```js
gulp.task('tests', function() {
  gulp
    .src('tests/spec/extraSpec.js')
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({ port: 3001 }));
});
```

## Run Tests
```sh
gulp tests
```
