/* await 命令 */

async function demo() {
  // await 命令后面不是 Promise 对象，会立即 resolve 回这个值
  return await 123
}

demo()
  .then((data) => {
    console.log(`data: ${data}`)
  })
  .catch((err) => {
    console.log(`err: ${err}`)
  })

// 使用注意点1：
// 有时候，我们希望有个 await 执行的失败，并不影响整个命令的执行
// 处理方式 1
async function handleError() {
  // 把 await 函数放到  try 里面
  // 如果有多个 await 命令， 可以把多个 await 命令放到 try catch 里面
  try {
    await console.log(x)
  } catch (e) {
    console.log(e)
  }
  return await 12
}

handleError()
  .then((data) => {
    console.log(data)
  })
  .catch((e) => {
    console.log(e)
  })
// 处理方式 2
