# Immutable

- Official Doc(4.x): https://immutable-js.com/docs/#/
- The quick way to learn immutable is by reading the documentation of [lodash](https://lodash.com/)

## Concepts and Key ideas

- Functional programming -> pure function -> data-in & data-out
- Immutable data can't be changed once created
- As a performance optimization Immutable.js attempts to return the existing collection when an operation would result in an identical collection

```ts
const { Map } = require('immubtable')
const map1 = Map({ a: 1, b: 2 })
const map2 = map1.set('b', 2)
console.log(map1 === map2) // true
```

- **Collection** data structure in Javascript

  - array, map, set (deployed iterator interface)

- immutable use factory instead of _new_ to create instance

```ts
const petList = List(['cat', 'dog'])
```

## Key APIS

- is & equals

```ts
const { Map } = require('immutable')
const map1 = Map({ a: '1', b: '2' })
const map2 = Map({ a: '1', b: '2' })

console.log(map1.equals(map2))
```

- **Collection** is the base factory function in immutable
- Map
- List
- Set
