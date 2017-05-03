// 推荐写法，* 跟在 function 后面
function* helloWordGenerator () {
	console.log('生成一个generator 函数')
	// 遇到 yield 会暂停执行 yield 后面的操作，然后会把 yiled 后面这个表达式的值，作为返回对象的 value
	// yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值
	yield 1
	console.log('-yield 1 has done, called after yield 1-')
	// yiled 关键之只能在 generator 函数里面使用	
	yield 2
	console.log('-yield 1 has done ,called after yiled 2 -')

	// 该 gennerator 函数没有 return 值，故最终的值将是 ({value: undefined, done: true})
}

let hw = helloWordGenerator()

console.log(hw.next()) // ({value: 1, done: false})
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())

console.log('------demo1 end--------')


