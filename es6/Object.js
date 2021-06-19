var array = [0, 1, 2, 3, 4]
console.log(Object.keys(array))
// array like object with random key ordering
var an_obj = { 100: 'a', 2: 'b', 7: 'c' }
console.log(Object.keys(an_obj)) // console: ['2', '7', '100']
