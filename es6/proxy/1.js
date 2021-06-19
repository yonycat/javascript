// 1. 语法： Proxy(target, handler), get API, set API
// 空对象架设了一层拦截，重定义了属性的读取（get）和设置（set）行为
var temp = {}
var obj = new Proxy(temp, {
  set(target, property, value, receiver) {
    console.log(`call set, property: ${property}, value:${value}`)
    target[property] = value
  },
  get(target, property, receiver) {
    console.log(`call get, get property ${property}`)
    return target[property]
  },
})
// Proxy 实际上重载（overload）了点运算符, 对 proxyed 对象调用点运算符的时候，会执行重载后的方法
obj.name = 'hello world'
console.log(`obj.name: ${obj.name}`)

// 修改 proxy 的一个值，target 对象的值也会改变
console.log(`temp.name: ${temp.name}`)

temp.age = 18
console.log(temp, temp.age)
console.log(obj.age)
console.log(temp === obj)
// 说明，两个对象的内存地址不相同，1、但是指向的存储值的地方是相同的，2、

// // 2. handler 为空
// var tmp1 = {}
// var proxyP1 = new Proxy(tmp1, {})
// proxyP1.name = 'hello'
// console.dir(proxyP1)
// console.dir(tmp1)
// console.log(tmp1 === proxyP1)
