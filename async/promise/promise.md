###promise 对象
#####promise 有三种状态
1. Pending  Resolved  Rejected
2.状态的转化只能是 ：Pending -> Resolved ; Pending -> Rejected
状态一旦发生改变，就一直保持变化后的结果，添加的回调函数也可以被执行，而事件是不行的。

###promise 也可以返回另外的promise对象
```javascript
var p1 = new Promise(function (resolve, reject) {
  // ...
});

var p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})
```
###promise.prototye.then
promise.then 方法返回的时一个新的promise实例(不是原来的那个promise实例),故可以采用链式写法;
```javascript
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
promise2.then((data) => {
    if (data.status) {
        return data.data
    }
}).then((person) => {
    console.log(person)
}).catch((error) => {
    console.log(error)
})

```
上面的代码使用then方法，依次指定了两个回调函数。第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。
###promise.prototype.catch()
Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。

通常建议这种写法:

```javascript
var promise = new Promise((resolve, reject) => {
  if(flag) {
    resolve({status:200})
  } else {
    reject((status:-200))
  }
});
promise.then(()=>{})
       .then(()=>{})
       .catch(()=>{})
```
这样更接近于catch方法，而且也总有 catch来处理then中的 reject
####catch
promise中，无catch ,new Promise 的这个过程的错误无法被捕获,也不会报任何错误，所以推荐总是有catch


####promise.all Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。
promise.all -> Pending->fullfiled
promise.all -> 其中某个被rejected了，整个的状态就变成了 rejected
