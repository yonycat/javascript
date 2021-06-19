const it = makeIterator(['a', 'b'])

it.next()
it.next()
it.next()

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
