import { React, useReducer } from 'react'

const initialState = { name: 'John', age: 30 }

const personReducer = (person, action) => {
  switch (action.type) {
    case 'updateName':
      return {
        ...person,
        name: action.payload,
      }
    case 'updateAge':
      return {
        ...person,
        age: action.payload,
      }
    default:
      return state
  }
}

const Object = () => {
  const [person, dispatch] = useReducer(personReducer, {
    name: '',
    age: null,
  })
  return (
    <div>
      <input
        type='text'
        name=''
        id=''
        placeholder='<jbdjasdb'
        value={person.name}
        onChange={(e) =>
          dispatch({
            type: 'updateName',
            payload: e.target.value,
          })
        }
      />
      <input
        type='number'
        name=''
        id=''
        placeholder='<jbdjasdb'
        value={person.age}
        onChange={(e) =>
          dispatch({
            type: 'updateAge',
            payload: e.target.value,
          })
        }
      />
      <h1>{person.age}</h1>
      <h1>{person.name}</h1>
    </div>
  )
}

export default Object
