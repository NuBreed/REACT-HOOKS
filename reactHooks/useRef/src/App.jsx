import { useRef } from 'react'

function App() {
  const countRef = useRef(0)

  const handle = () => {
    countRef.current++
    console.log(`Clicked ${countRef.current} times`)
  }

  console.log('I rendered!')

  return <button onClick={handle}>Click me</button>
}
export default App
