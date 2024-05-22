# Object-Oriented Design Patterns

## Single inheritance
- An object's `.prototype` property points to just one object.
- This is because JavaScript only supports single inheritance.

## Factory Functions
- A factory function is a function that returns an object, but isn't itself a class or constructor.
- We can invoke a factory function as a normal function without using the `new` operator to avoid the complexity of classes and constructors.

```js
function Basketball(color) {
  return {
    color: color,
    numDots: 35000
  };
}
const orangeBasketball = Basketball('orange');
console.log(orangeBasketball);
// { color: 'orange', numDots: 35000 }
```
Category | Factory Function | Constructor Function
--- | --- | ---
Can create new object each time | Yes | Yes
Can receive arguments | Yes | Yes
Implicate prototypal inheritance | No | Yes
Invocation | Normal function<br/>`factoryFunc()` | With the `new` operator<br/>`new ConstructorFunc()` 

## Mixins
- A mixin is a technique that takes the properties and methods from one object and copies them over to another object.
- Mixin is not meant to be added to the prototype chain.

### `Object.assign()`
- `Object.assign()` is a method that (shallow) copies an object's own (non-inherited) properties from one or more source objects into a target object, then returns the updated target object.
- `Object.assign()` does not create and return a new object. It directly modifies then returns the same target object that was passed in.
- Values of existing properties will be overwritten.
- This method is introduced in ES2015 (ES6).

```js
target = Object.assign(target, source1, source2, ...);
```

### Functional Mixins
- A functional mixin is a composable factory function that receives a mixin as an argument, copies properties and methods from that mixin, and returns a new object.
- Functional mixins are composable. We can use them as individual pieces of code that add specific properties like an assembly line.

```js
function CoffeeMaker(object) {
  let needsRefill = false;

  return Object.assign({}, object, {
    pourAll: function () {
      needsRefill = true;
    },
    isEmpty: function () {
      return needsRefill;
    }
  });
}

const mixedCoffeeMaker = CoffeeMaker({ style: 'percolator' });

// mixedCoffeeMaker is equivalent to
{
  style: 'percolator',
  pourAll: function () {
    needsRefill = true;
  },
  isEmpty: function () {
    return needsRefill;
  }
}
```

## Private Properties
- JavaScript has no concept of private properties out-of-the-box. There is no special syntax or keyword we can use to protect certain properties from being accessed.
- Some object properties and method names may be prefixed with an underscore (`_`). It They are private by convention only.
- we can use scope and closures to create a private state.

```js
function myCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

let counter = myCounter();

counter();
// 1

counter();
// 2
```

## Module Pattern
- Use function scope, closure, and IIFE.

```js
let moduleVar = (function () {
  return {
    // privatr variable
    let privateVar = 'private variable';
    return {
      // setter
      setVar: function (varValue) {
        privateVar = varValue;
      }
      // getter
      getVar: function () {
        return privateVar;
      }
    }
  };
}());
```
- Advantages of module pattern:
  - Private properties
  - Usage of IIFE that prevents pollution of global scope
  - Code organization

## Revealing Module Pattern
- While we still maintain encapsulation (as in the Module Pattern), we also reveal certain properties (and methods).
- Key ingredients to the Revealing Module Pattern:
  - An IIFE (wrapper)
  - The module content (variables, methods, objects, etc.)
  - A returned object literal with keys pointing to data to be revealed

```js
let person = (function () {]
  // private properties
  let privateAge = 0;
  let privateName = 'Andrew';
  // private method
  function privateAgeOneYear() {
    privateAge += 1;
    console.log(`One year has passed! Current age is ${privateAge}`);
  }
  // public method
  function publicDisplayName() {
    console.log(`Name: ${privateName}`);
  }
  // public method
  function publicAgeOneYear() {
    privateAgeOneYear();
  }
  // object literal
  return {
    // keys pointing to data to be revealed
    name: publicDisplayName,
    age: publicDisplayName
  };
})();
```
- Advantages of the revealing module pattern:
  - There is clarity at the end of the module (in the `return` statement) as to which variables or methods may be accessed publicly.
  - It has consistent syntax. In contrast, the normal Module Pattern may contain variables and functions spread throughout the entire function body.
