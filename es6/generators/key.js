// generate a generator function to print the key of a object
function sayKeyValue* (paramObject) {
	for (var key in paramObject){
		yield key
	}
}

var sayPersonKeyValue = sayKeyValue({
	name: 'alice',
	age: 18
})
