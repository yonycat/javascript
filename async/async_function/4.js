/* async, await 使用注意点
	1. 最好把 await 命令放在 try catch 中
	2. 多个 await 命令，如果不存在继发关系，最好让他们同时触发
	3. await 只能用在 async 函数中，不然会报错
 */

function getFoo () {}
function getBar () {}

let foo = await getFoo()
let bar = getBar()

let [foo, bar] = await Promise.all([getFoo(), getBar()])


// @todo 缺少实例