function* f () {
	console.log('生成一个 generator 函数')
	console.log( 'Hello' + yield 2)
}

let gF1 = f()
gF1.next()
