# Intro to Conditionals

## Truthy values and falsy values
- Every value in JavaScript has an inherent boolean value.
- Falsy values
  - `false`
  - `""`
  - `null` type
  - `undefined` type
  - `0`
  - `NaN`
- Truthy values
  - Everything else
  - `0.0`
  - `"null"`

## Switch statement
```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```
- Each `case` statement is equivalent to `===`
