/*Promise.prototype.then 方法 */


var p1 = new Promise ((resolve, reject) => {
	resolve ({
		person: {
			name: 'alice',
			age: 18
		},
	})
	// then 方法返回的是一个新的 Promise 实例（注意不是原来那个 Promise 实例），故可以采用 链式写法
	// 上一个 then 返回的值，将会做为下一个 then 函数的 resolve 回调函数的参数
}).then(info => {
	// 返回了值，就被视为 resolved , 且 resolve 的值就是 返回的值
	// return false 并不会跳到 catch 中
	return info.person
}).then( ({name, age}) => {
	console.log(`${name}, ${age}`)
}).catch(() => {
	console.log('catched')
})


var p2 = new Promise((resolve, reject) => {
	// Promise.reject('catched')
	reject()
	// catch 方法会在 then 的链式调用中某个回调函数 reject 或者 报错了时，调用
  // 编码建议：总是使用 catch
	// 和传统 try, catch 相比， 如果 catch 没执行，不会报错到外层代码，也就不会被捕获
}).catch((info) => {
	console.log(info)
	// catch 方法返回的还是一个 Promise 对象，故可以继续调用 then 回调函数(前提是没有调用 Promise.reject)
}).then(() => {
	console.log('harry on')
})