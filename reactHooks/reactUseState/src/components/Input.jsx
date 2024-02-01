import React from 'react'
import { useState } from 'react'

const Input = () => {
  const [user, setUser] = useState('')
  return (
    <div>
      <div>{user}</div>
      <input
        type='text'
        name=''
        id=''
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </div>
  )
}

export default Input
