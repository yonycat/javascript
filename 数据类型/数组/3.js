// 1. find findIndex
let ary = [1, 2, 8, 4, 5]
let firstOldValue = ary.find(function (value, index, ary) {
  return value > 2
})
console.log(firstOldValue)

let firstOldValueIndex = ary.findIndex(function (value, index, ary) {
  return value > 2
})

console.log(firstOldValueIndex)
