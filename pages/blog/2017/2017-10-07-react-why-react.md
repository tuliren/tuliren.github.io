---
title: React - Why React?
date: 2017-10-07 17:09:25
tags: [React]
---

[React Syllabus](./2017-10-07-react-syllabus)

## Intro

- What makes React special?
  - Compositional model
  - Declarative nature
  - The way data flows from parent to child
  - React is just JavaScript

---

## Composition

- React code composes functions to get UI.

- Composition

  - Combine simple functions to build complicated ones.
  - Good function follows DOT rule (Do One Thing).

- React component

```html
// simple components
<Page />
<article />
<Sidebar />

// component composition
<Page>
  <article />
  <Sidebar />
</Page>
```

---

## Declarative Code

- Imperative code

  - Imperative: expressing a command; commanding.
  - Exactly **_what to do_** and **_how to do_** it.

    ```js
    const people = ['Amanda', 'Geoff', 'Michael', 'Richard', 'Ryan', 'Tyler'];
    const excitedPeople = [];

    for (let i = 0; i < people.length; i++) {
      excitedPeople[i] = people[i] + '!';
    }
    ```

- Declarative code
  - Declare **_what to be done_**.
    ```js
    const excitedPeople = people.map((name) => name + '!');
    ```

---

## Unidirectional Data Flow

- Data-binding in other frameworks

  - [Angular](https://angular.io/guide/template-syntax#binding-syntax-an-overview)
    - From source to view
    - From view to source
    - Two-way
  - [Ember](https://guides.emberjs.com/v2.13.0/object-model/bindings/)
    - Two-way: `Ember.computed.alias()`
    - One-way: `Ember.computed.oneWay()`

- React's data-flow

  - Data lives in the parent component.
  - Data is accessible by both the parent and child components.
  - Only the parent component can change the data.
  - If child component needs to make a change to the data, it would send the updated data to the parent component where the change will actually be made.

  {% img /images/2017-10-07-react-why-react/data-flow.png 400 225 %}

---

## Just JavaScript

- JS functional programming
  - [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
