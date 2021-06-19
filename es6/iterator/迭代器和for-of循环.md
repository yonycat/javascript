最原始的方式：

```javascript
for (var i = 0, len = ary.length; i < len; i++) {
  console.log(i)
}
```

es5:

```javascript
ary.forEach(function (item, index) {
  console.log(item, index)
})
```

这种方法也有一个小缺陷：你不能使用 break 语句中断循环，也不能使用 return 语句返回到外层函数。
for-in   循环

｀｀｀ javascript
for (var index in myArray) { // 千万别这样做
console.log(myArray[index]);
}
｀｀｀
reason:

- 在这段代码中，赋给 index 的值不是实际的数字，而是字符串“0”、“1”、“2”，此时很可能在无意之间进行字符串算数计算，例如：“2” + 1 == “21”，这给编码过程带来极大的不便。
- 作用于数组的 for-in 循环体除了遍历数组元素外，还会遍历自定义属性。举个例子，如果你的数组中有一个可枚举属性 myArray.name，循环将额外执行一次，遍历到名为“name”的索引。就连数组原型链上的属性都能被访问到。
- 最让人震惊的是，在某些情况下，这段代码可能按照随机顺序遍历数组元素。
- 简而言之，for-in 是为普通对象设计的，你可以遍历得到字符串类型的键，因此不适用于数组遍历。
  for in iterator is desgined for obejct

####for of 循环

```javascript
const ary = [12, 34, 45, 56, 78, 99]
for (var item of ary) {
  if (item == 56) break
  console.log(item)
}
```

- for of 循环也支持类数组遍例

```javascript
const map = {
  1: '一',
  2: '二',
}
map.length = 2
//这个会报错
for (var item of map) {
  console.log(item)
}
```

#####Set

```javascript
const set = new Set()
set.add(1)
set.add(2)
for (var item in set) console.log(item)
```

#####map

```javascript
const map = new Map()
map.set('name', 'alice')
```

#####解决对象的 for of 循环

```javascript
const person = {
  name: 'alice',
  age: 18,
}
for (var item in Object.keys(person)) console.log(item)
```

conclusion:_for-of 循环语句通过方法调用来遍历各种集合_
