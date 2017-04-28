/* async 的用法 */
function timeout (ms) {
	return new Promise(resolve => {
		setTimeout (resolve, ms)
	})
}

// async 函数本事返回的是一个promise 对象，这个 async 函数的返回值，
async function asyncPrint (value = 'hello, world', ms = 1000) {
	// await后面需要跟的是一个 promise 对象， promise resolve 之后，后面的内容才会执行
	await timeout(ms)
	console.log(value)
	// async函数内部return语句返回的值，会成为then方法回调函数的参数
	return {
		ownerName: '',
		timestamp: Date.now
	}
}

// async 函数执行的返回值是一个 promise 对象
asyncPrint().then(record => {
	console.log('done by ${record.ownerName} at ${record.timestamp}')
	return 'log 信息已经打出来了'
}).then(info => {
	console.log(info)
	throw new Error('出错了')
}).catch (err => {
	// 错误信息可以在 catch 里面被捕获到
	console.log(err)
})

console.log('在asyncPrint 之后，但是在他之前执行')




