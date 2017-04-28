/*async 函数的错误处理方式*/

async function timeout (ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms)
	})
}

