/*1. 扩展运算符
	... 好比 rest 参数的逆运算，将一个数组转换成用逗号分隔的参数序列
*/

console.log(...[1, 2, 3])

// 该运算符主要用于函数调用
function push(array = [], ...items) {
  array.push(...items)
  return array
}
// 这边记得传递值，不然会报错，因为 1 没有push 方法
var ary = push([], 1, 2, 3, 4, 5)
console.log(ary)
