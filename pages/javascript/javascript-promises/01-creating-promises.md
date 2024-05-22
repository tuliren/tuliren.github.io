# Creating Promises

- The promise object is used for deferred and asynchronous computations.
- Asynchronous code is not guaranteed to execute in a single unbroken timeline.

## Callbacks vs `then`s
- Callbacks are the default JavasScript technique for asynchronous work.
- Questions for callbacks
  - How to handle errors?
    - JavaScript error vs network error.
  - How to create a sequence of work?
    - Nested callbacks: pyramid of doom.

```js
loadImage('above-the-fold.jpg', imgContainer1, function () {
  loadImage('just-below-the-fold.jpg', imgContainer2, function () {
    loadImage('farther-down.jpg', imgContainer3, function () {
      loadImage('this-is-getting-ridiculous.jpg', imgContainer4, function () {
        loadImage('abstract-art.jpg', imgContainer5, function () {
          loadImage('egyptian-pyramids.jpg', imgContainer6, function () {
            loadImage('above-the-fold.jps', imgContainer7);
          })
        })
      })
    })
  })
});
```

- Promises (`then`s)

```js
const sequence = get('example.json')
.then(doSomething)
.then(doSomethingElse);
```

## Promise statuses
- Fulfilled (resolved)): it worked
- Rejected: it did not work
- Pending: still waiting
- Settled: fulfilled or rejected

## Promise timeline
- Resolution action execution
  - In event-based asynchronous handling, an event listener needs to be set before an event fires.
  - A resolution action can be set after a promise has resolved, and it will still be executed.
- A promise can only settle once.
- A promise executes in the main thread.
  - Not a pass for safely executing long-running operations.

## Syntax

```js
var promise = new Promise(function(resolve, reject) {
  // call resolve when completed
  resolve(resolveParams);
  // call reject when there is an error
  reject(rejectParams);
});

promise
  .then(function(resolveParams) {
    // resolve function
  })
  .catch(function(rejectParams) {
    // reject function
  });
```
