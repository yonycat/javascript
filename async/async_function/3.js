/*await 处理命令*/
async function f() {
  return await 123
}

/*正常情况下，await 命令后面是一个 Promise 对象。如果不是，会被转成一个立即 resolve 的 Promise 对象。*/
f().then((v) => {
  console.log(v)
})

/* await 命令后面的 Promise 对象如果变为 reject 状态，则 reject 的参数会被 catch 方法的回调函数接收到。*/
async function f2(params) {
  await Promise.reject('出错了')
  // 一个 await 报错，后面的 await 都不会执行
  await Promise.resolve('hello')
}

f2()
  .then((v) => {
    console.log(v)
  })
  .catch((e) => {
    console.log(e)
  })

async function f3() {
  return await Promise.reject('出错了f3')
}

f3()
  .then()
  .catch((err) => {
    console.log(err)
  })

/* 错误处理： 避免后面的 await 不会执行 */

// 错误处理方式 1
async function f1() {
  // 这边加上 try， 避免出错
  try {
    await Promise.reject('some error')
  } catch (e) {}

  return Promise.resolve('hello, world')
}

f1().then((v) => {
  console.log(v)
})

// 错误处理方式 2
async function f2() {
  await Promise.reject('error').catch((e) => {
    console.log(e)
  })
  return await Promise.resolve('hello, world2')
}

f2().then((v) => {
  console.log(v)
})
