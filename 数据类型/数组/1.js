//  1. some IE9 用于判断数组面是否有满足指定条件的数据

var ary = [12, 23, 34]
var hasEventNum = ary.some(function (value, currentIndex, curAry) {
  return value > 25
})

// 2. filter() 方法使用指定的函数测试所有元素，并创建一个包含所有通过测试的元素的新数组 IE9
var eventNums = ary.filter(function (value, index, arry) {
  return value % 2
})
// console.log(eventNums)

// 3. map() 方法创建一个新数组，其结果是该数组中的每个元素调用一个提供的函数
var x2Ary = ary.map(function (value, index, array) {
  return value * 2
})
// console.log(x2Ary)

// 4. forEach
ary.forEach(function (value, index, ary) {
  // console.log(`${index}: ${value}`)
})
/* 1.司徒正美forEach: http://www.cnblogs.com/rubylouvre/archive/2009/11/10/1599978.html */

// 5. reduce  IE9 直接兼容
var ary2 = [
  {
    value: 1,
  },
  {
    value: 2,
  },
  {
    value: 3,
  },
]
var sumOfAry2 = 0
//  积累的值，当前项的值, 当前项的索引，当前被操作的数组
var sumOfAry2 = ary2.reduce(function (accValue, curItem, curIndex, ary2) {
  return accValue + curItem.value
  // 0 是初始值
}, 0)

console.log(sumOfAry2)

// slice  && splice
var ary3 = [12, 23, 34, 45]
var sliceAry = ary3.slice(1, 3)
// slice 方法原数组没变
console.log(`${ary3}, ${sliceAry}`)
// 原数组被裁掉了,返回的是操作后的结果
// arrayObject.splice(index,howmany,item1,.....,itemX)
var spliceAry = ary3.splice(0, 2)
console.log(`${ary3}, ${spliceAry}`)
// @todo
var spliceAry2 = [31, 32, 33].splice(0, 2, 11, 22)
console.log(spliceAry2)
