// 查看 prototype 上绑定的值
// console.dir(Set.prototype)

// 1. add (value) 添加成员

// delete 删除成员, boolean 返回值，表示是否删除成功

// clear 清除所有制

// has 判断 Set 实例里面是否有某个值

var set1 = new Set()

set1.add(1).add(2)
console.log(...set1)


var set1Has1 = set1.has(1)
console.log('set1.has(1): ' + set1Has1)


var successDelete1 = set1.delete(1)

console.log(`set1 成功删除 1: ${successDelete1}`)

set1.clear()
console.log(set1.size)