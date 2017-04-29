/*Promise.all
	1. all 方法里面的每一个参数都必须是 Promise 实例，如果不是:会调用Promise.resolve方法，将参数转为Promise实例
	2. 只有 all 里面的每个 Promise 实例的状态都是 resolve，才会执行后面的  then，否则会执行  catch
*/
let p1 = Promise.all([1,2,3,4,5].map((value, index, ary) => {
	console.log(1)
	return new Promise((resolve, reject) => {
		if (value % 2) {
			resolve(value)
		} else {
			reject(value)
		}
	})
})).then().catch(() => {
	console.log(2)
})

// Promise.resolve 创建的 Promise 对象，总会被resolve， 也就是会调用 then
console.log(Promise.resolve(3))

let p2 = Promise.all([1,2,3,4,5].map((value, index, ary) => {
	console.log(4)
	return new Promise((resolve, reject) => {
		resolve(value)
	})
	// 值是各个 resolve 的值构成的数组
})).then((values) => {
	console.log(values)
})