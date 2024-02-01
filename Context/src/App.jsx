import { useState, useContext } from 'react'
import Card from './components/Card'
import Header from './components/Header'

import { themeContext } from './components/context'

function App() {
  const [count, setCount] = useState(0)
  const [darkTheme, setDarkTheme] = useState(false)

  const theme = useContext(themeContext)
  return (
    <>
      <themeContext.Provider value={darkTheme} />
      <main style={{ color: darkTheme ? 'green' : 'red' }}>
        <button
          onClick={() => {
            setDarkTheme(!darkTheme), console.log(darkTheme)
          }}
        >
          safjlbsdf
        </button>

        <Card imgC='https://images.pexels.com/photos/6973694/pexels-photo-6973694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <Card imgC='https://images.pexels.com/photos/6973694/pexels-photo-6973694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <Card imgC='https://images.pexels.com/photos/6973694/pexels-photo-6973694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </main>
      <themeContext.Provider value={darkTheme} />
    </>
  )
}

export default App
