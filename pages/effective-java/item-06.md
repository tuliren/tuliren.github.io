# Item 06: Avoid creating unnecessary objects

- Prefer primitives to boxed primitives, and watch out for unintentional autoboxing.
- This does not imply that object creation is expensive. Creation and reclamation of small objects whose constructors do little explicit work is cheap with modern JVM implementations.
- Avoiding object creation by maintaining an object pool is a bad idea, unless the objects in the pool are extremely heavyweight.
  - An object that does justify an object pool is a database connection.
