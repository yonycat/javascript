const human = {
  name: '',
  age: '',
}

human.__proto__ = {
  breed: 'humman',
  isHuman: true,
}

/**
 * Creating a person object.  The newly created object's __proto__ points to human
 * */
const person = Object.create(human)
person.name = 'Jun'
person.age = 38
console.log(person.__proto__ === human)
console.log(human.breed)

console.log(person.__proto__.__proto__)
