const { Map } = require('immutable')
const map1 = Map({ a: '1', b: '2' })
const map2 = map1.set('a', 'map2')

// points to difference memory place
console.log(map1 === map2)

map2.set('a', '23')
// 1, as the map1 can't changed once it is being created by immutable
console.log(map2.get('a'))

console.log(map2 === map1)
