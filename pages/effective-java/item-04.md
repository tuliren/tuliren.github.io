# Item 04: Enforce noninstantiability with a private constructor

```java
public class UtilityClass {
  private UtilityClass() {
    throw new AssertionError();
  }
}
```

- The `AssertionError` provides insurance in case the constructor is accidentally invoked from within the class.
- This idiom also prevents the class from being subclassed.
