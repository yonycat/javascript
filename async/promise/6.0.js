/*事件环*/
// setTimeout(fn, 0)在下一轮“事件循环”开始时执行
setTimeout(function () {
  console.log('3');
}, 0);
// 本轮 事件循环末尾执行
Promise.resolve().then(function () {
  console.log('2');
});

console.log('1');
