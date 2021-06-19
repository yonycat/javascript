const { Map, is } = require('immutable')
const map1 = Map({ a: '1', b: '2' })
const map2 = Map({ a: '1', b: '2' })

console.log(map1.equals(map2))

console.log(is(map1, map2))

console.log(map1 === map2)
