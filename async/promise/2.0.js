/*resolve 回来另外一个参数*/

var promise1 = new Promise((resolve, reject) => {
	// resolve另外一个 promise 对象，会得到这个promise 对象 传递出来的值
	setTimeout(resolve(resolvePromise('resolve1').then(info => {
		console.log(info)
		return 'resolved by promise from resolvePromise function'
	})), 1000)
})



function resolvePromise (info) {
	console.log(info)
	return new Promise((resolve, reject) => {
		resolve('resolve in another promise')
	})
}

promise1.then(info => {
	console.log(info)
}).catch((err) => {
	console.log('err catch')
})
