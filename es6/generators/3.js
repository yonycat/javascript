function* nextParam () {
	yield 1
	yield 2
	yield 3
	return 4
}

var nextP = nextParam()

console.log(nextP.next(true))