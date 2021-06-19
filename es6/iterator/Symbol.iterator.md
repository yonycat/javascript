-What is symbol?

Symbol is a premitive data type imported in ES6. Usually, we use it to represent a **unique** value.

A Symbol value is generated in this way

```ts
const s =
  Symbol(/*
   accepts string as parameter too. The string is a description to the symbol
   */)
typeof s
s.toString()
```

- Symbol.iterator

Symbol.iterator 为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环结构使用。

demo： self defined iterator

```javascript
var myIterable = {}
myIterable[Symbol.iterator] = function* () {
  yield 1
  yield 2
  yield 3
}
;[...myIterable] // [1, 2, 3]
for (key of myIterable) {
  console.log(key)
}
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

Notice:
**The iterable protocol allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a for..of construct.** Some built-in types are built-in iterables with a default iteration behavior, such as Array or Map, while other types (such as Object) are not.

In order to be iterable, an object must implement the @@iterator method, meaning that the object (or one of the objects up its prototype chain) must have a property with a @@iterator key which is available via constant Symbol.iterator:

```javascript
var someString = new String('hi') // need to construct a String object explicitly to avoid auto-boxing

someString[Symbol.iterator] = function () {
  return {
    // this is the iterator object, returning a single element, the string "bye"
    next: function () {
      if (this._first) {
        this._first = false
        return { value: 'bye', done: false }
      } else {
        return { done: true }
      }
    },
    _first: true,
  }
}
```

- Singleton using Symbol

Reference: https://es6.ruanyifeng.com/#docs/symbol#%E5%AE%9E%E4%BE%8B%EF%BC%9A%E6%A8%A1%E5%9D%97%E7%9A%84-Singleton-%E6%A8%A1%E5%BC%8F
