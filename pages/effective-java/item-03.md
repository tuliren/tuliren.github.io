# Item 03: Enforce the singleton property with a private constructor or an enum type

- A singleton is a class that is instantiated exactly once.
- Making a class a singleton can make it difficult to test its clients.

## Singleton as final field
- The public field makes it clear that this class is a singleton.
- Simple.

```java
public class Elvis {
  public static final Elvis INSTANCE = new Elvis();
  
  private Elvis() {
    // ...
  }
}
```


## Singleton with static factory method
- Provide flexibility about whether the class is a singleton without changing its API.
- If necessary, can write a generic singleton factory ([item 30](item-30.md)).
- A method reference can be used as a supplier. `Elvis::instance` is a `Supplier<Elvis>`.
- To maintain the singleton guarantee for serializable class, declare all instance fields `transient` and provide a `readResolve` method ([item 89](item-89.md)).
```java
private Object readResolve() {
  return INSTANCE;
}
```

```java
public class Elvis {
  private static final Elvis INSTANCE = new Elvis();

  public static Elvis getInstance() {
    return INSTANCE;
  }

  private Elvis() {
    // ...
  }
}
```

## Singleton as single-element enum
- Provide serialization machinery for free.
- Provide an ironclad guarantee against multiple instantiation.
- Best way to implement a singleton.

```
public enum Elvis {
  INSTANCE;
  
  // methods...
}
```
