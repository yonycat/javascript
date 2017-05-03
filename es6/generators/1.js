// 推荐写法，* 跟在 function 后面
function* helloWordGenerator () {
	console.log('生成一个gennerator函数')
	// yield 将后面的表达式的值， 作为返回对象的 value
	// 遇到一个 yiled 
	yield 'hello'
	console.log('called hello yield')
	yield 'world'
	console.log('called world yield')
	return 'ended'
}

// 执行结果是一个返回的内部状态的指针对象
let hw = helloWordGenerator()

// 通过 next  函数进行状态机切换
console.log(hw.next()) // {value: hello, done: false}
console.log(hw.next()) // {value: world, done: false}
console.log(hw.next()) // {value: ended, done: true}
console.log(hw.next()) // 这个和之后的，都是{value: undefined, done: true}
console.log(hw.next())
console.log(hw.next())


function* helloAgain () {
	console.log('生成另外一个生成器函数')
	yield 1
	yield 2
	return 3
}

let ha = helloAgain()

console.log(ha.next())
console.log(ha.next())
console.log(ha.next())
console.log(ha.next())