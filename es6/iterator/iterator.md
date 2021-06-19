# Iterator

- [Iterator in Java](https://www.w3schools.com/java/java_iterator.asp#:~:text=An%20Iterator%20is%20an%20object,util%20package.)

- Get the iterator deployed on array

```ts
const array = [1, 2, 3, 4, 5]
// iterator
const it = array[Symbol.iterator]()
let result: { value: any; done: boolean } = { done: false }
while (result.done !== true) {
  result = it.next()
  console.log(result)
}
```

- for ...of operation on data that deployed iterator

```ts
const array = [1, 2, 3]
for (let a of array) {
  console.log(a)
}
```

- An example of deploying _return_ and _throw_ method on iterator

```ts
function readLinesSync(file) {
  return {
    [Symbol.iterator]() {
      return {
        next() {
          return { done: false }
        },
        return() {
          file.close()
          return { done: true }
        },
      }
    },
  }
}
```

- The condition that triggers _return_ method on an itrator

```ts
for (let line of readLinesSync(fileName)) {
  console.log(line)
  break
}

// 情况二
for (let line of readLinesSync(fileName)) {
  console.log(line)
  throw new Error()
}
```
