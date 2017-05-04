async function hello () {
	// await 能解析 resolve 的值
	var res =  await Promise.all([1.2])
	console.log(res)
	return res
}
// hello()

function getName () {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve('alice'), 2000)
	})
}

function getAge () {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve('18'), 0)
	})
}


async function getUserInfo () {
	let username = await getName()
	let age = await getAge()
	return {
		username,
		age
	}
}
var user = getUserInfo ().then(user => {
	console.log(user)
})