var fs = require('fs')

var readFile = function (filename) {
	return new Promise(function (resolve, reject) {
		fs.readFile(filename, function (err, data) {
			if (err) {
				reject(err)
			}
			resolve(data)
		})
	})
}

var gen = function* () {
	var file1 = yield readFile('/etc/fstab')
	var file2 = yield readFile('/etc/fstab')

	console.log(file1.toString())
	console.log(file2.toString())
}

// 改进为：
var asyncReadFile = async function () { 
	var f1 = await readFile('/etc/fstab')
	var f2 = await readFile('/etc/shells')
	console.log(f1.toString())
	console.log(f2.toString())
}

asyncReadFile()

/*
1. async 函数的优点：
	1） 内置执行器，无需如 gennerator 那样调用 next
	2) async 表示函数里面有异步操作，await 表示紧跟后面的表达式需要等待结果
*/