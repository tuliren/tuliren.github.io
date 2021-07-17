# Item 10: Obey the general contract when overriding `equals`

## When not to override `equals`
- Each instance of the class is inherently unique.
- There is no need for the class to provide a "logical equality" test.
- A superclass has already overridden `equals`, and the superclass behavor is appropriate for this class.
- The class is private or package-private, and it is certain that its `equals` method will never be invoked.

## When to override `equals`
- A class has a notion of *logical equality* that differs from object identity and its superclass has not overridden `equals`.
- Most value classes.
  - Exceptions
    - Class with instance control ([item 01](item-01.md))
    - Enum types ([item 34](item-34.md))

## Contract of `equals`
For all non-null object `x`, this method implements an *equivalent relation*:

- Reflexive: `x.equals(x) == true`
- Symmetric: `x.equals(y) == y.equals(x)`
- Transitive: `x.equals(y) && y.equals(z) => x.equals(z)`
- Consistent: result is consistent
- Non-null: `x.equals(null)` returns `false`

There is no way to extend an instantiable class and add a value component while preserving the `equals` contract.

```java

```
