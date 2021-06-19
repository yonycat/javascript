var aryLike = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
}

// 1. es5
var ar1 = Array.prototype.slice.call(aryLike)
// es6 将类数组对象和可遍历(iterable)的对象（包括es6新增的map 和 set)，转换成真正的数组对象
var ar2 = Array.from(aryLike) // ['a', 'b', 'c']
console.log(ar1, ar2)

// 2. 如果参数是一个真正的数组，会返回一个一模一样的新数组,但是两者的地址并不相同
var ar3 = Array.from(ar2)
console.log(`ar3: ${ar3}`, `ar2: ${ar2}`, 'ar3 ==== ar2:' + ar3 === ar2)

// 3.接收一个函数，函数和 map 类似，用来对每个元素进行处理
var ar4 = Array.from(aryLike, function (item) {
  return item.toLocaleUpperCase()
})
console.log(ar4)

// 4. g... 扩展运算符
var ar5 = [...ar2]
console.log(ar3)
let tempIndfo = {}

// 5. 配置函数里面的this值
var ar6 = Array.from(
  ar5,
  function (index) {
    this[index] = index
    // 这边配置 函数里面的 this 值
  },
  tempIndfo
)

// 6. 控制函数执行的次数
let count = 0
// 这边的lenght 制定了函数执行的次数
var ary7 = Array.from({ length: 6 }, () => {
  console.log(++count)
})
console.log(tempIndfo)

// 7.Array.of  用于将一组值转换成数组
var ary7 = Array.of(1, 2, 3, 4)
console.log(`ary7:${ary7}`)

// 8. copytWithin
