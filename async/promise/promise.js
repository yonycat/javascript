var flag = false
var promise = new Promise(function(resolve, reject) {
    if (flag) {
        // Pending -> Resolved
        // 异步操作的结果，作为参数传出去
        resolve({ status: true })
    } else {
        // Pending -> Rejected
        // 异步操作的结果，作为参数传出去
        reject({ status: false })
    }
})

promise.then((val) => {
    // 成功回调
}, (val) => {
    // 失败回调,可选提供
})

var promise2 = new Promise((resolve, reject) => {
    if (flag) {
        resolve({
            status: 'ok',
            data: {
                person: 'alice',
                age: 26
            }
        })
    } else {
        reject({
            status: 'failed',
            data: {
                message: 'No this user'
            }
        })
    }
});
// 这边的then 方法可以一路对数据进行pipe处理
// 链式调用，依次的回调函数,如果then中返回的promise,下一个then中的回调函数会等到这个返回的promise状态变化后，再调用
promise2.then((data) => {
    if (data.status) {
        return data.data
    }
}).then((person) => {
    console.log(person)
}).catch((error) => {
    console.log(error)
})

// catch 的案例
// 这边没有定义flag对象
var promise3 = new Promise((resolve, reject) => {
    if (flag) {
        resolve({
            status: 200,
            data: {
                person: {
                    name: 'alice',
                    profession: 'FEE'
                }
            }
        })
    } else {
        // reject的作用等同于抛出error
        reject({
            status: -200,
            data: {
                messag: 'No this person'
            }
        })
    }
});
promise3.then((data) => {
    console.log(data)
}, (data) => {
    // 有了rejection回调,catch里面的就不会执行
    console.log(data)
}).catch((error) => {
    console.log(error)
})
// 推荐写法,不要在then方法里面定义 Reject状态的回调函数，总是使用catch方法

