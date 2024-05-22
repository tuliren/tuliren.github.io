# Functions

## Arrow functions
- The full name is arrow function expressions, because arrow functions are always expressions.
- Valid cases
  - Stored in a variable,
  - Passed as an argument to a function,
  - Stored in an object's property.
- Parameters
  - When there is only one parameter, the parentheses can be omitted.
  - When there is zero or multiple parameters, the parentheses cannot be omitted.
- Function body
  - Concise body syntax: when there is only a single expression, curly braces, `return`, and semi-colons can all be omitted.
  - Block body syntax: when there is more than a single expression.

```js
const fn0 = () => result;
const fn1 = _ => result;
const fn2 = singleParam => result;
const fn3 = (param1, param2) => result;
const fn4 = (param1, param2) => {
  return result;
};
```

- When not to use arrow functions
  - Arrow functions are only expressions. There is no arrow function declaration.
  - There is a gotcha with the `this` keyword in arrow functions.

### `this` and regular functions

| Function Call | `this` |
| ---- | ---- |
| With the `new` operator | The new object |
| With `call` / `apply` | Specified by `call` / `apply` |
| Method of an object | The object the method is called from |
| With no context | - In non-strict mode: the global object<br/>- In strict mode: `undefined` |

### `this` and arrow functions
- `this` is based on the function's surrounding context.
- The value of `this` inside an arrow function is the same as the value of `this` outside the function.

## Default function parameters

```js
const fn1 = function (param1 = 'defaultValue1', param2 = 'defaultValue2') {
};
```

### Defaults and destructuring arrays

```js
function createGrid([width = 5, height = 5]) {
  return `Generates a ${width} x ${height} grid`;
}

createGrid([]);             // Generates a 5 x 5 grid
createGrid([2]);            // Generates a 2 x 5 grid
createGrid([2, 3]);         // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid
```

- The `createGrid()` function expects an array to be passed to it.
- It uses destructuring to set the first and second items in the array.
- If the array is empty or if it has only one item in it, then the default parameters kick in.

```js
createGrid();               // throws an error

function createGrid([width = 5, height = 5] = []) {
  return `Generates a ${width} x ${height} grid`;
}

createGrid();               // Generates a 5 x 5 grid
```

- The function expects an array to be passed in for destructuring.
  - Pass in non-array arguments will result in error.
  - Pass in an array, and then other arguments is fine.
- When no parameter is passed in, it throws an error.
- With `= []`, if `createGrid()` is called without any argument, it will use this default empty array. 

### Defaults and destructuring objects
- A function can have an object be a default parameter and use object destructuring.
- An advantage of object defaults over array defaults is that it is easier to skip a parameter.

```js
function createSundae({scoops = 1, toppings = ['Hot Fudge']}) {
  const scoopText = scoops === 1 ? 'scoop' : 'scoops';
  return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
}

createSundae({});
// Your sundae has 1 scoop with Hot Fudge toppings.
createSundae({scoops: 2});
// Your sundae has 2 scoops with Hot Fudge toppings.
createSundae({scoops: 2, toppings: ['Sprinkles']});
// Your sundae has 2 scoops with Sprinkles toppings.
createSundae({toppings: ['Cookie Dough']});
// Your sundae has 1 scoop with Cookie Dough toppings.
```

- The same issue applies to calling `createSundae` without any argument.
- Use `{scoops = 1, toppings = ['Hot Fudge']} = {}` to specify a default object value. 

## JavaScript class
- JavaScript classes are just a thin mirage over regular functions and prototypal inheritance.
  - The constructor function is called with the new keyword.
  - The constructor function, by convention, starts with a capital letter.
  - The constructor function controls the setting of data on the objects that will be created.
  - "Inherited" methods are placed on the constructor function's prototype object.

### ES5 classes
```js
function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

Plane.prototype.startEngines = function () {
  console.log('starting engines...');
  this.enginesActive = true;
};
```

### ES6 classes
- ES6 provides a new `class` syntax.
- A `class` is just a function.
- When creating a new instance, the `new` keyword must be used. Otherwise, an error will be thrown.
- Use keyword `static` to mark a method as static.

```js
class Plane {
  // everything inside the constructor function
  // is inside the new constructor method
  constructor(numEngines) {
    this.numEngines = numEngines;
    this.enginesActive = false;
  }

  // methods are placed inside the class
  startEngines() {
    console.log('starting engines…');
    this.enginesActive = true;
  }
}

typeof Plane; // function
```

- Benefits of classes
  - Less setup
  - Clearly defined constructor function
  - Everything is contained

## ES6 subclasses
- Use `super` and `extends` to extend a class.
- In the constructor function, `super` must be called before `this` can be used.

```js
// ES6 version

class Tree {
  constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
    this.size = size;
    this.leaves = leaves;
    this.leafColor = null;
  }

  changeSeason(season) {
    this.leafColor = this.leaves[season];
    if (season === 'spring') {
      this.size += 1;
    }
  }
}

class Maple extends Tree {
  constructor(syrupQty = 15, size, leaves) {
    // super as a function
    super(size, leaves);
    this.syrupQty = syrupQty;
  }

  changeSeason(season) {
    // super as an object
    super.changeSeason(season);
    if (season === 'spring') {
      this.syrupQty += 1;
    }
  }

  gatherSyrup() {
    this.syrupQty -= 3;
  }
}

// ES5 version

function Tree(size, leaves) {
  this.size = (typeof size === "undefined")? 10 : size;
  const defaultLeaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null};
  this.leaves = (typeof leaves === "undefined")?  defaultLeaves : leaves;
  this.leafColor;
}

Tree.prototype.changeSeason = function(season) {
  this.leafColor = this.leaves[season];
  if (season === 'spring') {
    this.size += 1;
  }
}

function Maple (syrupQty, size, leaves) {
  Tree.call(this, size, leaves);
  this.syrupQty = (typeof syrupQty === "undefined")? 15 : syrupQty;
}

Maple.prototype = Object.create(Tree.prototype);
// maple's prototype has been overwritten, so
// the constructor property and the original
// constructor function needs to be reconnected
Maple.prototype.constructor = Maple;

Maple.prototype.changeSeason = function(season) {
  Tree.prototype.changeSeason.call(this, season);
  if (season === 'spring') {
    this.syrupQty += 1;
  }
}

Maple.prototype.gatherSyrup = function() {
  this.syrupQty -= 3;
}
```
