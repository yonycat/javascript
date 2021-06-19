###省略参数

```javascript
function containsAll(haystack) {
  for (var i = 1; i < arguments.length; i++) {
    var needle = arguments[i]
    if (haystack.indexOf(needle) === -1) {
      return false
    }
  }
  return true
}
```

不定参数恰好可以解决可读性与参数索引的问题

```javascript
function containsAll(haystack, ...needles) {
  for (var needle of needles) {
    if (haystack.indexOf(needle) === -1) {
      return false
    }
  }
  return true
}
```

在所有函数参数中，只有最后一个才可以被标记为不定参数。函数被调用时，不定参数前的所有参数都正常填充，
任何“额外的”参数都被放进一个数组中并赋值给不定参数。如果没有额外的参数，不定参数就是一个空数组，
它永远不会是 undefined。

###默认参数

```javascript
function sayName(name, age = 18) {
  console.log(`the age of ${name} is ${age}`)
}
sayName('alice')
```

more detail about the default value of a params

- 默认值表达式在函数调用时自左向右求值，这一点与 Python 不同。这也意味着，默认表达式可以使用该参数之前已经填充好的其它参数值。
- 传递 undefined 值等效于不传值，
- 没传值，值默认是 undefined

```javascript
function animalSentence(animals2 = 'tigers', animals3 = 'bears') {
  return `Lions and ${animals2} and ${animals3}! Oh my!`
}
animalSentence() // Lions and tigers and bears! Oh my!
animalSentence('elephants') // Lions and elephants and bears! Oh my!
animalSentence('elephants', 'whales')
```

###停止使用 arguments

现在我们已经看到了 arguments 对象可被不定参数和默认参数完美代替，移除 arguments 后通常会使代码更易于阅读。除了破坏可读性外，众所周知，针对 arguments 对象对 JavaScript 虚拟机进行的优化会导致一些让你头疼不已的问题。
<br>
我们期待着不定参数和默认参数可以完全取代 arguments，要实现这个目标，标准中增加了相应的限制：在使用不定参数或默认参数的函数中禁止使用 arguments 对象。曾经实现过 arguments 的引擎不会立即移除对它的支持，当然，现在更推荐使用不定参数和默认参数。
