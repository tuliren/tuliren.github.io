# Functions at Runtime

## Functions are first-class functions
- Functions can:
  - be stored in variables
  - be returned from a function
  - be passed as arguments into another function
- A function that takes other functions as arguments (and/or returns a function) is known as a *higher-order function*.
- A function that is passed as an argument into another function is called a *callback function*.

## Scope
- Functions have access to:
  - The function's arguments
  - Local variables declared within the function
  - Variables from its parent function's scope
  - Global variables
- JavaScript is **function-scoped**
  - Variables in JavaScript are traditionally defined in the scope of a function, rather than in the scope of a block.
  - Any variables defined inside that function are not available outside of that function, since entering a function will change scope.
  - Any variables defined inside a block (e.g. within an `if` statement) are available outside of that block.
- ES6 syntax allows for **block-scoped** variables with `let` and `const`.
  - These keywords are used to declare block-scoped variables in JavaScript.
  - They largely replace the need for `var`.
- Scope chain: JavaScript interpreter will search the value of a variable in the following order:
  - Local variables
  - Parent function's variables
  - Parent function's parent function's variables
  - Global variables

## Variable shadowing
- When a variable has the same name as another variable somewhere in the scope chain, the variable with local scope will temporarily "shawow" the variable in the outer scope.

## Closure
- Closure
  - The function itself
  - The scope chain of the code where the function is declared
- It is the process of a function retaining access to its scope.
- Formal definition: the combaination of a function and the lexical environment within which that function.
  - Lexical environment
    - The association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code.
    - I.e. the code as it is written in the JavaScript file

## Creating a closure
- Every time a function is defined, closure is created for that function.
- Every function has closure.
- Functions close over at least one other context along the scope chain: the global scope.
- Recall that a nested function has access to variables outside of it. These nested functions close over (i.e. capture) variables that aren't passed in as arguments nor defined locally.

```js
function remember(number) {
  // the returned function retains the
  // scope chain of its parent function
  return function() {
    return number;
  }
}
const returnedFunction = remember(5);
console.log( returnedFunction() );
// 5
```

## Garbage collection
- JavaScript manages memory with automatic garbage collection.
- If the nested function captures and uses its parent's variables (or variables along the scope chain), those variables will stay in memory as long as the functions that utilize them can still be referenced.

## Function declarations vs. expressions
- Function declaration
  - Defines a function
  - Does *not* require a variable to be assigned to it
  - Does *not* return a value

```js
function returnHello() {
  return 'Hello!';
}
```

- Function expression
  - Does return a value
  - Can be anonymous or named
  - Part of another expression's syntax
  - Commonly assigned to variables

```js
// anonymous
const myFunction = function () {
  return 'Hello!';
};

// named
const myFunction = function returnHello() {
  return 'Hello!';
};
```

## Immediately-invoked function expressions (IIFE)
- A function that is called immediately after it is defined.

```js
(function [name](parameters){
  // function body
})(arguments);

(function [name](parameters){
  // function body
}(arguments));

// anonymous
(function() {
  alert('Hi!');
})();

// named
(function sayHi() {
  alert('Hi!');
})();
```

## Private scope
- One of the primary uses for IIFE is to create private scope (i.e., private state).

```js
// immediately-invoked function expression
const myFunction = (
  function () {
    // variable available for the returned function
    const hi = 'Hi!';
    return function () {
      console.log(hi);
    }
  }
)();
```
- The returned anonymous function closes over (i.e. captures) the `hi` variable. This allows `myFunction` to maintain a private, mutable state that cannot be accessed outside the function.
- Because the function expressed is called immediately, the IIFE wraps up the code nicely so that it won't pollute the global scope.
- IIFE is best for one-time task without polluting the global environment with extra variables.

## IIFE example
  - Create a button that alerts the user on every other click.
  - One way is to keep track of the number of clicks of the button with a global variable.
  - The better way is to enclose the data in the event handler itself.

```html
<!-- button.html -->
<html>
  <body>
     <button id='button'>Click me!</button>
     <script src='button.js'></script>
  </body>
</html>
```

```js
// button.js
const button = document.getElementById('button');

// the function creates a closure to protect the count
// variable from being accesses externally
button.addEventListener('click', (function() {
  let count = 0;
  // the returned function closes on the count variable
  return function() {
    count += 1;
    if (count === 2) {
      alert('This alert appears every other press!');
      count = 0;
    }
  };
})());
```

- The first function creates a closure to
  - Define the `count` variable
  - Protect the variable from being accesses externally
- The second returned anonymous function creates a closure to
  - Access and modify the `count` variable
