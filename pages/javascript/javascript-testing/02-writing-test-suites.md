# Writing Test Suites

## `Jasmine` library
- `it` defines a spec, a container for tests.
- `describe` defines a suite, a group of related specs.
- `expect(actualValue).matcherFn(expectedValue)`
- Matchers
  - `toBe`
  - `not.toBe`

## Red-green-refactor cycle
- Write test which will fail.
- Write the code to make the test pass.
- Refactor the code.
