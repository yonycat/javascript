The defination of generator:

```javascript
function* quips(name) {
  yield '你好 ' + name + '!'
  yield '希望你能喜欢这篇介绍ES6的译文'
  if (name.startsWith('X')) {
    yield '你的名字 ' + name + '  首字母是X，这很酷！'
  }
  yield '我们下次再见！'
}
```

- defination start with **function\***
- similar to return grammar , the key word is yield.
- 这就是普通函数和生成器函数之间最大的区别，普通函数不能自暂停，生成器函数可以。

notice:
生成器不是线程

```javascript
function* range(start, end) {
  yield i
}
var ary = range(1, 10)
```

**使用生成器则返回一个迭代器，每次根据需要逐一地计算结果。**

使用 生成器实现一个数组的过滤器功能

```javascript
function* filter(test, ary) {
  for (var item of ary) {
    if (test(item)) yield item
  }
}
let ayr1Filter = filter(test, [1, 2, 3, 4, 8, 10])
ary1Filter.next().value
```

surport situation:
Firefox 27+和 Chrome 39+支持了 ES6 生成器
