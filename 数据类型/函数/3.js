/*4. 与结构复制默认值结合使用*/
// 对象解构赋值默认值，只有当函数参数是个对象的时候，默认值设定才会起效
function sbSaySth({ sb = 'alice', sth = 'hello' }) {
  console.log(`${sb} say ${sth}`)
}
try {
  sbSaySth()
} catch (e) {
  console.log(
    '对象解构赋值默认值，只有当函数参数是个对象的时候，默认值设定才会起效'
  )
  sbSaySth({})
}

/*4.1 双重默认参数解决问题*/

function sbSaySthv2({ sb = 'alice', sth = 'hello' } = {}) {
  console.log(`${sb} say ${sth} in sbSaySthv2`)
}

sbSaySthv2()

// notes test
function foo({ x, y } = { x: 0, y: 0 }) {
  return {
    x,
    y,
  }
}
// 赋值默认值要用 =
function foo2({ x = 0, y = 0 } = {}) {
  return {
    x,
    y,
  }
}

/*4.1 参数默认值的位置
	通常情况下：定义默认值的参数，应该是函数的尾参数。 原因是能比较明显的看出来省略了啥参数；
	其次，默认参数的位置是非尾参数，这个参数是没法省略的
*/

function demo(x = 1, y) {
  console.log(`${x}, ${y}`)
}

/*4.2 指定了默认之后，函数将返回没有指定默认值的参数的个数*/
console.log(function demo1(a) {}.length)
