function dojob1 () {
	// console.log('do job1')
	return {
		owner: 'alice',
		info: (new Date).toString()
	}
}
function* doJobs () {
	// 这边返回了 这个yield 后面的表达式的值
	yield dojob1()
	yield 'hello'
}
var dj = doJobs()
console.log(dj.next().value)
console.log(dj.next().value)
console.log(dj.next())