es6 中可以使用 凡撇号 来定义字符串
```javascript
var str = `hello, alice`
console.log(str)
```
模板字符串可以提供简单的字符串插值功能
```javascript
function authorize(user, action) {
  if (!user.hasPrivilege(action)) {
  	//${user.name}和${action}被称为模板占位符
    throw new Error(
      `用户 ${user.name} 未被授权执行 ${action} 操作。`);
  }
}
```