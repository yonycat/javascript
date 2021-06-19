const date = new Date()
// 根据本地时间返回指定日期对象的月份中的第几天（1-31）
let day = date.getDate()
//根据本地时间返回指定日期对象的星期中的第几天（0-6)
let weekDay = date.getDay()
//根据本地时间返回指定日期对象的年份（四位数年份时返回四位数字）
let year = date.getFullYear()
//根据本地时间返回指定日期对象的分钟（0-59)
let minute = date.getMinutes()
// 根据本地时间返回指定日期对象的月份（0-11）
let month = date.getMonth()
// 根据本地时间返回指定日期对象的秒数（0-59）
let second = date.getSeconds()
// 返回一个表示该日期对象日期部分的字符串，该字符串格式与系统设置的地区关联（locality sensitive）。，比如:'2016/10/22'
let localDate = date.toLocaleDateString()
