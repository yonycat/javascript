const ary = [{
	name: 'alice',
	age: 26
}, {
	name: 'yujia',
	age: 28
}]

var filtedPerson = ary.filter((curValue, curIndex, ary) => {
	return true
})
console.log(filtedPerson)