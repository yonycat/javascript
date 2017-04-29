let p1 = new Promise((resolve, reject) => {
	let now = Date.now()
	console.log(`创建 p1实例对象 ${now}`)
	setTimeout(() => {
		let now = Date.now()
		console.log(`resolve p1  ${now}`)
		resolve()
	}, 3000)
})

let p2 = new Promise((resolve, reject) => {
	let now = Date.now()
	console.log(`创建 p2 实例对象 ${now}`)
	setTimeout(() => {
		let now = Date.now()
		console.log(`before resolve p2  ${now}`)
		resolve(p1)
	}, 1000)
}).then(() => {
	let now = Date.now()
	console.log(`p1 resolved ${now}`)
})