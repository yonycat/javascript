const { List } = require('immutable')

const petsList = List(['cat', 'dog'])

console.log(petsList.contains('cat'))
