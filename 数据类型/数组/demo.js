let employee = [
	{name: 'alice', age: 18},
	{name: 'zhang', age: 21}
]
let ary = [...employee]
console.log(ary[1] === employee[1])