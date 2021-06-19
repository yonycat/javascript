function makeIterator(array) {
  let nextIndex = 0
  return {
    next: function () {
      /**
       * next: () => { this points to global object}
       * next: function() {this points to current object}
       */
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { value: undefined, done: true }
    },
  }
}

const it = makeIterator(['a', 'b'])

let result = { done: false, value: undefined }

while (result.done !== true) {
  result = it.next()
  console.log(result)
}
