# Item 01 Consider static factory methods instead of constructors

## Advantages of static factory methods
- Static factory methods have names
- Not required to create a new object for each invocation
  - Similar to flyweight pattern
- Return an object of any subtype of their return type
  - An API can return objects without making their classes public
  - Application: interface-based frameworks (item 20)
- The class of returned object can vary from call to call as a function of the input parameters
- The class of returned object need not exist when the class containing the method is written
  - Application: [service provider framework](#service-provider-framework)

## Limitation of providing only static factory methods
- Classes without public or protected constructors cannot be subclassed
- Hard for programmers to find

## Common static factory method names
Name | Description | Example
---- | ---- | ----
`from` | Type conversion | `Date d = Date.from(instant)`
`of` | Aggregation | `Set<Rank> faceCards = EnumSet.of(JACK, QUEEN, KING)`
`valueOf` | Verbose alternative to `from` and `of` | `BigInteger primer = BigInteger.valueOf(Integer.MAX_VALUE)`
`instance` / `getInstance` | Return an instance |
`create` / `newInstance` | Return a guaranteed new instance | `Object newArray = Array.newInstance(classObject, arrayLen)`
`getType` | Return an instance of a specific type | `FileStore fs = Files.getFileStore(path)`
`newType` | Return a new instance of a specific type | `BufferedReader br = Files.newBufferedReader(path)`
`type` | Concise alternative to `getType` and `newType` | `List<Complaint> litany = Collections.list(legacyLitany)`

## Service provider framework

A system in which providers implement a service, and the system makes the implementations available to clients, decoupling the clients from the implementation.

Component | Description | JDBC Example
---- | ---- | ----
Service interface | Represent an implementation | `Connection`
Provider registration API | Used by provider to register an implementation | `DriverManager.registerDriver`
Service access API | Used by clients to obtain instances of the service | `DriverManager.getConnection`
Service provider interface (optional) | Describe a factory object that produces instances of the service interface | `Driver`
