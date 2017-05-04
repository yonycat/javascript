/* 实例1 */
function timeout1 (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolve in timeout1')
    }, ms)
  })
}

function timeout2 (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('reject in timeout2')
    }, ms)
  })
}

async function fetchSth () {
  /*
   1. 只有 await 后面的 是 resolve ,await 后面的语句才会执行
  */
  await timeout1(100)
  console.log('await timeout1(100) 完成')
  /*
    1. await 后面的是 reject 会跳到  catch 部分
    2. 且 await 后面的表达式不在被执行
    3. 报错会跳转到 catch 部分
  */
  await timeout2(100) // 这边的 await reject， 后面的语句不被执行
  console.log('await timeout2(100) 完成') 
}

fetchSth().then(data => {
  console.log(`log in then: ${data}`)
}).catch(err => {
  console.log(`log in catch: ${err}`)
})
