### TouchEvent

touch 事件在触摸屏设备上触发；可以给元素绑定相关的 touch 事件。

####1.常见的 touch 事件类型

- touchstart
  手指放在了元素上的瞬间，触发

```javascript
var oDiv = document.getElementById('oDiv')
oDiv.addEventListenter('touchstart', function (e) {
  //这行代码会阻止 click 事件的触发(本该触发的情况下，加上这行代码会阻止触发).
  e.preventDefault()
})
```

- touchmove
  手指在元素上滑动的时候，持续触发

- touchend
  手指离开设备的瞬间触发

- click
  点击元素的时候触发

- touchenter

- touchleave
