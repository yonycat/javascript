function timeout (ms) {
	return new Promise(resolve => {
		setTimeout (resolve, ms)
	})
}
// async 函数本事返回的是一个promise 对象，这个async 函数的返回值，
async function asyncPrint (value = 'hello, world', ms = 1000) {
	// await后面需要跟的是一个 promise 对象， promise resolve 之后，后面的内容才会执行
	await timeout(ms)
	console.log(value)
	return {
		ownerName: '',
		timestamp: Date.now
	}
}
// async 函数执行的返回值，会做 then 回调函数的参数
asyncPrint().then(record => {
	console.log('done by ${record.ownerName} at ${record.timestamp}')
})

console.log('在asyncPrint 之后，但是在他之前执行')





