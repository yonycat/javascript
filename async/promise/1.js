/*
	resolve  pending -> resolved
	reject   pending -> reject
*/
var promise1 = new Promise((resolve, reject) => {
	console.log(`call promise constructor<br>`)
	setTimeout(resolve('hello, world'), 1000)
	// promise 的状态已经被敲定，无法再修改
  setTimeout(reject('error'), 1000)
})

promise1.then(p => {
	console.log(p)
	// catch 在 rejected 或者前面的方法流中报错后执行
}).catch(() => {
	console.log('erro or rejected')
})

console.log(promise1)

