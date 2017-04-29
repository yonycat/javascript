var p = Promise.reject('出错了');
// 等同于
var p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s) {
  console.log(s)
})

// reject thenable 对象，返回的将是 thenable 对象
let thenable1 = {
	then (resolve, reject) {
		reject('hello')
	}
}

Promise.reject(thenable1).catch(info => console.log(info.then.length))

// resolve 得到的是  resolve 之后的结果
let thenable2 = {
	then (resolve, reject) {
		resolve('hello')
	}
}
Promise.resolve(thenable2).then(info => {
	console.log(info)
})