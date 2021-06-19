/*1. ..rest 参数，搭配的是数组*/
function sum(...values) {
  let sum = 0
  for (var val of values) {
    sum += val
  }
  return sum
}
var sumValue = sum(11, 22, 33)
console.log(sumValue)

function pushToArray(array = [], ...items) {
  for (var item in items) {
    // 不 + ,这边输出的是指
    array.push(+item)
  }
  return array
}
console.log(pushToArray([], 12, 34, 33))
