# Built-ins

## Symbols
- A symbol is a unique and immutable data type that is often used to identify object properties.
- To create a symbol, write `Symbol()` with an optional string as its description.

```js
const sym1 = Symbol('apple');
console.log(sym1);
// Symbol(apple)
```

### Uniqueness
- Each time a new symbol is created, regardless of the description.
- The description is only used to describe the symbol. It’s not used as part of the symbol itself.

```js
const sym2 = Symbol('banana');
const sym3 = Symbol('banana');
console.log(sym2 === sym3);
// false
```

### Use case
- It is most often used to uniquely identify properties within an object.

```js
// use string as property keys, and the
// second banana overwrites the first one
const bowl = {
  'apple': { color: 'red', weight: 136.078 },
  'banana': { color: 'yellow', weight: 183.151 },
  'orange': { color: 'orange', weight: 170.097 },
  'banana': { color: 'yellow', weight: 176.845 }
};

// use symbol as property keys,
// and each symbol is unique
const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
```

## `Set`
- Sets are not indexed-based.
- Items in a `Set` cannot be accessed individually.

```js
// create
const set1 = new Set()
const set2 = new Set(array)

// modify
set1.add(element);    // return the set itself
set2.delete(element); // return true or false

// delete
set1.clear();

// check length
set1.size;

// check element existence
set2.has(element);

// retrieve all values
const iterator1 = set1.keys();   // return a SetIterator
const iterator2 = set1.values(); // return a SetIterator
```

### `WeakSet`
- A normal `Set` with the following differences:
  - `WeakSet` only contains objects.
  - Not iterable and thus cannot be looped over.
  - Does not have a `.clear()` method.
- When an object is deleted, it will also be deleted from the `WeakSet`
 when garbage collection runs.
- `WeakSet` is useful when there needs an efficient, lightweight solution for creating groups of objects.

## `Map`
- Both the keys and the values can be objects, primitive values, or a combination of the two.

```js
const map = new Map();
map.set(key, value); // return the map itself
map.get(key);
map.delete(key);     // return true or false
map.clear();
map.has(key);
```

### Looping through `Map`
- Default `MapIterator`

```js
const iterator1 = map.keys();
iterator1.next();

const iterator2 = map.values();
iterator2.next();
```

- `for...of` loop

```js
for (const [key, value] of map) {
  // ...
}
```

- `forEach` loop

```js
map.forEach((value, key) => fn(value, key));
```

### `WeakMap`
- A normal `Map` with the following differences:
  - Only contain objects as keys.
  - Not iterable.
  - Does not have a `.clear()` method.
- When an object is deleted, the object key will also be deleted from the WeakMap when garbage collection runs.

## Promises
- A promise will start some work that will be done asynchronously.
- A Promise constructor takes a function with two functions.
  - When the promise succeeds, the `resolve` function will be called.
  - When the promise fails, the `reject` function will be called.

- A promise returns immediately.
- The promise object has a `.then()` method that takes in the `resolve` and `reject` functions.

```js
const promise = new Promise(function (resolve, reject) {
  if (successful) {
    resolve(arguments);
  } else {
    reject('Promise failed');
  }
});

promise.then((params) => {
  console.log(`Succeed: ${params}`);
}, (errorMessage) => {
  console.log(errorMessage);
});
```

## Proxies
- `Proxy` constructor takes in two items:
  - The object to be proxied.
  - The proxy handler object.
    - It contains the list of methods it will handle for the proxied object.
- Pass through proxy
  - `new Proxy(object, {})`
  - It just passes the request directly to the source object.

### `get` trap
- Intercept calls to properties.
- Take over whenever any property on the proxy is accessed.

```js
const richard = {status: 'looking for work'};
const handler = {
  /**
   * @param target   the proxied object (richard)
   * @param propName the name of the property being accessed (status)
   */
  get(target, propName) {
    return target[propName];
  }
};
const agent = new Proxy(richard, handler);
```

### `set` trap
- Intercepting code that will change a property.

```js
const richard = {status: 'looking for work'};
const handler = {
  /**
   * @param target   the proxied object (richard)
   * @param propName the name of the property being modified (payRate)
   * @param value    the new value to be set to propName (payRate)
   */
  set(target, propName, value) {
    // if the pay is being set, take 15% as commission
    if (propName === 'payRate') {
        value = value * 0.85;
    }
    target[propName] = value;
  }
};
const agent = new Proxy(richard, handler);
```

### All traps
- `get` trap: handle calls to property access.
- `set` trap: handle setting the property to a new value.
- `apply` trap: handle being invoked (the object being proxied is a function).
- `has` trap: handle the using in operator.
- `deleteProperty` trap: handle if a property is deleted.
- `ownKeys` trap: handle when all keys are requested.
- `construct` trap: handle when the proxy is used with the new keyword as a constructor.
- `defineProperty` trap: handle when defineProperty is used to create a new property on the object.
- `getOwnPropertyDescriptor` trap: handle getting the property's descriptors.
- `preventExtenions` trap: handle calls to Object.preventExtensions() on the proxy object.
- `isExtensible` trap: handle calls to Object.isExtensible on the proxy object.
- `getPrototypeOf` trap: handle calls to Object.getPrototypeOf on the proxy object.
- `setPrototypeOf` trap: handle calls to Object.setPrototypeOf on the proxy object.

### Proxies vs ES5 getter / setter
- With ES5's getter and setter methods, you need to know before hand the properties that are going to be get/set.
- With ES6 Proxies, we do not need to know the properties beforehand.

```js
var obj = {
  _age: 5,
  _height: 4,

  get age() {
    console.log(`getting the "age" property`);
    console.log(this._age);
  },
  get height() {
    console.log(`getting the "height" property`);
    console.log(this._height);
  }
};

obj.age;    // logs 'getting the "age" property' & 5
obj.height; // logs 'getting the "height" property' & 4
```

## Generators
- Use a generator to be able to pause a function mid-execution.
  - `function* name() { ... }`
- The asterisk of the generator can be placed anywhere between the `function` keyword and the function name.
- The community has coalesced into having the asterisk appear right next to the `function` keyword.
- Generators cannot be defined with fat arrow functions.
- Every call to `next()` will
  - Fulfill the previous yield expression if there is any;
  - Return the value following the next `yield`;
  - Pause at the same next `yield` statement.

```js
function* foo() {
  console.log(`function starts`);
  // the first next() returns 123 and pause here
  const a = (yield 123);
  console.log(`a: ${a}`);
  // the second next(456) replace (yield 123) with 456,
  // and assign it to a, print out a's value, and pause here
  yield a;
  console.log(`function ends`);
  // the third next() will print out the statement,
  // and return undefined
}

const iterator = foo();
iterator.next();
// function starts
// { value: 123, done: false }

iterator.next(456);
// a: 456
// { value: 456, done: false }

iterator.next();
// function ends
// { value: undefined, done: false }
```
