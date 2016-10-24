###什么是结构赋值
解构赋值允许你使用类似数组或对象字面量的语法将数组和对象的属性赋给各种变量。
```javascript	
//declare and asign a value
var [first,next,third] = [1,2,3]
console.log(first,next,third)
```

###可以在对应位留空来跳过被解构数组中的某些元素：
```javascript
let [,,orderNo] = [1,2,3]
console.log(orderNo)
```