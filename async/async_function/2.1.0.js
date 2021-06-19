/* 实例1 */
function timeout1(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolve in timeout1')
    }, ms)
  })
}

function timeout2(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('reject in timeout2')
    }, ms)
  })
}

async function fetchSth() {
  /*
   1. 只有 await 后面的 是 resolve ,await 后面的语句才会执行
  */
  await timeout1(100)
  console.log('await timeout1(100) 完成')
  /*
    1. await 后面的 Promise 对象是 reject 结果会跳到  catch 部分
    2. 且 await 后面的表达式不在被执行
    3. 报错会跳转到 catch 部分
    4. catch 里面的 err 会是 reject 的原因或者 报错的 Error 对象
  */
  await timeout2(100) // 这边的 await reject， 后面的语句不被执行
  console.log('await timeout2(100) 完成')
}

/*
  1. then 只有在 async 函数的 await 都是 resolve 的或者 其中哪一个步返回了 return 语句，才会到 async函数执行的 then
  的这一个步骤
  2. data 是 return 的值, 如果没有 return 值， data 是 undefined
*/
fetchSth()
  .then((data) => {
    console.log(`log in then: ${data}`)
  })
  .catch((err) => {
    console.log(`log in catch: ${err}`)
  })
