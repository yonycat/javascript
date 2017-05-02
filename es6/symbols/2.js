// 1.0 Symbol 定义为 对象的属性
var symbol1 = Symbol('name')
var person = {
	// 因为其唯一性，常用来做为对象的唯一性标志
	// 设置的时候，要用[]
	// 设置 Symbol的时候，该属性是公开属性
	[symbol1]: 'alice'
}
// 读取这个Symbol类型的属性的时候，要用 []
console.dir(person[symbol1])

//1.1 获取对象的Symbol 定义的属性：getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(person))
// 2. Symbol 定义一组常量信息,这样的好处是各个常量间是不相等的
const STEP = {
	PLAN: Symbol('plan'),
	DEVING: Symbol('deving'),
	TEST: Symbol('testing'),
	PROD: Symbol('production')
}
//