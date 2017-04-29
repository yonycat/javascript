/*
	多个 Promise 实例间，谁的状态先变，就执行后面的 then 或者 catch
*/
var p1 = Promise.race([1,2,3,4].map((value) => {
	return new Promise((resolve, reject) => {
		var random = parseInt(Math.random() * 10)
		let duration = random * 1000
		if (random % 2) {
			setTimeout(() => {
				resolve({value, duration})
			}, duration)
		} else {
			setTimeout(() => {
				reject({value,duration})
			}, duration)
		}
	})
})).then((info) => {
	console.log('resolve')
	conole.log(info)
}).catch(err => {
	console.log('rejected')
	console.log(err)
})