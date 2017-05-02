// 推荐写法，* 跟在 function 后面
function* helloWordGenerator () {
	console.log('生成一个gennerator函数')
	yield 'hello'
	yield 'world'
	return 'ending'
}
// 执行结果是一个返回的内部状态的指针对象
var hw = helloWordGenerator()

console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())