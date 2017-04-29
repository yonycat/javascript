setTimeout(() => {
	console.log(4)
}, 0)

var p1 = new Promise((resolve => {
	console.log('p1')
	setTimeout(() => {
		resolve('resolve in p1')
	}, 0)
}))

p1.then((info) => {
	console.log(info)
})

var p2 = new Promise((resolve => {
	console.log('p2')
	setTimeout(() => {
		resolve('resolve in p2')
	}, 0)
}))

p2.then(info => {
	console.log(info)
})

new Promise(resolve => {
	console.log('p3')
	resolve('resolve in p3')
}).then(info => {
	console.log(info)
})

console.log(3)

// p1, p2, p3, 3, resolve in p3, 4, resolve in p1 , resolve in p2
/*
	resolve 会在本轮事件的结尾执行
	setTimeout 会在下轮事件的开始执行， 0， 经过 0 就去询问， 1000， 经过 1000 后再去询问
*/