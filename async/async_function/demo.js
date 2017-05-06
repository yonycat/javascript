async function sayHi () {
	let user =  await Promise.resolve('Hi')
	return user
}
var Hi = sayHi()
