function sayName() {
  console.log(this.name)
}
// 将这个函数的执行的 this 关键字转换为 bind函数的参数
var sayMyName = sayName.bind({name: 'alice'})
sayMyName()
