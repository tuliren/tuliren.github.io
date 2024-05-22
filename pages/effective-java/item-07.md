# Item 07: Eliminate obsolete object references

## Source of memory leak

### Obsolete references

Memory leak
```java
public Object pop() {
  if (size == 0) {
    throw new EmptyStackException();
  }
  
  // memory leak
  return elements[--size];
}
```

Fix
```java
public Object pop() {
  if (size == 0) {
    throw new EmptyStackException();
  }
  
  Object result = elements[--size];
  // eliminate obsolete object reference
  elements[size] = null;
  return result;
}
```

- The fix is to null out references once they become obsolete.
- Nulling out object references should be the exception rather than the norm.
- The best way to eliminate an obsolete reference is to let the variable that contained the reference fall out of scope.

### Cache
- Use [`WeakHashMap`](https://docs.oracle.com/javase/8/docs/api/java/util/WeakHashMap.html) whose entries will be removed automatically after they become obsolete. Use this approach only when the desired lifetime of cache entries is determined by external references to the key, not the value.
- Cache should occasionally be cleansed of entries that have fallen into disuse.

### Listerners and other callbacks
- Registered callbacks are not deregistered and accumulate in memory.
- Store only week references to callbacks, for example, by storing them only as keys in a `WeakHashMap`.
