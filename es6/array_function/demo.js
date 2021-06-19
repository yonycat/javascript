// 箭头函数没有它自己的this值，箭头函数内的this值继承自外围作用域。
var person = {
  name: 'alice',
  age: 26,
  sayName: function () {
    console.log(this.name)
  },
  // 作为对象的属性方法，可以直接这样写
  sayAge() {
    console.log(this.age)
    var array = [1, 3, 5, 8, 9]
    array.forEach((item, index) => {
      // 箭头函数没有它自己的this值，箭头函数内的 this 值继承自外围作用域。
      console.log(this)
    })
    setTimeout(() => {
      console.log(
        '--------------------log from setTimeout with arrow function--------------------'
      )
      console.log(this)
    }, 10)
    setTimeout(function () {
      console.log(
        '--------------------log from setTimeout anymous function--------------------'
      )
      console.log(this)
    }, 10)
  },
}
person.sayName()
person.sayAge()
