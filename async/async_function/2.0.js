/* async 的用法 */
function timeout (ms) {
	return new Promise(resolve => {
		setTimeout (resolve, ms)
	})
}

function timeout1 (ms) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			reject('reject with no reason')
		}, ms)
	})
}

// async 函数本返回的是一个 promise 对象
async function asyncPrint (value = 'hello, world', ms = 1000) {
	// await 后面需要跟的是一个 promise 对象， promise resolve 之后，后面的内容才会执行
	await timeout(ms)
	console.log('await 1 完成')
	
	// 如果这边 reject 了，会直接到 asyncPrint 的 catch 部份
	await timeout1(ms)
	console.log('await 2 完成')

	console.log(value)
	// async 函数内部 return 语句返回的，会成为 then 方法回调函数的参数
	return {
		ownerName: '',
		timestamp: Date.now
	}
}

/* 1. async 函数执行的返回值是一个 promise 对象
   2. async 函数返回的 Promise 对象，必须等到内部的所有 await 命令后面的 promise 执行完毕，才会发生状态改变
   3. 只有 async 函数内部的异步操作执行完，才会执行then方法指定的回调函数。
	 4. 如果遇到 return 语句 或者 报错或者 内部的 reject，会提前执行 then 语句
*/
asyncPrint().then(record => {
	console.log(`done by ${record.ownerName} at ${record.timestamp}`)
	return 'log 信息已经打出来了'
}).then(info => {
	console.log(info)
	throw new Error('出错了')
}).catch (err => {
	// 错误信息可以在 catch 里面被捕获到
	console.log(err)
})

console.log('在asyncPrint 之后，但是在他之前执行')






