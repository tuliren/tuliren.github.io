---
title: React - Render UI with React
date: 2017-10-08 18:37:43
tags: [React]
---

[React Syllabus](./2017-10-07-react-syllabus)

## Intro
- React elements: JavaScript objects
- React elements -> DOM nodes
- React components: custom elements

----

## Creating Elements and JSX

### `React.createElement`
```js
React.createElement(type, props, content);
```
- Creates a single React element of particular type.
- `type`
  - string (`<div>`, `<span>`)
  - React component
- `props`
  - `null`
  - An object of HTML attributes and custom data about the element
- `content`
  - `null`
  - String
  - React element
  - React component

#### Example - basic
```js
import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement(
  'div',
  {className: 'welcome-message'},
  React.createElement('strong', null, 'hello world')
)

ReactDOM.render(
  element,
  document.getElementById('root')
)
```
  - Apps built with React have a single `root` DOM node.
  - `element` is inserted into the `root` DOM node.

#### Example - dynamic list
```js
import React from 'react'
import ReactDOM from 'react-dom'

const people = [
  { name: 'Michael' },
  { name: 'Ryan' },
  { name: 'Tyler' }
]

const element = React.createElement(
  'ol',
  null,
  people.map((person, index) => (
    React.createElement('li', {key: person.name, id: index}, person.name)
  ))
)

ReactDOM.render(
  element,
  document.getElementById('root')
)
```
  - A unique `key` prop is needed when defining a list. `key` helps React track specific child elements as the state changes in the app.

### JSX
- A syntax extention to `React.createElement`.
- JSX is compiled to JavaScript.
- JSX returns a single element as well.

#### Example
```js
import React from 'react'
import ReactDOM from 'react-dom'

const people = [
  { name: 'Michael' },
  { name: 'Ryan' },
  { name: 'Tyler' }
]

const element = <ol>
  {people.map((person, index) => (
    <li id={index} key={person.name}>
      {person.name}
    </li>
  ))}
</ol>

ReactDOM.render(
  element,
  document.getElementById('root')
)
```

### React component
- Reusable pieces of code that groups React elements together.
- Factory to create React elements.
- Component should have
  - Clear responsibilities.
  - Well-defined interfaces.
- Required method: `render`.

#### Example
```js
import React from 'react'
import ReactDOM from 'react-dom'

class ContactList extends React.Component {
  render() {
    const people = [
      { name: 'Michael' },
      { name: 'Ryan' },
      { name: 'Tyler' }
    ]

    const element = <ol>
      {people.map((person, index) => (
        <li id={index} key={person.name}>
          {person.name}
        </li>
      ))}
    </ol>
  }
}

ReactDOM.render(
  <ContactList/>,
  document.getElementById('root')
)

// Use the following import statement to simplify component declaration:
//   import React, { Component } from 'react'
//   class ContactList extends Component
```

----

## Create React App
- `Webpack` bundles all assets (JavaScript files, CSS, images, etc).
- `Babel` transpiles JSX to JavaScript.
- `create-react-app` manages all the above setup.

```sh
npm install -g create-react-app
## -g: install globally

create-react-app <app>
## installs react, react-dom and react-scripts
## creates the app

cd <app>/
yarn start
## package manager by facebook
```

- Edit `App.js` file.
- `index.js` reads in `App.js` and renders it.

----

## Composing with Components
- Component composition
  - Reuse components
  - Allow different configuration of components

```js
class ContactList extends Component {
  render() {
    const people = this.props.contacts;

    // ...
  }
}

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ContactList contacts={[
          { name: 'Michael' },
          { name: 'Ryan' },
          { name: 'Tyler' },
        ]}/>

        <ContactList contacts={[
          { name: 'Amanda' },
          { name: 'Richard' },
          { name: 'Geoff' },
        ]}/>
      </div>
    )
  }
}
```

----

## Outro 
- JSX uses JavaScript to describe UI elements.
- React components group UI elements, and can be composed together.
- `create-react-app`
