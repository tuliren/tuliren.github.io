# Objects in Depth

## Creating objects
```js
// Using literal notation:
const myObject = {};

// Using the Object() constructor function:
const myObject = new Object();
```

- Both methods return an object without properties.
- The `Object()` constructor function is a bit slower.
- The recommended way to create new objects in JavaScript is to use literal notation.

## Modifying properties
- Data within objects are *mutable*.

## Addig properties
- Properties can be added to objects simply by specifying the property name, then giving it a value

## Removing properties
```js
// returns true if deletion is successful
delete object.property;
delete object.function;
```

## Passing primitives
- Primitives are immutable.
- Any changes made to an argument inside a function effectively creates a copy local to that function, and does not affect the primitive outside of that function

```js
function changeToEight(n) {
  // whatever n was, it is now 8,
  // but only in this function!
  n = 8;
}

let n = 7;
changeToEight(n);
console.log(n);
// 7
```

## Passing objects
- Objects are *mutable*.
- When an object is passed into a function, JavaScript makes a copy of the reference to that object.
- Both the original reference and the copied references point to the same object.

```js
function setToBlue(object) {
  object.favoriteColor = 'blue';
}

let originalObject = {
  favoriteColor: 'red'
};
setToBlue(originalObject);
originalObject.favoriteColor;
// 'blue'
```

## Comparing objects
- When comparing two objects with `===`, the expression will only return `true` when comparing two references to exactly the same object.

## Functions vs. methods
- Methods are functionas inside an object.
- Methods are special properties whose values are functions.

## Access object in the method
- Using `this`, methods can directly access the object that it is called on.
- `this` is a reserved word in JavaScript, and cannot be used as an identifier.
- Depending on how a function is called, `this` can be set to different values.

```js
const triangle = {
  type: 'scalene',
  identify: function () {
    console.log(`This is a ${this.type} triangle.`);
  }
};
```

## Value of `this`
- When a method is invoked, the value of `this` is the *object left of the dot* at invocation.
- When a regular function is invoked, the value of this is the *global window object*.

```js
const car = {
  numberOfDoors: 4,
  drive: function () {
    console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
  }
};

car.drive();
// Get in one of the 4 doors, and let's go!

const letsRoll = car.drive;
letsRoll();
// Get in one of the undefined doors, and let's go!
```
- The second `this` in the code above refers to the `window` object.
- Even though `car.drive` is a method, the function is stored in the a variable `letsRoll`.
- Because `letsRoll()` is invoked as a regular function, `this` will refer to the `window object` inside of it.

## The `window` object
- The `window` object is provided by the browser environment and is globally accessible to JavaScript code using the identifier, `window`.
- This object is not part of the JavaScript specification (i.e. ECMAScript). It is developed by the [W3C](https://www.w3.org/Consortium/).
- This window object has access to a ton of information about the page itself, including:
```js
// the page's URL
window.location;

// the vertical scroll position of the page
window.scrollY;

// scroll to 200 pixels down from the current location
window.scroll(0, window.scrollY + 200);

// open a new web page
window.open("https://www.udacity.com/");
```

## Globals
- Global variables
  - Every variable declaration with `var` made at the global level (outside of a function) automatically becomes a property on the `window` object.
  - `let` and `const` are introduced in ES6. Variabled declared with them are not added to the `window` object.
- Global functions
  - Any global function declarations are accessible on the `window` object as methods.

## Avoid globals
- Tight coupling
  - Code that is too dependent on the details of each other.
  - Changing one unintentionally alters the functioning of some other code.
- Name collisions
  - Two (or more) functions depend on a variable with the same name.

## Object methods
- The `Object()` function includes a few methods of its own.
- `Object.keys(<object>)`: returns an array of the provided objects' property names.
- `Object.values(<object>)`: returns an array of the provided objects' property values.
- These two methods will return the items in the same order as when using a `for` loop on the object.
