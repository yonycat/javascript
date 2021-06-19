/*
	1. 引入缘由：希望有种机制，能使得对象的属性的命名是唯一的
	2. 引入Symbol后，对象的属性名可以存在两种类型: 1) 字符串类型； 2）Symbol 类型
	3. js 里面的 6 基本数据类型：Number, String, Object, Null, Undefined,Boolean, Symbol 是 js 里面引入的第 7 种基本数据类型。
*/

// Symbol 前不能用 new, 因为 Symbol 是一个原始数据类型，不是对象
var symbol = Symbol()
console.log(symbol)

// 1. symbol = Symbol(str)： 使用 字符串作为参数
var symbol1 = Symbol('symbol1')
var symbol2 = Symbol('symbol1')

// 两者并不相等，即使传递的是相同的字符串
console.log(symbol1 === symbol2)

//2. 使用对象作为参数,会调用对象的toString 值进行转化
var person = {
  name: 'alice',
  age: '永远18岁',
  toString() {
    return `${this.name}${this.age}`
  },
}
console.log(Symbol(person))

// 3. Symbol 类型的值，不能和其他类型的值进行计算, 和 symbol 类型的值进行计算
try {
  symbol1 + 1
} catch (e) {
  console.log(
    '2. Symbol 类型的值，不能和其他类型的值进行计算, 和 symbol 类型的值进行计算'
  )
  // console.log(symbol1 + symbol2)
}

// 3. symbol 可以显示的转换成 字符串 或者 布尔类型的值
console.dir(symbol1)
console.log(String(symbol2))
// 转换成 Boolean 值始终为真
console.log(Boolean(symbol1))
