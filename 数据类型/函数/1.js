/*1. 为函数指定默认值*/
function sayHello (name='alice', from='Betty') {
	console.log(`hello, ${name}, This hello from ${from}`)
}
sayHello()
/*
	1. 有利于代码的阅读性
	2. 未来拿掉这个参数，代码也可以运行
*/


/*2. 参数变量是默认声明的， 所以不能再次用 let/const 再次声明*/

function foo (x=4) {
	// let x = 10 //报错
	// const x = 10 //报错
	try {
		// 新的块作用域，不会报错
		let x = 1
	} catch(e) {
		console.log('不能再次声明和参数名一样的变量')
	}

	try {
		const x = 1
	} catch(e) {
		console.log('不能再次声明和参数名一样的变量')
	}
}
foo()

