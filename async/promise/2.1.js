/*
	Promise 实例之间的依赖
*/
var p1 = new Promise((resolve, reject) => {
	console.log('p1 created')
	// resolve('hello, world')
	reject('rejected in p1')
})
var p2 = new Promise((resolve, reject) => {
	console.log('p2 created')
	// p1 将 p1 的异步操作结果传递给 p2
	resolve(p1)
})

p2.then(info => {
	console.log(info)
}).catch(err => {
	console.log(err)
})