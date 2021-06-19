/**
 * Deeper clone source to a new Object
 */
function clone(source) {
  const proto = Object.getPrototypeOf(source)
  return Object.assign(Object.create(proto), source)
}

/**
 * Add properties for an object
 */
class Point {
  constructor(x, y) {
    Object.assign(this, { x, y })
  }
}

/**
 * Add methods for an object
 */
class Human {}
Object.assign(Human.prototype, {
  sayHi() {
    console.log('hi')
  },
  SayNo() {
    console.log('no')
  },
})

const person = new Human()
person.sayHi()

/**
 * __proto__ internal, private property
 */

console.log(person.__proto__)

/**
 * The value for Object.prototype.__proto__ is null
 */
console.log(Object.prototype.__proto__)

/**
 * Object.setProtoTypeOf set the __proto for an object
 */

class Animal {
  constructor({ age, name, breed }) {
    Object.assign(this, { breed, age, name })
  }

  logInfo() {
    //   iterator property on object, properties on __proto__ is not included
    Object.keys(this).map((key) => {
      console.log(key.trim(), ':', this[key])
    })
  }
}

class Cat extends Animal {
  constructor(owner, age, name) {
    super({ age, name, breed: 'Cat' })
    Object.assign(this, { owner })
  }
}

new Cat('Kate', 1, 'cat').logInfo()

class People {
  constructor({ name, age, gender }) {
    Object.assign(this, { name, age, gender })
  }
}

class Developer {
  constructor({ title, name, age, gender }) {
    /**
     * Set the __proto__ for an object
     */
    Object.setPrototypeOf(this, new People({ name, age, gender }))
    Object.bind(this, { title })
  }
}

console.log(
  new Developer({
    title: 'FE',
    name: 'Ju',
    age: 28,
    gender: 0,
  }).age
)
