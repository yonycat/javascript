var p1 = new Promise((resolve, reject) => {
	reject()
})

p1.then(() => {
	console.log('call then of p1')
	// 如果没被reject 或者报错，会跳过这个 catch ,直接执行后面的 then
}).catch(() => {
	console.log('catch')
}).then(() => {
	console.log('carry on')
})

// catch 后面可以再跟进 catch， 用来处理 catch 里面的报错