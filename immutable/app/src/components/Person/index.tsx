import * as React from 'react'
import { IPerson } from '../../types'

export const Person: React.FC<IPerson> = ({ name, age }) => (
  <div aria-label={'people-' + name}>
    <p>
      <strong>Name: </strong>
      <span>{name}</span>
    </p>
    <p>
      <strong>Age: </strong>
      <span>{age}</span>
    </p>
  </div>
)
