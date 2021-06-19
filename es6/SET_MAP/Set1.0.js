//1. Set 数据类型，和数组类似，但是成员的值是唯一的
let set1 = new Set()

var ary = [2, 3, 4, 5, 6, 6, 77, 77]
ary.forEach(function (curValue, CurIndx, ary) {
  // Set 使用 add 添加成员值
  set1.add(curValue)
}, this)

// 没有重复的值
console.log(...set1)
// size 可以看到 Set 实例的大小
console.log(`size of set1: ${set1.size}`)

// 2. Set 接收 数组作为初始化参数
var set2 = new Set(ary)

// 3. 小应用： 数组去重
var ary2 = [...new Set(ary)]
console.log(ary2)

// 4. Set 实例通过 add 加入值的时候，不会发生类型转换
var set3 = new Set()
set3.add('5')
set3.add(5)

set3.forEach((curValue, curIndex) => {
  console.log(`项${curIndex}数据类型是：` + typeof curValue)
})
