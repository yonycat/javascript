var person = {
  name: 'alice',
  age: 18,
  familyMembers: [
    {name: 'yujia', age: 26},
    {name: 'cat-kido', age: 12},
    {name: 'cat-maoqiu', age: 10}
  ]
}

var newPerson = JSON.parse(JSON.stringify(person))

console.log(newPerson === person)
