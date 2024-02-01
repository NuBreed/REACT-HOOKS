import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className='card'>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>increase</button>
      <button onClick={() => setCount((count) => count - 1)}>decrease</button>
    </div>
  )
}

export default Counter
