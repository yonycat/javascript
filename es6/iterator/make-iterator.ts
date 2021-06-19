interface Iterable<T> {
  [Symbol.iterator]: Iterator<T>
}

interface Iterator {
  next(value: any): IteratorResult<{ any; done: boolean }>
}
