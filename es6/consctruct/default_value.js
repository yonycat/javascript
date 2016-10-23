// c 没写默认值，则其隐式的默认值就是 undefined
function fn(a=1,b=2,c) {
	console.log(`a is ${a}, b is ${b},c is ${c}`)
}
fn(33,22,1)
// 传undefined 进行占位
fn(undefined, 22,11)
//传递undefined 等于没传递值
