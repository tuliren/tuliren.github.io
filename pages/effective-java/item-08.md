# Item 08: Avoid finalizers and cleaners

- Finalizers are replaced with cleaners in Java 9.
- No guarantees are made relating to whether cleaning actions are invoked or not.
- To protect nonfinal classes from finalizer attacks, write a final `finalize` method that does nothing.
- Implement `AutoClosable` for resource termination ([item 09](item-09.md)).
