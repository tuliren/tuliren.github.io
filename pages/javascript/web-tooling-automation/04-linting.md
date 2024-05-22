# Linting

## Approaches
- Edit (live linting)
- Build process
- Pre-commit hook in version control

## Targets
- Code style
- Syntax

## Linters
- JSHint
- JSCS
- ESLint
- Support ES6 code
- Can be extended
- Easily-understandable output

## Install eslint

```sh
npm install -g eslint
eslint --init
```

## Set up eslint in gulp

```js
const eslint = require('gulp-eslint');

gulp.task('lint', function() {
  return (
    gulp
      .src(['js/**/*.js'])
      // eslint() attaches the lint output to the eslint property
      // of the file object so it can be used by other modules.
      .pipe(eslint())
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(eslint.format())
      // To have the process exit with an error code (1) on
      // lint error, return the stream and pipe to failOnError last.
      .pipe(eslint.failOnError())
  );
});

// add the following to default task
watch('js/**/*.js', gulp.series('lint'));
```
