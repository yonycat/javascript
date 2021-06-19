/*1.作用域
	1).一旦设置了参数的默认值，函数进行初始化声明的时候，参数会形成一个单独的作用域，等到初始化结束，这个作用于就会消失
	2).作用域的查找机制，都是从下向上找
	3). 虽然这个作用域消失了，但是还是不能在函数体内用 let/const 声明同名变量
*/
var x = 1
function func(x, y = x) {
  console.log(y)
}

func(2)

let x1 = 4
function func2(y = x1) {
  console.log(y)
}

func2(47)
let foo = 'outer'
function sayFoo(func = () => foo) {
  let foo = 'inner'
  console.log(func())
}
sayFoo()

/*4. 默认参数，可以用来指定某个参数不得被省略*/
function throwForMissing() {
  throw new Error('Missing parameter')
}

// 参数是运行的时候执行的
function foox1(mustBeprovided = throwForMissing()) {
  return mustBeprovided
}
foox1()
