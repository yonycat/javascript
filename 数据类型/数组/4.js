let ary = [12,23,33,45]

// 1. keys, entries, values 返回的是一个iterator 对象
var keyIterator = ary.keys()

console.log(keyIterator.next())

// var valueIterator = ary.values()
// console.log(valueIterator.next())


// 数组的扩展
let employee = [{
	name: 'alice',
	age: 24
}, {
	name: 'betty', 
	age: 25
}]

let copyEmployee = [...employee]
console.log(copyEmployee[1] === employee[1]) // 这边是相等的，内容是都复制了

console.log(copyEmployee === employee) // 这边两个是不等的
