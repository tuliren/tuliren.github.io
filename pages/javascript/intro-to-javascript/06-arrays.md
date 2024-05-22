# Arrays

## Array properties
- `length`

## Array methods
- `reverse()`
- `sort()`
- `push()`: return the length of the array after the push
- `pop()`
- `shift()`: remove first element, and return the removed element
- `join(delimiter)`: concatenate the elements into a string
- [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
  - Add or remove elements from anywhere in an array
  - Return an arrary of removed elements
  - Parameters
    - index
    - number of elements to remove
    - elements to add
  - `push(item)` is equivalent to `splice(array.length, 0, item)`
  - `pop()` is equivalent to `splice(-1, 1)` or `splice(array.length - 1, 1)`

## [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- Take a function with three parameters
  - element
  - index (optional)
  - array (optional)
- Return `undefined`
- Iterate through at most the number of elements before iteration
  - If new elements are added, they may be iterated as long as their index is wihtin the original iteration range.
  - If some elements are deleted, the iteration will not run into overflow issue.
- Iterate the next element according to index

```js
a = [0, 1, 2];
a.forEach(function(element, index, array) {
  console.log("index " + index + " before: " + element + ", " + array);
  if (index === 1) {
    array.splice(index, 0, 10);
  }
  console.log("index " + index + " after:  " + element + ", " + array);
});

// index 0 before: 0, 0,1,2
// index 0 after:  0, 0,1,2
// index 1 before: 1, 0,1,2
// index 1 after:  1, 0,10,1,2
// index 2 before: 1, 0,10,1,2
// index 2 after:  1, 0,10,1,2
```
- In the example, an element is added to the array, but the iteration only goes through three elements.
- Element `1` is iterated through twice, because it is the second element before the change, and then pushed to the third position after the change, and the iteration goes from second to third position, regardless of the added element.

- Elemented are passed by value ([reference](https://stackoverflow.com/a/31298343))
```js
var arr = [{ num : 1 }, { num : 2 }, { num : 3 }];
arr.forEach(function(part, index) {
  // part and arr[index] point to the same object, so
  // changing the object that part points to also changes
  // the object that arr[index] points to
  part.num = 4;
});
console.log(arr);
// [{ num : 4 }, { num : 4 }, { num : 4 }]

var arr = [{ num : 1 }, { num : 2 }, { num : 3 }];

arr.forEach(function(part, index) {
  // change part to point to a new object will
  // not change the objects stored in arr
  part = 4;
});
console.log(arr);
// [{ num : 1 }, { num : 2 }, { num : 3 }]
```

## [`map()`](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>)
- Return a new array from the original array
