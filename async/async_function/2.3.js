/*
await 命令使用注意点：
	1. 最好把 await 命令包含在 try catch 中，或者 await 命令后的加catch 命令进行跟进
	2. 如果两个 await 命令间不是继发关系，最好让他们同步执行
	3. await 只能用于 async 函数中
*/

// demo1

function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('alice'), 2000)
  })
}

function getAge() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('18'), 0)
  })
}

async function getUserInfo() {
  var user = {
    name: 'noOne',
    age: 'unkown',
  }

  await getName()
    .then((username) => {
      user.name = username
    })
    .catch((e) => {})

  await getAge()
    .then((age) => {
      user.age = age
    })
    .catch((e) => {})
  return user
}

getUserInfo()
  .then((user) => {
    console.log(`user: ${user.name}, ${user.age}`)
  })
  .catch((e) => {
    console.log(e)
  })

// 改进为

var username = getName()
var userAge = getAge()

let user = {}

Promise.all([username, userAge])
  .then(([username, age]) => {
    user.name = username
    user.age = age
    return user
  })
  .then((user) => {
    console.log(`user in Promise.all: ${user.name}, ${user.age}`)
  })

/*
	输出结果：
	user in Promise.all: alice, 18
	user: alice, 18
	显然第二种方法比第一种方法快的多
*/

//改进方法2
var namePromise = getName()
var agePromise = getAge()

var userDemo2 = {}
// 这边报错，不知道为啥
// 这边错的原因是 await 没有用在 async 函数中
userDemo2.age = await agePromise
userDemo2.name = await namePromise
console.log(`userDemo2: ${userDemo2.age}, ${userDemo2.name}`)
