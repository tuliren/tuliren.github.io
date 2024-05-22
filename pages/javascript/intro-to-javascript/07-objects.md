# Intro to Objects

- Objects are data structures that store data, and help track of that data by keys.
- Objects have properties and methods.
- `typeof` operator: return name of the data type
- Object-literal notation
```js
var umbrella = {
  color: 'red',
  isOpen: false,
  open: function() {
    umbrella.isOpen = true;
  }
}
```
- Data retrieval
  - Bracket notation: `umbrella['color']`
  - Dot notation: `umbrella.color`
- Naming conventions
  - Don't wrap property names in quotes.
  - Special propery names can be put inside quotes. But they are not compatible with dot notations.
  - Don't use numbers as first character as property names.
  - Don't include space or `-` in property names.
  - Use camel case for multi-word property names.
