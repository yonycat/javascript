import React from 'react'
import { IPerson } from './types'
import { Person } from './components/Person'
import faker from 'faker'
import { List } from 'immutable'

function getPerson() {
  return {
    name: faker.name.firstName(0),
    age: faker.datatype.number(120),
  }
}

const initialList = List<IPerson>([])
function App() {
  const [personList, setPersonList] = React.useState(initialList)
  const handleClick = () => {
    // returned an new instance of list
    setPersonList(personList.push(getPerson()))
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Add </button>
      <ul>
        {personList.map((person) => (
          <li key={person.name}>
            <Person {...person} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
