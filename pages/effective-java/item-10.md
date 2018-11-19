# Item 10: Obey the general contract when overriding `equals`

## When not to override `equals`
- Each instance of the class is inherently unique.
- There is no need for the class to provide a "logical equality" test.
- A superclass has already overridden `equals`, and the superclass behavor is appropriate for this class.
- The class is private or package-private, and it is certain that its `equals` method will never be invoked.
