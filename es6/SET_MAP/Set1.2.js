// Array.from(set) 方法可以将 set  转换成 数组

// 引用1： 数组去重
var ary = [1,2,3,4,7,191,1,1,1,1,1]

function dedupe (ary) {
	return Array.from(new Set(ary))
}

var dedupeAry = dedupe(ary)
console.log(...dedupeAry)