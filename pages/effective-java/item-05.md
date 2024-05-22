# Item 05: Prefer dependency injection to hardwiring resources

- Do not use a singleton or static utility class to implement a class that depends on one or more underlying resources.
- Do not have those classes create the resources directly.
- Use dependency injection: pass into the constructor the resources, or factories to creat them.
- Dependency injection enhances flexibility, reusability, and testability.
