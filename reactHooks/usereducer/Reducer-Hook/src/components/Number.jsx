import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase': {
      return state + 1
    }
    case 'decrease': {
      return state - 1
    }
    case 'reset': {
      return (state = 0)
    }
  }
}

const Number = () => {
  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <h1>{state}</h1>
      <button
        onClick={() =>
          dispatch({
            type: 'increase',
          })
        }
      >
        increase
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'decrease',
          })
        }
      >
        decrease
      </button>

      <button
        onClick={() =>
          dispatch({
            type: 'reset',
          })
        }
      >
        reset
      </button>
    </>
  )
}

export default Number
