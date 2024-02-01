import React from 'react'
import { useState } from 'react'

const InputArray = () => {
  const [user, setUser] = useState('')
  const [userlist, setUserList] = useState([])
  const arrayHandler = () => {
    setUserList([...userlist, user])
    setUser('')
  }
  return (
    <div>
      {userlist.map((userr) => (
        <li>{userr}</li>
      ))}
      <input
        type='text'
        name=''
        id=''
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={arrayHandler}>push</button>
    </div>
  )
}

export default InputArray
