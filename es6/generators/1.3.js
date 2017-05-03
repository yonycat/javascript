/* 一个 generator 的小例子 */

let ary = [1, [[2,3],4], [5,6]]

let flat = function* (ary) {
	let len = ary.length
	
	for (var i = 0; i < len; i++) {
		var item = ary[i]
		if (typeof ary !== 'number') {
			yield* flat(item)
		} else {
			yield item
		}
	}
}

for (var f of flat(ary)) {
	console.log(f)
}
