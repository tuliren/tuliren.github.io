# Item 09: Prefer `try-with-resources` to `try-finally`

```java
static String firstLineOfFile(String path) throws IOException {
  try (BufferedReader br = new BufferedReader(new FileReader(path))) {
    return br.readLine()
  }
}
```

- If exceptions are thrown by both `readLine` and the invisible `close` method, the latter exception is suppressed in favor of the former.
- Multiple exceptions may be suppressed in order to preserve the exception that user actually wants to see.
- Suppressed exceptions are printed in the stack trace with a suppression notation.
- Suppressed exceptions can be accessed with the `getSuppressed` method.
