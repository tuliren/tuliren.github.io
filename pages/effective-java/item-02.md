# Item 02: Consider a builder when faced with many constructor parameters

## Builder pattern

- Good for designing classes whose constructors or static factories would have more than a handful of parameters.
- Better to start with a builder in the first place to avoid obsolete constructors or static factories.

```java
public class NutritionFacts {
  public static class Builder {
    // required parameters
    // ...
    
    // optional parameters - initialized to default values
    // ...

    // builder methods
    public NutritionFacts build() {
      return new NutritionFacts(this);
    }
  }
  
  // builder constructor
  private NutritionFacts(Builder builder) {
    // set up parameters
  }
}
```

## Builder for class hierarchies

Simulated self-type idiom: the `self()` method provides a workaround for the fact that Java lacks a self type.

```java
public abstract class Pizza {
  abstract static class Builder<T extends Builder<T>> {
    abstract Pizza build();

    // self-type idiom
    protected abstract T self();
  }
  
  Pizza(Builder<?> builder) {
    // set up parameters
  }
}
```
