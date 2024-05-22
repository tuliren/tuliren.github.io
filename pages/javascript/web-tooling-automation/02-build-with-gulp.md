# Build with Gulp

## Build Tools
- Needed features
  - Fast
  - Community-driven
  - Modular & extensible
  - Feature-rich
- Examples
  - Grunt
    - Use configuration
    - Write to tmp files
  - Gulp
    - Use code (JavaScript) over configuration
    - Excute tasks in parallel
    - Convert files to in-memory stream and no tmp files - signficantly less I/O

## Initialize Project
```js
npm init
npm install --save-dev gulp
```
- `gulp` will show up in the `devDependencies` section in `package.json`.

## Create `gulpfile`
- Create `gulpfile.js` with the following skeleton code:

```js
const gulp = require("gulp");

// default default task
gulp.task("default", function() {
});
```

- Run `gulp` to run the build.

## Process CSS
- Install `gulp-sass`

```sh
npm install gulp-sass
```

- Import `gulp-sass`

```js
const sass = require('gulp-sass');
```

- Create a `styles` task

```js
gulp.task("styles", function() {
  gulp
    // looks for files inside sass folder
    .src("sass/**/*.scss")
    // run through sass
    .pipe(sass())
    // display errors, if any
    .on("error", sass.logError)
    // put newly transpiled code into css
    .pipe(gulp.dest("./css"));
});
````

