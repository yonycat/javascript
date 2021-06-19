###概览 ####函数也是对象 ####每个函数都有一个属性叫做 prototype
这个 prototype 的属性值是一个对象，默认的只有一个叫做 constructor 的属性，指向这个函数本身
![protptype](http://images.cnitblog.com/blog/138012/201409/172121182841896.png)

####Object.prototype
Object 也是一个函数，也有自己的 prototype

####隐式原型
每个函数(function) 都有一个 prototype，即原型。每个对象都有一个 **proto**，可称之为隐式原型,隐式原型指向创建这个对象的函数的 prototype 对象。
所以假设有方法 fn;

```javascript
function fn() {
  //some code
}
//fn 的原型的__proto__指向 Object.prototype
fn.prototype.__proto__ = Object.prototype //true

var f1 = new fn() //这里f1 是一个对象
f1.__proto__ === fn.prototype
```

####自定义函数的原型，也是被 Object 创建

```javascript
function fn() {
  //some code
}
//fn 的原型的__proto__指向 Object.prototype
//自定义函数的原型，也是被 Object 创建
fn.prototype.__proto__ = Object.prototype //true

var f1 = new fn()
f1.__proto__ === fn.prototype
```

但是 Object.prototype 确实一个特例——它的 proto 指向的是 null

```javascript

```

####Function
所有的 function 都是 new Function()创建出来的，所以它的 proto 也指向 Function.prototype

```javascript
function fn() {}

fn.__proto__ == Function.prototype //true
```

####Function.prototype 也是由 Object 创建出来的对象，它的 proto 也指向 Obeject.prototype

####Function 也是对象，它的 **proto**指向 function(){}

####Object 也是对象, 它的 \_\_proto 指向 function (){ }

###小结

- 是个函数就有 prototype, 函数的 prototype 都由 Object 创建。
- 是个对象就有**proto**属性，**proto**属性指向创建这个对象的函数的原型,如果这个函数创建了多个对象，则多个对象间共享这个函数的原型的数据和方法。
- 函数即是对象，又是函数，所以函数有 **proto** 和 prototype 两个值。
- Function 的 **proto** 比较特殊，指向 function (){} 这个 empty 函数
- Object 的 **proto** 指向 null
