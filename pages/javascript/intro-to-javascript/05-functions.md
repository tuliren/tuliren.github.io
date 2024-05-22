# Intro to Functions

## Syntax
```js
function name(params) {
  // code block
}
```

## Parameter vs argument
- Parameter: a variable name that appears in the function declaration.
- Argument: a value that appears in the code when the function is invoked.
- Parameters are always passed by value.

## Return value
- A function always returns some value back to the caller.
- When return value is not specified, the function will return `undefined`.
  - E.g. `console.log`

## Scope
- Global scope
  - Variables defined outside of an function
- Function scope

## Shadowing
- Global variable can be overriden inside a function.
- Preventable by redeclaring the same variable in the function.

```js
// shadowing
var a = "a";
var b = "b";
function shadow() {
  a = "c";     // shadowing
  var b = "c"; // no shadowing
}

console.log(a); // a
console.log(b); // b
shadow();
console.log(a); // c, shadowed
console.log(b); // b
```

## Hoisting
- Before any JavaScript is executed, all function declarations are "hoisted" to the top of their current scope.
- Functions can be called before they are defined in a scope.
- Only declaration is hoisted. Assignment is not. So hoisted variables can still be undefined.
- The best practice is to define functions at the top of the scripts, and variables at the top of the functions.

```js
// only declaration is hoisted
function sayGreeting() {
  console.log(greeting);
  var greeting = "hello";
}
sayGreeting(); // undefined

// equivalent function
function sayGreeting() {
  var greeting;
  console.log(greeting);
  greeting = "hello";
}

// hoisting prevents access of global variable
var greeting = "hello";
function sayGreeting() {
  console.log(greeting); // undefined
  var greeting = "hello2";
}
sayGreeting(); // undefined
```

## Function as parameters
- A function passed into another function is called a **callback**.


## Function expressions
- A function stored in a variable.
- Anonymous function.

```js
var variable = function(params) {
  // anonymous function body
}

variable();
```

- Use the variable name to call the function.
- Function expressions are not hoisted.

```js
sayGreeting(); // sayGreetings is not a function
var sayGreeting = function() {
  console.log("hello");
}

// equivalent code
var sayGreeting;
sayGreeting();
sayGreeting = function() {
  console.log("hello");
}
```

## Named function expressions
```js
var variable = function name(params) {
  // function body
}
variable();
// call name() gives an error
```

## Inline function expressions
- Using function expressions that pass a function into another function inline, is really common in JavaScript.
```js
function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
```

- Anonymous inline function expressions are often used for function callbacks that are not going to be reused elsewhere.

```js
function movies(messageFunction, name) {
  messageFunction(name);
}

movies(function(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");
```
