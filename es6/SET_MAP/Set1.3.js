// 应用

// 1. 数组去重

var ary1 = [111,1,1,13,1,2.1,12,1,1]
var ary2 = Array.from(new Set(ary1))

console.log(ary1, ary2)


// 2. 数组求交集

var set1 = new Set(ary1)
var ary3 = [111, 22,1,1,1,1,1, 13]
var set2 = new Set(ary3)

var intersect = Array.from(set1).filter(item => {
	if (set2.has(item)) {
		return item
	}
})

console.log(intersect)


// 3.求并集

var ary4 = [1,1,1,1,1,1,4,4,4,4,4999,22]
var ary5 = [1,1,99,88]
var set4 = new Set(ary4)
ary5.forEach(function(item, index, ary) {
	if (!set4.has(item)) {
		set4.add(item)
	}
})
console.log(set4)