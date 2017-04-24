let ary = [12,23,33,45]

// 1. keys, entries, values 返回的是一个iterator 对象
var keyIterator = ary.keys()

console.log(keyIterator.next())

var valueIterator = ary.values()
console.log(valueIterator.next())